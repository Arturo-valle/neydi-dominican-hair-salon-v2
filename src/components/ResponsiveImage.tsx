import React from "react";

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  ...props
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      {...props}
    />
  );
}
