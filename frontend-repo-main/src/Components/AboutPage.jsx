
import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <header className='font-["Neue_Montreal"] text-lg md:text-2xl lg:text-3xl leading-tight text-black drop-shadow-2xl shadow-black/50 font-semibold tracking-wide'>
        <span className="text-black drop-shadow-lg animate-pulse">
          SkillSwap connects individuals to exchange knowledge and abilities without money.
        </span>
        <br />
        <span className="text-black drop-shadow-lg">
          Users can list their skills and find others with complementary ones they want to learn.
        </span>
        <br />
        <span className="text-black drop-shadow-lg">
          The app enables direct skill matching, scheduling sessions, and mutual rating after exchanges.
        </span>
        <br />
        <span className="text-black drop-shadow-lg">
          It fosters a community-driven learning ecosystem where everyone can teach and grow.
        </span>
      </header>

    </div>
  );
};

export default AboutPage;


