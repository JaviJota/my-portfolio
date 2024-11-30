import { BiLogoPostgresql } from "react-icons/bi"
import { FaPython } from "react-icons/fa6"
import { RiHtml5Line, RiJavascriptLine, RiNodejsFill, RiReactjsFill } from "react-icons/ri"
import { SiCss3 } from "react-icons/si"

export const Technologies = ({language}) => {
    return(
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">{language ? "Tecnologías" : "Technologies"}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsFill className="text-7xl text-cyan-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className="text-7xl text-cyan-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiHtml5Line className="text-7xl text-orange-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCss3 className="text-7xl text-blue-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsFill className="text-7xl text-green-500"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-sky-700"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </div>
            </div>
        </div>
    )
}