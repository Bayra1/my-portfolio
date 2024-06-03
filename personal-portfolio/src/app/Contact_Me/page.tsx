import { Contact_Forms, Navbar } from "@/components";
import { SparklesCore } from "@/components/ui/sparkles";
import "../../components/styles/bubbleButton.css";
import { FacebookSvG, GithubSvG, TwitterSvG } from "@/components/SvG";

const Contact_Me = () => {
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
      <div className="w-[1200px] relative mt-4 h-screen justify-center items-center flex z-10 flex-col">
        <Contact_Forms />
        <div className="w-[200px] mt-7 flex flex-row justify-between">
          <FacebookSvG />
          <TwitterSvG />
          <GithubSvG />
        </div>
      </div>
    </div>
  );
};
export default Contact_Me;
