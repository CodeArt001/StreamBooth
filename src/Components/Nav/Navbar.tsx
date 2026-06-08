import { useState } from "react";
import Button from "../BoxModel/Button";
import TitleText from "../Text/TitleText";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  children?: React.ReactNode;
  customClass?: string;
}

const Navbar = ({ children, customClass }: NavbarProps) => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const navLinks = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Who Its For",
      href: "#who-its-for",
    },

    {
      name: "Pricing",
      href: "#pricing",
    },
  ];
  return (
    <nav
      className={`px-12 py-4 flex items-center justify-between sticky top-0 z-10 border-b border-gray-400/20 bg-access-bg ${customClass}`}
    >
      <div className="relative">
        <TitleText
          text="STREAMBOOTH"
          size="text-3xl"
          weight="font-bold"
          color="text-white"
          className=" font-display"
        />
        <div className="absolute -top-1 left-[13.6rem] z-10 animate-smooth-pulse">
          <div className="h-2.5 w-2.5 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#dc2626]" />
        </div>
      </div>
      <ul className={`flex items-center gap-10`}>
        {navLinks.map((links, index) => (
          <>
            <li key={index}>
              <a
                onClick={() => setActiveLink(links.href)}
                href={links.href}
                className={`text-gray-400 hover:text-red-600 transition-colors text-[18px]  font-body ${activeLink === links.href ? "text-red-600 font-semibold" : ""}`}
              >
                {links.name}
              </a>
            </li>
          </>
        ))}
      </ul>
      <div className="flex items-center gap-6 ">
        <Button
          onClick={handleLogin}
          text="Login"
          bgColor="bg-black"
          color="text-white"
          className="font-body border border-white/40 rounded-white"
        />
        <Button
          onClick={handleSignUp}
          bgColor="bg-red-600"
          text="Get Started"
          color="text-white"
          className="font-body"
        />
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
