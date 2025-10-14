import { IconType } from "react-icons";

type SocialLinkProps = {
  Icon: IconType;
  link: string;
};

export const SocialLink = ({ Icon, link }: SocialLinkProps) => {
  return (
    <a
      href={link}
      className="text-gray-900 dark:text-gray-50 hover:text-purple-500 hover:scale-110 transition-all duration-300 ease-in-out"
      target="_blank"
      rel="noreferrer"
    >
      <Icon />
    </a>
  );
};
