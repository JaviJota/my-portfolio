import project1 from "../projects-imgs/sharetrips.png"

export const ABOUTME = {
    es: `¡Hola! Soy Javi, un desarrollador full-stack apasionado por transformar
        ideas en aplicaciones web impactantes. Domino JavaScript, React, Python y Node
        para crear soluciones dinámicas y eficaces. Siempre buscando aprender y mejorar,
        aporto energía y creatividad a cada proyecto.`,
    en: `Hi! I'm Javi, a full-stack developer driven by the challenge of turning ideas
        into impactful web applications. Skilled in JavaScript, React, Python, and Node,
        I deliver dynamic and efficient solutions. With a passion for growth and innovation,
        I bring energy and creativity to every project.`
}

export const PROJECTS = [
    {
        id: crypto.randomUUID,
        technologies: ["React", "HTML", "CSS", "JavaScript", "Python", "PostgreSQL"],
        image: project1,
        url: "https://github.com/JaviJota/Sharetrips",
        es: {
            title: "ShareTrips",
            description: `Aplicación web para compartir 
                itinerarios de viaje donde los usuarios crean 
                rutas utilizando la API de Google Maps, agregan 
                imágenes de los lugares visitados y comparten sus 
                itinerarios con otros. Los usuarios también pueden 
                buscar itinerarios de otros creadores y ver perfiles, 
                fomentando el intercambio de experiencias y la exploración 
                de nuevas rutas.`,
            },
        en: {
            title: "ShareTrips",
            description: `Web application for sharing travel itineraries
                where users create routes using the Google Maps API, add images 
                of visited places, and share their itineraries with others. Users 
                can also search for itineraries from other creators and view profiles, 
                promoting the exchange of experiences and exploration of new routes.`,
        }
    },
]

export const CONTACT = {
    address: {
        es: "Córdoba, España",
        en: "Córdoba, Spain",
    },
    phoneNumber: "+34 633 09 43 26",
    email: "javierjimenezcarralero@gmail.com"
};
