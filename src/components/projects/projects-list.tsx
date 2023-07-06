import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useProjectsList = routeLoader$( async () => {
    
})

interface Props {
    projects: any
}

export const ProjectsList = component$<Props>(({ projects }) => {
    return (
        <section>
            <div>
                <img src="" alt="" />
                <div>

                </div>
            </div>
        </section>
    )
});

