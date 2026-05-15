import Button from "../BoxModel/Button";
import Profile from "../Profile/Profile";
import TitleText from "../Text/TitleText";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  const navLinks = [
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "How It Works",
      href: "/how-it-works",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className="px-12 py-4 flex items-center justify-between">
      <TitleText
        text="STREAMBOOTH"
        size="text-3xl"
        weight="font-bold"
        color="text-white"
        className=" font-display"
      />
      <ul className="flex items-center gap-10">
        {navLinks.map((links, index) => (
          <li key={index}>
            <a
              href={links.href}
              className="text-gray-400 hover:text-red-600 transition-colors text-[18px]  font-body"
            >
              {links.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-6 ">
        <Button
          text="Login"
          bgColor="bg-black"
          color="text-white"
          className="font-body border border-white"
        />
        <Button
          bgColor="bg-red-600"
          text="Get Started"
          color="text-white"
          className="font-body"
        />
      </div>
    </nav>
  );
};

export default Navbar;
