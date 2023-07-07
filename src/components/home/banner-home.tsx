import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export const BannerHome = component$(() => {
    const navigate = useNavigate();

    return (
        <header class='section grid md:grid-cols-2 gap-10 justify-between items-center min-h-[90vh]'>
            <div>
                <h1 class='text-4xl md:text-6xl mb-5'>Mattias Alexandre Duarte Aparicio</h1>
                <h3><span class='text-gradient font-bold'>Full Stack Dev</span></h3>
                <h3><span class='text-gradient font-bold'>CEO Innova Code</span></h3>
                <p class='mt-5 mb-10'>
                    Estudiante de ingenieria en sistemas y autodidacte desde los 17 años.
                    Desarrollador desde hace 3 años especializado en web y móvil.
                </p>
                <button
                    onClick$={async () => await navigate('/contact')}
                    class="button-gradient"
                >
                    Contactar
                </button>
            </div>
            <div>
                <img
                    alt='code'
                    src='/laptop.webp'
                    width='700'
                    height='600'
                    class='animate-[wiggle_3s_ease-in-out_infinite] drop-shadow-2xl'
                />
            </div>
        </header>
    )
});