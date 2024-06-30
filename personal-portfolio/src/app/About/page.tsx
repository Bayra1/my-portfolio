import { Navbar } from "@/components";
import { SparklesCore } from "@/components/ui/sparkles";
import ScrollSection_1 from "@/components/Scroll/Section1";
import ScrollSection_2 from "@/components/Scroll/Section2";

const About = () => {
  return (
    <div className="w-screen min-h-screen relative bg-black flex flex-col items-center p-4 overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 w-full h-full bg-black flex flex-col items-center justify-center">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={4.4}
          particleDensity={10}
          className="absolute inset-0 w-full h-full"
          particleColor="#9EA1D4"
        />
      </div>
      <div className="w-[1200px] relative mt-4 h-full flex-wrap flex justify-between z-10">
        <ScrollSection_1 />
        <ScrollSection_2 />
      </div>
    </div>
  );
};

export default About;
