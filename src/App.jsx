import { useState } from "react";

import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";

const App = () => {
  const languages = ['es', 'en']
  const [language, setLanguage] = useState(languages[0])

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="
            absolute top-0 z-[-2] 
            h-screen w-screen bg-gray-950 
            bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar language={language} setLanguage={setLanguage} languages={languages}/>
        <Hero language={language} />
        <Technologies language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </div>
    </div>
  );
};

export default App;
