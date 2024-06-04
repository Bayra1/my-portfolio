import { Contact_Forms, Navbar } from "@/components";
import { FacebookSvG, GithubSvG, TwitterSvG } from "@/components/SvG";
import SparkeBackground from "@/components/background/SparkleBackgroun";
import "../../components/styles/bubbleButton.css";
import { FlipWords } from "@/components/ui/flip-words";

const Contact_Me = () => {
  return (
    <div className="w-screen min-h-screen relative bg-black flex flex-col items-center p-4 overflow-hidden">
      <Navbar />
      <SparkeBackground />
      <div className="w-[1200px] relative mt-[50px] h-fit  justify-center items-center flex z-10 flex-col">
        <span className="text-4xl w-[500px] justify-center text-white flex flex-row italic">          
          <FlipWords words={["Find-me", "Then-let's-create"]} /> <br />
          <h2 className="text-white justify-center flex pl-4 pb-4 text-3xl italic underline-offset-8">
            🔥
          </h2>
        </span>
        <Contact_Forms />
      </div>
    </div>
  );
};
export default Contact_Me;
