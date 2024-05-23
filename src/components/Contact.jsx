import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FacebookIcon, GithubIcon, YoutubeIcon } from "./Icons";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Llyod",
      to_email: "bulicjanllyod@gmail.com",  // Your email
    };

    emailjs
      .send(
        'service_5yd2avs',
        'template_onecrd7',
        templateParams,
        'yxHzE3E6UoivPViJ2'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Error sending email:", error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-fourth p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch with me</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-fifth py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-fifth  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-fifth  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-fifth py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.75] bg-transparent p-8 rounded-2xl h-80 items-center border border-solid border-cyan-300'
      >
        <h3 className={styles.accounts}>Social Media Accounts</h3>

        <div className="flex items-center justify-center h-40">

          <a href="https://www.facebook.com/janllyod09"
            target="_blank"
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            class="mb-2 inline-block rounded border border-solid border-cyan-300 m-2 px-4 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span class="[&>svg]:h-4 [&>svg]:w-4">
              <FacebookIcon />
            </span>
          </a>

          <a href="https://github.com/janllyod09"
            target="_blank"
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            class="mb-2 inline-block rounded border border-solid border-cyan-300 m-2 px-4 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span class="[&>svg]:h-4 [&>svg]:w-4">
              <GithubIcon />
            </span>
          </a>

          <a href="https://www.youtube.com/@llyodIT"
            target="_blank"
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            class="mb-2 inline-block rounded border border-solid border-cyan-300 m-2 px-4 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
            <span class="[&>svg]:h-4 [&>svg]:w-4">
              <YoutubeIcon />
            </span>
          </a>

        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
