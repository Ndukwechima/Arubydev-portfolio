import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="chimandukwe.r@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+2348106706460" Image={FiPhone} />
      <SingleInfo text="Aba City, Nigeria" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
