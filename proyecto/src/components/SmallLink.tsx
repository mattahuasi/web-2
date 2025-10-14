import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

export const SmallLink = ({ path }: { path: string }) => {
  return (
    <Link
      className="inline-block text-xs font-medium text-purple-500 hover:text-purple-600 hover:scale-110 capitalize transition-all duration-300 ease-in-out"
      to={`/destiny/${encodeURIComponent(path)}`}
      viewTransition
    >
      <span className="flex items-center gap-1">
        Explorar destino <FaArrowRight />
      </span>
    </Link>
  );
};
