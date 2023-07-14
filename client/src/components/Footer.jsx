import { SocialIcon } from "react-social-icons";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-zinc-600 w-full text-lg font-roboto px-6  pb-0 overflow-hidden">
      <button onClick={scrollToTop} className="absolute left-1/2 mt-4">
        <ArrowSmallUpIcon
          width={40}
          height={40}
          className="bg-red-500 rounded-full p-2 text-white  right-4"
        />
      </button>
      <div className="flex max-w-screen-xl mx-auto justify-between items-start py-24 flex-wrap">
        <div className="flex flex-col gap-4 ">
          <p className="text-primary">Location</p>
          <p className="text-white/70">
            ABC Southwest Park, New Delhi, India 110011
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-primary">Hours</p>
          <p className="text-white/70">
            SUNDAY – THURSDAY
            <br />
            11AM – 10PM <br />
            FRIDAY 11AM – 11PM <br /> SATURDAY 11AM – 11PM
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-primary relative left-4">FIND US</p>
          <p className="text-zinc-700">
            <SocialIcon
              url="https://www.facebook.com/"
              bgColor="transparent"
              fgColor="#fff"
            />
            <SocialIcon
              url="https://www.instagram.com/"
              bgColor="transparent"
              fgColor="#fff"
            />
            <SocialIcon
              url="https://www.google.com/"
              bgColor="transparent"
              fgColor="#fff"
            />
          </p>
        </div>
      </div>
      <div className="bg-zinc-800 absolute w-full left-0  text-center py-4">
        <p className="text-white uppercase text-sm">
          &copy; Pizza Delhivery | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
