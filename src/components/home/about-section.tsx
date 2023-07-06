import { component$ } from "@builder.io/qwik";
import { TechList } from "./";
import { useNavigate } from "@builder.io/qwik-city";

export const AboutSection = component$(() => {
    const navigate = useNavigate();
    return (
        <section class="section">
            <div class="text-center mb-5">
                <h2>
                    <span class="text-gradient">Sobre mi</span>
                </h2>
                <p>Conoceme un poco</p>
            </div>

            <p class="text-center">
                Mi nombre completo es Mattias Alexandre Duarte Aparicio y actualmente tengo 20 años, me encuentro estudiando la carrera de Ingenieria de Sistemas
                Comence a aprender programacion y desarrollo cuando tenia 17 años y desde entonces me encuetro en constante aprendizaje de manera autodidacta y
                gracias a ello, pude conseguir mi primer trabajo como desarrollador web en una empresa de California - EE.UU y años mas tarde en una empresa de 
                desarrollo de software en el pais donde vivo. Soy desarrollador FullStack con 1 año de experiencia profesional y con 2 años trabajando en proyectos
                propios
            </p>
            <TechList />
            <button
                onClick$={async () => await navigate('/contact')}
                class="button-gradient mx-auto block mt-10"
            >
                Contactar
            </button>

        </section>
    )
});