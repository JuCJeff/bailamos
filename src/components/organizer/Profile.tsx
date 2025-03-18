import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { Timestamp } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useOrganizerProfile, useUpdateProfile } from "@/hooks/organizer";

import type { OrganizerProfileData } from "@/types/organizerTypes";

interface ProfileFormField {
  label: string;
  value: string;
}

const Profile = () => {
  const [profileFormDisabled, setProfileFormDisabled] = useState<boolean>(true);
  const [profileFormFields, setProfileFormFields] = useState<
    ProfileFormField[]
  >([]);

  const {
    loading: profileLoading,
    error: profileError,
    profileData,
  } = useOrganizerProfile();
  const {
    loading: updating,
    error: updateError,
    success: updateSuccess,
    updateProfile,
  } = useUpdateProfile();

  useEffect(() => {
    if (profileData) {
      setProfileFormFields([
        {
          label: "Email",
          value: profileData.email,
        },
        {
          label: "First name",
          value: profileData.firstName || "",
        },
        {
          label: "Last name",
          value: profileData.lastName || "",
        },
        {
          label: "Social Media",
          value: profileData.socialMediaLink ?? "",
        },
        {
          label: "Website",
          value: profileData.websiteLink ?? "",
        },
      ]);
    }
  }, [profileData]);

  const handleUpdateProfile = async () => {
    if (!profileData) {
      toast.error("Profile data not found");
      return;
    }

    const fieldMapping: Record<string, keyof OrganizerProfileData> = {
      "First name": "firstName",
      "Last name": "lastName",
      "Social Media": "socialMediaLink",
      Website: "websiteLink",
    };
    const updatedProfile = profileFormFields.reduce((acc, field) => {
      const property = fieldMapping[field.label];
      if (property && field.value) {
        if (property === "createdAt") {
          acc[property] = Timestamp.fromDate(new Date(field.value));
        } else {
          acc[property] = field.value;
        }
      }
      return acc;
    }, {} as OrganizerProfileData);

    // Check if there are any changes in the form fields compared to the original profile data
    const hasChanges = Object.keys(updatedProfile).some(
      (key) =>
        updatedProfile[key as keyof OrganizerProfileData] !==
        profileData[key as keyof OrganizerProfileData]
    );

    if (!hasChanges) {
      toast("No changes detected. Profile not updated");
      return;
    }

    await updateProfile(updatedProfile);

    if (updateSuccess) {
      toast.success("Successfully updated your profile");
    }

    if (updateError) {
      toast.error("An error occured while updating profile, please try again");
    }

    setProfileFormDisabled(true);
  };
  if (profileLoading) {
    return (
      <div>
        <p>Profile loading...</p>
      </div>
    );
  }

  if (profileError) {
    toast.error(profileError);

    return;
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <Toaster richColors position="top-center" className="text-start" />

      <div>
        <Card className="md:w-[450px]">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex-col mt-4">
              {profileFormFields.map((field, index) => (
                <li
                  key={field.label}
                  className="flex gap-1 items-center text-start mb-2 justify-between"
                >
                  <label className="w-1/4">{field.label}</label>
                  <Input
                    value={field.value}
                    onChange={(e) => {
                      const updatedFields = [...profileFormFields];
                      updatedFields[index].value = e.target.value;
                      setProfileFormFields(updatedFields);
                    }}
                    disabled={field.label === "Email" || profileFormDisabled}
                    className="w-3/4"
                  />
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="link"
              onClick={() => {
                setProfileFormDisabled(!profileFormDisabled);
              }}
              disabled={!profileFormDisabled}
            >
              Edit Profile
            </Button>
            <Button
              onClick={handleUpdateProfile}
              disabled={updating || profileFormDisabled}
              variant={profileFormDisabled ? "outline" : "default"}
            >
              Update Profile
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
