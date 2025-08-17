import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram,FaXTwitter,FaWhatsapp } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const Home = () => {
  return (
    <>
      {/* Main wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between px-11">
        
        {/* Image - order first on mobile, last on desktop */}
        <motion.div
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{
          duration:1,
          delay:1
        }}
        className="flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-5">
          <img
            src="\src\assets\Home Image.png"
            alt="Home"
            className="max-w-xs md:max-w-md mt-12"
          />
        </motion.div>

        {/* Text - order last on mobile, first on desktop */}
        <div className="flex flex-col items-start justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 1.5,
              duration: 0.8,
            }}
            className="text-3xl md:text-7xl bg-gradient-to-r from-gray-700 to-gray-900
            bg-clip-text text-transparent mb-4 md:mt-28 mr-28"
          >
            <h3>Hi There!</h3>
            <h3 className="mt-2 md:mt-5 md:mb-5">I'm Vaishak</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 2.3,
              duration: 0.6,
            }}
          >
            <div className="text-2xl md:text-5xl font-medium mb-5">
              <TypeAnimation
                sequence={[
                  "Freelancer",
                  1000,
                  "Color Grade Artist",
                  1000,
                  "Photographer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
      initial={{opacity:0, scale:0}}
      animate={{opacity:1, scale:1}}
      transition={{
        duration:1,
        delay:1
      }}
      className="flex justify-center gap-10">
        <a href=""><FaInstagram className="h-8 w-8 hover:text-gray-800"/></a>
        <a href=""><FiFacebook className="h-8 w-8  hover:text-gray-800" /></a>
        <a href=""><FaXTwitter className="h-8 w-8  hover:text-gray-800"/></a>
        <a href=""><FaWhatsapp className="h-8 w-8  hover:text-gray-800"/></a> 
         
      </motion.div>
    </>
  );
};

export default Home;
