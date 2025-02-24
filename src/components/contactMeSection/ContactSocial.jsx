import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/chima-ndukwe/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/Ndukwechima"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://twitter.com/PlutonetDesignz"
        Icon={FaXTwitter}
      />
    </div>
  );
};

export default ContactSocial;
