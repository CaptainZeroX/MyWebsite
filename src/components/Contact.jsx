import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import PhoneCanvas from "./canvas/Phone";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const formRef = useRef();
  const[form,setForm] = useState({
    name:"",
    email:"",
    message:"",
  })
  const [loading, setLoading] = useState(false);
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send ('service_v88fm5y', 'template_0qfhl4f',
    {from_name:form.name, to_name:"Moh'd Lutfi", from_email:form.email, to_email: 'mohdlutfialqwasmi2003@gmail.com', message:form.message}, 
    'fnah8kGN5BslgeXaA')
    .then((result) => {
      console.log(result.text);
      setLoading(false);
      alert('THank you for your message, I will get back to you soon!');
      setForm({
        name:"",
        email:"",
        message:"",
      })
    }, (error) => {
      console.log(error.text);
      setLoading(false);
      alert('Sorry, something went wrong, please try again later');
    });

  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>CONTACT</p>
      </motion.div>
    
   <div className="xl:mt-4 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    
     {/*<motion.div variants={textVariant()}>*/}  
   
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className=" flex-[0.75] p-8 rounded-2xl">
        <form ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="whats your name?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
            </label>
            <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="whats your email?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
            </label>
            <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
            </label>
            <button type="submit" className="py-3 px-8 outline-none w-fit text-white ffont-bold shadow-md shadow-primary rounded-xl">
              {loading ? "Sending..." : "Send"}

            </button>

        </form>
        </motion.div>
        <motion.div variants={slideIn('right', "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md: h-[550px] h-[350px]">
          <PhoneCanvas/>
        </motion.div>
       
     
</div>
</>
  );
};

export default SectionWrapper(Contact, "contact");
