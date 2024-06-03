import "../components/styles/bubbleButton.css";
export const Contact_Forms = () => {
  return (
    <div className="w-[500px] flex flex-col h-[500px] gap-4 border rounded-xl p-4">
      <div className="flex flex-col items-start gap-3">
        <span className="text-white italic text-lg">Name</span>
        <input
          style={{
            width: "100%",
            height: "50px",
            background: "#353535",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "#888A88",
            color: "white",
            fontWeight: "bolder",
          }}
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="flex flex-col items-start gap-3">
        <span className="text-white italic text-lg">Email</span>
        <input
          style={{
            width: "100%",
            height: "50px",
            background: "#353535",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "#888A88",
            color: "white",
            fontWeight: "bolder",
          }}
          type="text"
          placeholder="Email"
        />
      </div>

     <div className="flex flex-col items-start gap-3">
     <span className="text-white italic text-lg">Message</span>
     <textarea
        style={{
          width: "100%",
          height: "150px",
          background: "#353535",
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "#888A88",
          color: "white",
          fontWeight: "bolder",
        }}
        placeholder="Message"
      />
     </div>

      <button className="text-white italic w-full h-[50px] bg-[#202621] rounded-md">
        Send Message
      </button>
    </div>
  );
};
