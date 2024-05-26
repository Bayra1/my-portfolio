import { Navbar } from "@/components";
import { SparklesBackground } from "@/components/ui/example";

export default function Home() {
  return (
    <div
      className="w-full h-screen flex flex-col items-center relative p-5"      
    >
      <Navbar />
      <SparklesBackground/>
    </div>
  );
}
