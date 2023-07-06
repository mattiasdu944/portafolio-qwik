import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

export const useProjectVerify = routeLoader$(({ params, redirect }) => {
    console.log({params});
    if( !params ){
        redirect( 301, '/' )
    }
    return 'asd'
});

export default component$(() => {
    const data = useProjectVerify();
    return(
        <main class="container">
            <section class="section">
                <h1>{ data }</h1>
            </section>
        
        </main>
    )
});