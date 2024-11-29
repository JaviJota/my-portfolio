import project1 from "../projects-imgs/sharetrips.png"

export const ABOUTME = {
    es: `Hola! Soy Javi, desarrollador full-stack motivado e 
    ingenioso con pasión por crear aplicaciones web. 
    Experiencia en JavaScript, React, Python, Node y SCRUM 
    para afrontar las complejidades del desarrollo de software. 
    Con mi interés por el aprendizaje continuo y dedicación a la calidad, 
    soy un activo valioso para cualquier equipo en busca de soluciones de 
    software innovadoras.`,
    en: `Hi! I'm Javi, a motivated and resourceful full-stack developer with a 
    passion for building web applications. Experienced in JavaScript, React, 
    Python, Node and SCRUM to tackle the complexities of software development. 
    With my interest in continuous learning and commitment to quality, I am a 
    valuable asset to any team seeking innovative software solutions.`
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
    address: "Córdoba, España",
    phoneNumber: "+34 633 09 43 26",
    email: "javierjimenezcarralero@gmail.com"
};
