import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import project1 from '../../assets/images/p6.png'
import project2 from "../../assets/images/p8.png";
import project3 from "../../assets/images/p13.png";
import project4 from "../../assets/images/p10.png";
import project5 from "../../assets/images/p7.png";
import project6 from "../../assets/images/p11.png";
import project7 from "../../assets/images/p3.png";
import project8 from "../../assets/images/p9.png";


const projects = [
  {
    name: "E-commerce App",
    year: "May 2024",
    align: "right",
    image: project1,
    link: "https://e-shop-next-typescript.vercel.app/",
  },

  {
    name: "Modern Dashboard UI",
    year: "Sept 2024",
    align: "left",
    image: project2,
    link: "https://modern-react-admin-dashboard-ui.vercel.app/",
  },

  {
    name: "Doctors Consulting UI",
    year: "Jan 2025",
    align: "right",
    image: project3,
    link: "https://med-consult.vercel.app/",
  },

  {
    name: "Business Portfolio",
    year: "Nov 2024",
    align: "left",
    image: project4,
    link: "https://business-portfolio-website.vercel.app/",
  },

  {
    name: "Movie Web App",
    year: "Dec 2023",
    align: "right",
    image: project5,
    link: "https://movie-web-app-iota.vercel.app/",
  },

  {
    name: "Restaurant Landing Page",
    year: "Jan 2025",
    align: "left",
    image: project6,
    link: "https://restaurant-single-page-website-javascript.vercel.app/",
  },

  {
    name: "Modern Multi-Pages Website",
    year: "Jan 2025",
    align: "right",
    image: project7,
    link: "https://modern-website-javascript.netlify.app/",
  },

  {
    name: "Agro Business Landing page",
    year: "Dec 2024",
    align: "left",
    image: project8,
    link: "https://okenkwu-theta.vercel.app/",
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
