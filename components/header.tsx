import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-[600px] bg-contain bg-no-repeat bg-center max-sm:h-80 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/tls.png')" }}
    >
      
      <div className="flex md:items-center md:justify-center h-full max-sm:pt-15">
        <h1 className="text-[#081607] text-6xl font-bold text-center max-sm:text-3xl">Where Every Plant <br/> Finds a Home</h1>
      </div>
    </div>
  );
};

export default Hero;
