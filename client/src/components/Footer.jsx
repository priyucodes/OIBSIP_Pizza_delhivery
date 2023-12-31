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
          className="bg-primary rounded-full p-2 text-white  right-4"
        />
      </button>
      <div className="flex max-w-screen-2xl mx-auto justify-between items-start py-12 lg:py-24 flex-col gap-4 lg:gap-0  lg:flex-row">
        <div className="flex flex-col gap-4 border-b border-b-slate-400 pb-3 w-full lg:border-0 lg:pb-0 lg:w-fit">
          <p className="text-primary">Location</p>
          <p className="text-white/70">
            ABC Southwest Park, New Delhi, India 110011
          </p>
        </div>
        <div className="flex flex-col gap-4 border-b border-b-slate-400 pb-3 w-full lg:border-0 lg:pb-0 lg:w-fit">
          <p className="text-primary">Hours</p>
          <p className="text-white/70">
            SUNDAY – THURSDAY
            <br />
            11AM – 10PM <br />
            FRIDAY 11AM – 11PM <br /> SATURDAY 11AM – 11PM
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-primary relative lg:left-4">FIND US</p>
          <span className="text-zinc-700 relative -left-4 lg:left-0">
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
          </span>
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
