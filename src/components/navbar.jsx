import { FaGithub, FaLinkedin } from "react-icons/fa6"
import logo from "../assets/jj-logo.png"

export const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className="w-9 h-9" alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/javierjimenezc1/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/JaviJota" target="_blank">
                    <FaGithub />
                </a>
            </div>
        </nav>
    )
}