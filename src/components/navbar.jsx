import { FaGithub, FaLinkedin } from "react-icons/fa6"
import logo from "../assets/jj-logo.png"
import { motion } from "framer-motion"
import { button } from "framer-motion/client";

export const Navbar = ({language, setLanguage, languages}) => {

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className="w-9 h-9" alt="logo" />
            </div>
            <div className="my-8 ms-8 lg:me-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/javierjimenezc1/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/JaviJota" target="_blank">
                    <FaGithub />
                </a>
                <div className="bg-gray-500 text-sm rounded">
                    {languages.map((lang, index) => (
                        <button
                            onClick={() => setLanguage(lang)}
                            key={index}
                            className={`relative px-1.5 py-1`}
                        >   
                            {language === lang && (
                                <motion.div
                                    layoutId="es-bg"
                                    className={`absolute inset-1 z-10 bg-gray-300`}
                                    style={{
                                        borderRadius: 4,
                                    }}
                                    transition={{type: "spring", duration: 0.8, bounce: 0.2}}
                                    >
                                </motion.div>)
                            }
                            {lang}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}