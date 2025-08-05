import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiInstagram, FiFacebook, FiLinkedin,} from "react-icons/fi"
import { useState } from "react";
import {Link } from 'react-router-dom';



const Header = () => {

    const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/About" },
  { name: "Galleries", to: "/Galleries" },
  { name: "Works", to: "/Works" },
  { name: "Contact", to: "/Contact" },
  
];
  

// Toggle the menu open/close
const [isOpen, setIsOpen ] = useState(false);
const toggleMenu = () => setIsOpen(! isOpen);

// State to track if the Booking form is open 
const [bookingFormOpen, setBookingFormOpen] = useState(false);

const openBookingForm = () => setBookingFormOpen(true);
const closeBookingForm = () => setBookingFormOpen(false);



  return (
    <>
    <header className ="absolute w-full z-50 flex 
    transition-all duration-300">

        {/* logo */}
        <motion.div 
        initial={{ opacity: 0, x:-100}}
        animate={{ opacity:1, x: 0}}
        transition={{
            type: "spring",
            delay: 0.9,
            duration: 1.2,
        }}
        className="container flex items-center lg:px-6 sm:px-3 mt-6 
         ml-2 ">
         {/* icon box */}   
        <div className="h-10 w-10 bg-gradient-to-r from-gray-700 to-gray-900 
         rounded-xl">
            
            <div className="h-8 w-8 mx-1 py-1">
            <img src="\camera-retro-solid-full.svg"></img>
            </div>         
        </div>

        {/* icon text */}
        <span className="text-xl font-bold bg-gradient-to-r
         from-gray-700 to-gray-400 bg-clip-text text-transparent ml-2">
            OneTimeClicker
        </span>

        </motion.div>

        {/* Desktop Navigation */}
        <nav className ="lg:flex hidden items-center
         justify-center gap-15 mt-6 mr-15">

            {navItems.map((item, index) => (
                <motion.div
                 key={item.name}
                 initial={{ y: -30, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{
                 type: "spring",
                 stiffness: 100,
                 damping: 20,
                 delay: 0.9 + index * 0.2,
              }}

               >
            <Link 
            className="relative text-white text-xl
             hover:gray-600 dark:hover:text-gray-700 font-medium
             transition-colors duration-300 group"
            to={item.to}
            >
                <span className="absolute bottom-0 left-0 w-0 h-0.5
                bg-gray-600 group-hover:w-full transition-all duration-300">
                </span>
              {item.name}
            </Link>
        </motion.div>

            ))}      
        </nav>   



         {/* Booking Button */}
        
            <motion.button 
            onClick={openBookingForm}
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{
            type:"spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8,
            delay: 1.6,  
        }}
            className="flex items-center mt-4 mr-10 text-sm md:text-xl 
             px-2 md:px-3 py-1 md:py-2 rounded-lg md:rounded-xl font-bold 
             bg-gradient-to-r from-gray-700 to-gray-800
             hover:from-gray-700 hover:to-gray-500 hover:text-black">
                Booking
            </motion.button> 

     {/* Mobile Menu Button*/}
          <div className="md:hidden mt-5 flex items-center mr-4">
            <motion.button
            initial={{opacity:0, scale:0}}
            animate={{opacity:1, scale:1}}
            transition={{delay:1}}
             whileTap={{scale: 0.7}}
             onClick={toggleMenu}>
                {isOpen ? <FiX className="h-7 w-7"/> : <FiMenu className="h-7 w-7"/>}
            </motion.button>

        </div> 
    </header>

    {/* Mobile Menu */}
     <motion.div 
     initial={{ opacity:0, height:0}}  
     animate={{
               opacity: isOpen ? 1 : 0,
               height: isOpen ? "auto" : 0
     }} 
     transition={{ duration: 0.5}} 

      className="md:hidden overflow-hidden">
      <nav className="flex flex-col bg-gradient-to-r
      from-gray-black to-gray-900 rounded-xl mt-20 gap-8 pl-5 py-8">

        {navItems.map((item) => (
        <Link className="relative text-white text-xl
             hover:gray-600 dark:hover:text-gray-700 font-medium
             transition-colors duration-300 group"
        onClick={toggleMenu}
        key={item.to}
        to={item.to}>
            {item.name}
        </Link>
        )
        )} 

        <div className="border-t">
        <div className="flex space-x-5 pt-5">
            <a className="hover:text-gray-800"
            href="">
               <FiInstagram className="h-6 w-6 "/>
            </a>

            <a className="hover:text-gray-800"
            href="">
                <FiFacebook className="h-6 w-6 "/>
           </a>

            <a className="hover:text-gray-800"
            href="">
                <FiLinkedin className="h-6 w-6 "/>
           </a>
        </div>

      </div>
      </nav>   
    </motion.div> 
     
     {/* Booking form */}
        <AnimatePresence>
        {bookingFormOpen && (
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:0.5}}
          className="fixed inset-0 z-50
          flex items-center justify-center p-4">

          <motion.div 
          initial={{ scale:0.8, opacity:0, y:30 }}
          animate={{ scale:1, opacity:1, y:0 }}
          exit={{ scale:0.8, opacity:0, y:30 }}
          transition={{
                type:"spring",
                damping:30,
                stiffness:200,
                duration:0.8

            }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl
          w-full max-w-md p-6">
           
           <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-300">
              Book Now
            </h1>

            <button onClick={closeBookingForm}>
              <FiX className="w-6 h-6"/>
            </button>
           </div>

           {/* form */}
           <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium 
                text-gray-300 mb-1">
                    Name
                </label>

                <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-600
                rounded-lg focus:ring-2 focus:ring-gray-950
               focus:border-gray-950 bg-gray-700">
                </input>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium 
                text-gray-300 mb-1">
                    Email
                </label>

                <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-600
                rounded-lg focus:ring-2 focus:ring-gray-950
               focus:border-gary-950 bg-gray-700">
                </input>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium 
                text-gray-300 mb-1">
                    Message
                </label>

                <textarea
                rows="4"
                id="name"
                placeholder="How can I help you?"
                className="w-full px-4 py-2 border border-gray-600
                rounded-lg focus:ring-2 focus:ring-gray-950
               focus:border-gray-950 bg-gray-700">
                </textarea>
              </div>

              <motion.button 
              whileHover={{scale: 1.03}}
              whileTap={{scale: 0.97}}
              type="sumbit"
              className="w-full px-4 py-2 bg-gradient-to-r
               from-gray-950 to-gray-950 rounded-lg
               hover:from-gray-900 hover:to-gray-900 shadow-md
               hover:shadow-lg hover:shadow-gray-900/50">
                Send Message
              </motion.button>
           </form>
          </motion.div>

        </motion.div>
        )}
        </AnimatePresence>
      
    </>
    
  )
}

export default Header
