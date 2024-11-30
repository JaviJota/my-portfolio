import { FaGithub, FaLinkedin } from "react-icons/fa6"
import logo from "../assets/jj-logo.png"

export const Navbar = ({language, setLanguage}) => {
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
                <button className="text-sm bg-gray-500 rounded px-1.5 py-1" onClick={() => setLanguage(!language)}>
                    <span className={`me-1 px-1 rounded ${language ? "bg-gray-300" : ""} transition-all`}>es</span>
                    <span className={`ms-1 px-1 rounded ${!language ? "bg-gray-300" : ""} transition-all`}>en</span>
                </button>
            </div>
        </nav>
    )
}