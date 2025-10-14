type ErrorCardProps = {
  error: Error;
};

export const ErrorCard = ({ error }: ErrorCardProps) => {
  return (
    <p className="text-md font-semibold text-red-500 mb-3">{error?.message}</p>
  );
};
