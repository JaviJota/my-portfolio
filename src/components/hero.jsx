import { ABOUTME } from "../constants";
import profileImg from "../assets/IMG_0931.png"

export const Hero = ({language}) => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-32">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col  lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin -tracking-tight lg:mt-16 lg:text-7xl">
                            Javier Jiménez
                        </h1>
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-300 bg-clip-text text-3xl tracking-tight text-transparent">
                            {language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer'}
                            
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {language === 'es' ? ABOUTME['es'] : ABOUTME['en']}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img className="w-96 h-96 rounded-xl opacity-85 object-cover" src={profileImg} alt="Javier Jiménez, desarrollador web full stack" />
                    </div>
                </div>
            </div>
        </div>
    )
};