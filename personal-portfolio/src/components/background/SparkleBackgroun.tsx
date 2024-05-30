import { SparklesCore } from "../ui/sparkles";

const SparkeBackground = () => {
  return (
    <div className="sparkleBackground absolute inset-0 w-full h-full flex flex-col items-center justify-center">
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
  );
};

export default SparkeBackground;
