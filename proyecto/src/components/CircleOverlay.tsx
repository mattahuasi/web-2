export const CircleOverlay = ({
  side,
  top,
  right,
  bottom,
  left,
  backgroundColor,
  opacity,
}: {
  side: string;
  top: string;
  right: string;
  bottom: string;
  left: string;
  backgroundColor: string;
  opacity: string;
}) => {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: side,
        height: side,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        backgroundColor: backgroundColor,
        opacity: opacity,
      }}
    ></div>
  );
};
