import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "3kMart",
    date: "2024 - Present",
    responsibilities: [
      "Building a landing page for a client.",
      "Implemented reusable components.",
      "Implemented responsive design.",
      "Added animations",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Freelancing",
    date: "2024 - Ended",
    responsibilities: [
      "Collaborate with my mentor throughout the project",
      "Implemented reusable components.",
      "Fixed bugs and improved the code.",
    ],
  },
  {
    job: "Web Development Instructor",
    company: "Kiddie Tech Ville",
    date: "2024 - Ended",
    responsibilities: [
      "Teaching HTML, CSS & JavaScript",
      "Helped students through their way in learning web development technologies.",
    ],
  },

  {
    job: "Front-End Developer",
    company: "Event-padi",
    date: "2024 - Ended",
    responsibilities: [
      "Created the UI of the Event-padi website App",
      "Implemented reusable components.",
      "Implemented responsive design.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
