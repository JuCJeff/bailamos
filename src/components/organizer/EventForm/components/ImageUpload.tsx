import { useEffect, useState, useRef } from "react";
import { Control } from "react-hook-form";
import * as motion from "motion/react-client";

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

          {/* Upload Button with motion */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: isDragging ? 0.8 : 1, 
              scale: isDragging ? 0.98 : 1 
            }}
            transition={{ duration: 0.2 }}
          >
            <Button
              type="button"
              style={
                isDragging
                  ? { backgroundColor: "limegreen", transition: "0.25s" }
                  : undefined
              }
              onClick={onImageUpload}
              {...dragProps}
              className="w-full"
            >
              Click or Drop image here
            </Button>
          </motion.div>

          {/* Image Preview with motion animations */}
          {preview && (
            <motion.div
              key="image-preview"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.3 
              }}
              className="space-y-3"
            >
              {/* Image Container */}
              <motion.div
                initial={{ borderRadius: "8px" }}
                animate={{ borderRadius: "16px" }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <img 
                  src={preview} 
                  alt="event preview" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button type="button" onClick={() => onImageUpdate(0)}>
                    Update
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="button" 
                    variant="destructive"
                    onClick={() => onImageRemove(0)}
                  >
                    Remove
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploadField;
