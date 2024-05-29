import { Navbar } from "@/components";
import ScrollSection_1 from "@/components/Scroll/Section1";
import ScrollSection_2 from "@/components/Scroll/Section2";

const About = () => {
  return (
    <div className="w-screen h-fit absolute top-0 bg-[#2a2a32] flex flex-col items-center p-4">
      <Navbar />
      <div className="w-[1200px] mt-4 h-full flex-wrap flex justify-between">
        <ScrollSection_1 />
        <ScrollSection_2 />
      </div>
    </div>
  );
};

export default About;
