import project1 from "../projects-imgs/sharetrips.png"
import jetadirecta from "../projects-imgs/jetadirecta.png"
import mjWebsite from "../projects-imgs/mj-procuradora-website.png"

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
        id: crypto.randomUUID(),
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
    {
        id: crypto.randomUUID(),
        technologies: ["JavaScript", "NodeJS", "Discord API", "Riot Games API"],
        image: jetadirecta,
        url: "https://github.com/JaviJota/JetaDirecta-DiscordBot",
        es: {
            title: "JetaDirecta - Discord Bot",
            description: `Este bot fue desarrollado para el streamer de 
                Twitch Toad Amarillo (https://www.twitch.tv/toadamarillo). 
                Su función principal es monitorear partidas de jugadores 
                profesionales de League of Legends utilizando la API de Riot Games 
                y enviar alertas automáticas a un canal de Discord mediante la API 
                de Discord.`,
        },
        en: {
            title: "JetaDirecta - Discord Bot",
            description: `This bot was developed for the Twitch streamer Toad Amarillo 
            (https://www.twitch.tv/toadamarillo). Its main function is to monitor professional 
            League of Legends players' matches using the Riot Games API and send automatic 
            alerts to a Discord channel via the Discord API.`,
        }
    },
    {
        id: crypto.randomUUID(),
        technologies: ["Astro", "HTML5", "TailwindCSS", "JavaScript", "Resend"],
        image: mjWebsite,
        url: "https://www.procuradoracordoba.com",
        es: {
            title: "MJ-Procuradora - Website",
            description: `Sitio web profesional de María José Carralero Medina, procuradora en Córdoba con una amplia 
            trayectoria en el ámbito jurídico. La plataforma ofrece información detallada sobre sus servicios, incluyendo 
            representación procesal, gestión de documentación judicial y asesoramiento legal. Con un diseño moderno 
            y optimizado para la experiencia del usuario, la web permite a clientes y abogados contactar fácilmente 
            a través del formulario de contacto.`,
        },
        en: {
            title: "MJ-Procuradora - Website",
            description: `Professional website of María José Carralero Medina, a court representative in Córdoba 
            with extensive experience in the legal field. The platform provides detailed information about her services, 
            including legal representation, judicial document management, and legal advice. With a modern design optimized 
            for user experience, the website allows clients and lawyers to easily get in touch through the contact form.`,
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
