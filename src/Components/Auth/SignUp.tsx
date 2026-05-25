import { useNavigate } from "react-router-dom";
import Button from "../BoxModel/Button";
import Divider from "../Line/Divider";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="w-1/3 mx-auto h-full bg-[#0F0E17] rounded-2xl">
      <div className="px-6 py-4 flex flex-col items-center justify-center">
        <div className="flex gap-4 items-center py-4">
          <TitleText
            text="StreamBooth"
            size="text-[28px]"
            weight="font-semibold font-display"
          />
          <div className=" ">
            <div className="h-2.5 w-2.5 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#dc2626]" />
          </div>
        </div>
        <TitleText
          text="Join The Command Network"
          size="text-[24px]"
          weight="font-bold"
        />
        <DescriptionText
          text="Start directing live moments today"
          size="text-18px font-body py-2"
        />

        <div className="w-[90%]">
          <div className="py-2">
            <label
              htmlFor="full name"
              className="text-white text-[18px] font-body"
            >
              Full name
            </label>
            <input
              type="text"
              id="full name"
              placeholder="Enter your name"
              className="pl-4 border border-gray-400/20 rounded-lg w-full text-white py-4 mt-2"
            />
          </div>
          <div className="py-2">
            <label htmlFor="email" className="text-white text-[18px] font-body">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="olawealth@gmaol.com"
              className="pl-4 border border-gray-400/20 rounded-lg w-full text-white py-4 mt-2"
            />
          </div>
          <div className="py-2">
            <label
              htmlFor="password"
              className="text-white text-[18px] font-body "
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="pl-4 border border-gray-400/20 rounded-lg w-full text-white py-4 mt-2"
              />
              <span
                onClick={handleShowPassword}
                className="absolute text-white left-[calc(95%-12px)] top-[calc(50%+-6px)]"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 w-full flex justify-center items-center">
          <Button
            text="Sign up"
            bgColor="bg-white"
            paddindtb="py-4"
            className="w-[90%] "
          />
        </div>
        <div className="flex justify-between items-center">
          <Divider />
          <DescriptionText text="or" />
          <Divider />
        </div>
        <div className="py-4 w-full flex justify-center items-center">
          <Button
            text="Sign up with Google"
            bgColor="bg-white"
            color="text-black"
            paddindtb="py-4"
            className="w-[90%]"
          />
        </div>
        <div className=" w-full flex justify-center items-center py-2">
          <Button
            text="Sign up with Apple"
            bgColor="bg-black"
            color="text-white"
            paddindtb="py-4"
            className="border border-white/40 rounded-white w-[90%] "
          />
        </div>
        <div className="flex gap-2 mt-4 items-center">
          <TitleText text="Already have an account?" size="text-[14px]" />
          <Button
            onClick={handleLogin}
            text="Login"
            bgColor="bg-transparent"
            color="text-red-600"
            paddinglr="px-0"
            className="cursor-pointer font-body font-semibold"
          />
        </div>
        <DescriptionText
          text="By signing up, you agree to our Terms of Service and Privacy Policy."
          size="text-[12px]"
          className="py-2"
        />
      </div>
    </div>
  );
};

export default SignUp;
