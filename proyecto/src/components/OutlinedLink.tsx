import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

export const OutlinedLink = () => {
  return (
    <Link
      className="block px-5 py-2 text-xs font-medium rounded-md text-purple-500 dark:text-gray-50 border border-purple-500 dark:border-gray-50 hover:scale-110 capitalize transition-all duration-300 ease-in-out"
      to="/destinies"
      viewTransition
    >
      <span className="flex items-center gap-1">
        Explorar todos <FaArrowRight />
      </span>
    </Link>
  );
};
