import { useEffect, useState, useRef } from "react";
import { Control } from "react-hook-form";

import ImageUploading, { ImageListType } from "react-images-uploading";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import type { EventFormValues } from "@/schemas/eventSchema";

interface ImageUploadFieldProps {
  control: Control<EventFormValues>;
  name: "image";
}

const ImageUploadField = ({ control, name }: ImageUploadFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor="imageUpload">Upload Image</FormLabel>
          <FormControl>
            <ImageUpload
              id="imageUpload"
              value={field.value || undefined}
              onChange={field.onChange}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface ImageUploadProps {
  id: string;
  value?: File;
  onChange: (file?: File) => void;
}

const ImageUpload = ({ id, value, onChange }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let objectUrl: string | null = null;

    if (value instanceof File) {
      objectUrl = URL.createObjectURL(value);
      setPreview(objectUrl);
    } else {
      setPreview(null);
    }

    // Clean up the object URL when the image changes or the component unmounts
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [value]);

  const onImageChange = (imageList: ImageListType) => {
    const file = imageList[0]?.file;
    if (file instanceof File) {
      onChange(file);
    } else {
      console.warn("Selected image is not a valid File object");
      onChange(undefined);
    }
  };

  return (
    <ImageUploading
      multiple={false}
      value={
        value
          ? [
              {
                file: value,
                data_url: preview ?? "",
              },
            ]
          : []
      }
      onChange={onImageChange}
      dataURLKey="data_url"
    >
      {({
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="flex flex-col gap-4">
          {/* Hidden File Input (optional fallback) */}
          <input
            id={id}
            type="file"
            ref={inputRef}
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file instanceof File) {
                onChange(file);
              }
            }}
          />

          <Button
            type="button"
            style={
              isDragging
                ? { backgroundColor: "limegreen", transition: "0.25s" }
                : undefined
            }
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop image here
          </Button>

          {preview && (
            <div>
              <img src={preview} alt="event preview" className="rounded-2xl" />
              <div className="flex gap-2 mt-2">
                <Button type="button" onClick={() => onImageUpdate(0)}>
                  Update
                </Button>
                <Button type="button" onClick={() => onImageRemove(0)}>
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploadField;
