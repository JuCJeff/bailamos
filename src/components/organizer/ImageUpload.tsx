import { useRef, useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  value?: File;
  onChange: (file?: File) => void;
}

const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  // Store image preview URL in useRef to prevent unnecessary re-renders
  const imagePreviewUrl = useRef<string | null>(null);

  useEffect(() => {
    if (value) {
      const url = URL.createObjectURL(value);
      imagePreviewUrl.current = url;
      setPreview(url);
    }
    return () => {
      if (imagePreviewUrl.current) {
        URL.revokeObjectURL(imagePreviewUrl.current);
      }
    };
  }, [value]);

  const onImageChange = (ImageList: ImageListType) => {
    const file = ImageList[0]?.file || undefined;
    onChange(file);
  };

  return (
    <ImageUploading
      multiple={false}
      value={
        value ? [{ file: value, data_url: imagePreviewUrl.current ?? "" }] : []
      }
      onChange={onImageChange}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="flex flex-col gap-4">
          <Button
            type="button"
            style={
              isDragging
                ? { backgroundColor: "limegreen", transitionDuration: "250ms" }
                : undefined
            }
            onClick={onImageUpload}
            {...dragProps}
          >
            Click or Drop image here
          </Button>
          {imageList.map((image, index) => (
            <div key={image.data_url}>
              <img
                src={preview ?? undefined}
                alt="event-image"
                className="rounded-2xl"
              />
              <div className="flex gap-2 mt-2">
                <Button type="button" onClick={() => onImageUpdate(index)}>
                  Update
                </Button>
                <Button type="button" onClick={() => onImageRemove(index)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUpload;
