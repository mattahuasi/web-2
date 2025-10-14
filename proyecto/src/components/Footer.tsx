import {} from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Logo } from "./Logo";
import { SocialLink } from "./SocialLink";

export const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 bg-gray-50 dark:bg-gray-900 px-10 lg:px-40 py-8">
      <Logo />

      <div className="flex justify-between items-center gap-4">
        <SocialLink Icon={FaXTwitter} link="#" />
        <SocialLink Icon={FaFacebook} link="#" />
        <SocialLink Icon={FaInstagram} link="#" />
        <SocialLink Icon={FaWhatsapp} link="#" />
      </div>
    </footer>
  );
};
