import { BiGithub, BiHouse, BiInstagram, BiYoutube, BxCategoryAlt, PhChatLight } from "~/components/shared/icons"

export const socialNetworks = [
    
    {
        name:'Instagram',
        icon:<BiInstagram/>,
        uri:'https://www.instagram.com/innova_code/?hl=es'
    },
    {
        name:'GitHub',
        icon:<BiGithub/>,
        uri:'https://github.com/mattiasdu944/'
    },
    {
        name:'YouTube',
        icon:<BiYoutube/>,
        uri:'https://www.youtube.com/@Innova_Code'
    }
]

export const navMenu = [
    {
        name:'Inicio',
        icon:<BiHouse/>,
        uri:'/'
    },
    {
        name:'Proyectos',
        icon:<BxCategoryAlt/>,
        uri:'/projects'
    },
    {
        name:'Contacto',
        icon:<PhChatLight/>,
        uri:'/contact'
    },
]

export const techList = [
    'Next.Js',
    'React.Js',
    'Typescript',
    'Laravel.Js',
    'MySQL',
    'PostgreSQL',
    'Mongo Db',
]