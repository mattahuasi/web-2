import { Link } from "react-router";

export const LinkButton = ({ path }: { path: string }) => {
  return (
    <Link
      className="inline-block px-4 py-2 rounded-md font-medium text-sm bg-purple-500 text-gray-50 hover:bg-purple-600 hover:scale-110 capitalize transition-all duration-300 ease-in-out"
      to={`/destiny/${encodeURIComponent(path)}`}
      viewTransition
    >
      Ver Destino
    </Link>
  );
};
