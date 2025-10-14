type TiltedImageProps = {
  src: string;
  alt: string;
  photographer: string;
};

export const TiltedImage = ({ src, alt, photographer }: TiltedImageProps) => {
  return (
    <div className="p-4" style={{ perspective: "23rem" }}>
      <h2 className="text-gray-900 dark:text-gray-50 text-sm font-semibold mb-1">
        Imagen de referencia
      </h2>
      <img
        className="bg-cover bg-center rounded-md shadow-md p-4 mb-4"
        style={{
          transform: "rotateY(10deg) rotate(-5deg)",
          transformOrigin: "left center",
          transition: "all 0.5s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg) rotate(0deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(10deg) rotate(-5deg)";
        }}
        src={src}
        alt={alt}
      />
      <h3 className="text-gray-900 dark:text-gray-50 text-md font-semibold">
        Descripción
      </h3>
      <p className="text-gray-900 dark:text-gray-50 text-xs break-words line-clamp-3">
        {alt}
      </p>

      <p className="text-gray-900 dark:text-gray-50 text-xs text-right">
        Fotografo:{" "}
        <span className="text-purple-500 font-semibold">{photographer}</span>
      </p>
    </div>
  );
};
