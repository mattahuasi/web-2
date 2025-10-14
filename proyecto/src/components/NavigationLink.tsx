import { NavLink, useLocation } from "react-router";
import { useScroll } from "../hooks/useScroll";

export const NavigationLink = ({
  path,
  label,
}: {
  path: string;
  label: string;
}) => {
  const { scrolled } = useScroll();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavLink
      className={({ isActive }) => {
        const baseClasses =
          "inline-block text-sm font-semibold hover:scale-110 transition-all duration-300 ease-in-out";
        const activeClasses = isActive
          ? scrolled
            ? "text-purple-500 border-b-2 border-purple-500"
            : currentPath === "/"
            ? "text-gray-50 border-b-2 border-gray-50"
            : "text-purple-500 border-b-2 border-purple-500"
          : scrolled
          ? "text-purple-500"
          : currentPath === "/"
          ? "text-gray-50"
          : "text-purple-500";

        return `${baseClasses} ${activeClasses}`;
      }}
      to={path}
      viewTransition
    >
      {label}
    </NavLink>
  );
};
