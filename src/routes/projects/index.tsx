import { component$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import portafolioDb from '~/client/portafolioDb';
import { ProjectsList } from '~/components';
import { Project, ProjectsResponse } from '~/interfaces';

export const useProjectsList = routeLoader$<Project[]>( async () => {
    const { data: { data } } = await portafolioDb.get<ProjectsResponse>('/api/projects',{
        params:{
            populate:'*'
        }
    })
    return data;
});


export default component$(() => {

    const projects = useProjectsList();

    return(
        <main class="container">
            <section class="section">
                <h1>
                    <span class="text-gradient">Proyectos</span>
                </h1>
                <h3>Conoce mis proyectos</h3>

            </section>

            <ProjectsList projects={ projects.value }/>
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