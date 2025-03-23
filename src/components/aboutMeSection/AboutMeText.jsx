import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 text-center md:text-left sm:text-center">
        About Me
      </h2>
      <p className="max-w-2xl text-center md:text-left sm:text-center">
        I am a junior front-end web developer with a passion for creating
        interactive, user-friendly, and responsive web applications. I have
        experience working with HTML, CSS, Javascript, React, Tailwind CSS, and
        Git; while building personal and team projects. I have also started
        learning Next.js and Typescript as both are highly needed in building a
        better applications. I am a fast learner and I am always looking foward
        to expand my knowledge and skill set to become a better web developer. I
        am a team player and I will be excited to work with developers,
        designers, and others to create amazing applications.
      </p>
      <button
        className="border border-orange rounded-full 
      py-2 px-4 text-lg flex gap-2 items-center mt-10
       hover:bg-orange transition-all duration-500 
       cursor-pointer md:self-start self-center"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
