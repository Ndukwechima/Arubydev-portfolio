const SubHeroMain = () => {
  return (
    <div
      className="w-full border-y bg-brown border-lightGrey 
    text-lightGrey flex justify-around md:flex-row flex-col items-center uppercase xl:text-4xl 
    md:text-2xl sm:text-4xl py-8 
    gap-4  px-2 sm:px-0 "
    >
      <p className="text-2xl md:text">
        {" "}
        <span>🚀</span>Fast Learner
      </p>
      <p className="text-2xl md:text">
        {" "}
        <span>👥</span>Team Work
      </p>
      <p className="text-2xl md:text">
        {" "}
        <span>🔍</span>Details Master
      </p>
    </div>
  );
};

export default SubHeroMain;
