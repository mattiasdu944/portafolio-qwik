import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { Project } from "~/interfaces";

interface Props{
    project: Project;
}

export const ProjectCard = component$<Props>(({ project }) => {

    const {  data:{ attributes: { url, alternativeText } } } = project.attributes.image

    const navigate = useNavigate();

    return (
        <div class="project__card" onClick$={() => navigate(`/projects/${ project.attributes.slug }`)}>
            <div>
                <img src={ url } alt={ alternativeText } width="1920" height="1536"/>
            <div>

            </div>
                <h3>{ project.attributes.title }</h3>
                <div class="flex items-center flex-row w-full gap-5">
                    {
                        project.attributes.stack.map((tech) => (
                            <div>
                                { tech.name }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
});