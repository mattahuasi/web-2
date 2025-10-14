type ImageGalleryProps = {
  src: string;
  photographer: string;
  alt: string;
};

export const ImageGallery = ({ src, alt, photographer }: ImageGalleryProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img
        className="w-full h-full object-cover rounded-md shadow-sm hover:scale-110 transition-all duration-500 ease-in-out"
        src={src}
        alt={alt}
      />
      <p className="text-gray-900 dark:text-gray-50 text-xs text-right">
        Fotografo:{" "}
        <span className="text-purple-500 font-semibold">{photographer}</span>
      </p>
    </div>
  );
};
