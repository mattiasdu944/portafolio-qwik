import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    return(
        <>
            <h1>Hola Mundo</h1>

        
        </>
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