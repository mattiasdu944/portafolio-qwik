import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Project } from "~/interfaces";
import { ProjectCard } from "./project-card";

export const useProjectsList = routeLoader$( async () => {
    
})

interface Props {
    projects: Project[];
}

export const ProjectsList = component$<Props>(({ projects }) => {
    return (
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
            {
                projects.map(project => (
                    <ProjectCard project={ project } key={ project.id }/>
                ))
            }
        </section>
    )
});

