import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return(
        <main class="container">
            <section class="section">
                <h1>
                    <span class="text-gradient">Proyectos</span>
                </h1>
                <h3>Conoce mis proyectos</h3>

            </section>

            {

            }
        </main>
    )
});


export const head: DocumentHead = {
    title: "Proyectos - Mattias Duarte",
    meta: [
      {
        name: "description",
        content: "Conoce mis proyectos mas recientes realizados con diversas tecnologias e implementando las mejores practicas de programación.",
      },
    ],
  };