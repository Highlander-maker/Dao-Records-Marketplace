import { Image, ImageProps } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props extends ImageProps {}

const FallbackImage: FC<Props> = (props) => {
  return (
    <Image
      fallbackSrc="/logo.png"  // This is the correct way to reference the image in the public directory
      alt="Fallback Image"
      {...props}
      onError={(e) => console.error("Image failed to load:", e.currentTarget.src)}
    />
  );
};

export default FallbackImage;