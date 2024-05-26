import "./styles/navbar.css";
export const Navbar = () => {
  return (
    <main className="w-[1200px] z-10 h-[50px] flex justify-between items-center p-3-400">
      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            <img
              src="https://assets-global.website-files.com/64d1a97b791d8ca9bb004633/65cd7371a0f9b0515f337171_LogoWhite.svg"
              loading="lazy"
              alt="Pinecone Academy Logo"
            />
          </div>
          <div className="back flex gap-2 items-center flex-col">
            <span className="text-white text-lg">Sukhbaatar Ikhbayar</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <button className="text-white text-lg">Home</button>
        <button className="text-white text-lg">Work</button>
        <button className="text-white text-lg">Skills</button>
        <button className="text-white text-lg">About</button>
        <button className="text-white text-lg w-[150px] h-[50px] flex justify-center items-center rounded-3xl font-semibold bg-blue-400">
          Hire Me
        </button>
      </div>
    </main>
  );
};
