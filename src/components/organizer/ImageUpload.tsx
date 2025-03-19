import ImageUploading, { ImageListType } from "react-images-uploading";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  value?: File;
  onChange: (file?: File) => void;
}

const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const onImageChange = (ImageList: ImageListType) => {
    const file = ImageList[0]?.file || undefined;
    onChange(file);
  };

  return (
    <ImageUploading
      multiple={false} // Only allow 1 image
      value={
        value ? [{ file: value, data_url: URL.createObjectURL(value) }] : []
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
                ? {
                    backgroundColor: "limegreen",
                    transitionDuration: "250ms",
                    transitionTimingFunction: "ease-in-out",
                  }
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
                src={image["data_url"]}
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
