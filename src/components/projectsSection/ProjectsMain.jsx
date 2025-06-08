import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import project1 from '../../assets/images/p6.png'
import project2 from "../../assets/images/p8.png";
import project4 from "../../assets/images/p10.png";
import project5 from "../../assets/images/p7.png";
import project6 from "../../assets/images/p11.png";
import project9 from "../../assets/images/p9.png";
import project14 from "../../assets/images/p14.png";
import project15 from "../../assets/images/p15.png";
import project16 from "../../assets/images/p16.png";
import project17 from "../../assets/images/p17.png";





const projects = [

 {
    name: "Next.js Burger Landing page",
    year: "Nov 2023",
    align: "right",
    image: project9,
    link: "https://burger-website-kappa.vercel.app",
  },

  {
    name: "Business Portfolio",
    year: "Nov 2024",
    align: "left",
    image: project4,
    link: "https://www.ushaseer.com/",
  },

  {
    name: "Modern Dashboard UI",
    year: "Sept 2024",
    align: "right",
    image: project2,
    link: "https://modern-react-admin-dashboard-ui.vercel.app/",
  },

  {
    name: "React Comfy-store",
    year: "Jan 2025",
    align: "left",
    image: project14,
    link: "https://comfy-store-peach-one.vercel.app/",
  },

  {
    name: "React Job Tracking App",
    year: "April 2025",
    align: "right",
    image: project15,
    link: "https://jobstify-ndukwe-chimas-projects.vercel.app/",
  },

  {
    name: "React Github User Finder",
    year: "May 2025",
    align: "left",
    image: project16,
    link: "https://github-user-finder-self.vercel.app/",
  },

  {
    name: "Next.js Cote Royale",
    year: "May June",
    align: "right",
    image: project17,
    link: "https://cote-royale-khaki.vercel.app/",
  },

  {
    name: "Movie Web App",
    year: "Dec 2023",
    align: "left",
    image: project5,
    link: "https://movie-web-app-iota.vercel.app/",
  },

  {
    name: "Next.j E-commerce App",
    year: "May 2024",
    align: "right",
    image: project1,
    link: "https://e-shop-next-typescript.vercel.app/",
  },


  {
    name: "Restaurant Landing Page",
    year: "Jan 2025",
    align: "left",
    image: project6,
    link: "https://restaurant-single-page-website-javascript.vercel.app/",
  },

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
