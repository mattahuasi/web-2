import { PacmanLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="flex flex-col justify-center gap-6 items-center">
      <PacmanLoader color="#a855f7" />
      <h5 className="text-center font-semibold text-purple-500 text-sm">
        Cargando...
      </h5>
    </div>
  );
};
