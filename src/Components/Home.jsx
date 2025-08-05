
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";

const Home = () => {

  return (
       
        <>
        <motion.div 
        initial={{opacity:0,scale:0.6}}
        animate={{opacity:1, scale:1}}
        transition={{
          type:"spring",
            stiffness: 100,
            damping: 15,
            delay: 1.5,
            duration:0.8,
           }}
        className="pt-60 mb-10 px-11 md:text-7xl text-gray-600">
          <h3>Hi There!</h3>
          <h3 className="mt-5">I'm Vaishak</h3>
        </motion.div>

        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}

        transition={{
            type:"spring",
            stiffness: 100,
            damping: 15,
            delay: 2.3,
            duration:0.6,
        }} 
        >
          <TypeAnimation
          sequence={[
            "Freelancer",
            1000,
            "Color Grade Artist",
            1000,
            "Photographer",
            1000
          ]}
          wrapper="span"
          speed={50}
          className="md:text-5xl font-medium ml-11"
          repeat={Infinity}>
          </TypeAnimation>
        </motion.div>

        {/* <div className="flex justify-end mr-15">
          <img src="\src\assets\Home image.jpeg"
          className="h-96 w-80"></img>
        </div>  */}
        

        
        </>
     
          
  )
}

export default Home
