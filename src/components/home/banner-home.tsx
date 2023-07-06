import { component$ } from "@builder.io/qwik";

export const BannerHome = component$(() => {
    return (
        <header class='section grid md:grid-cols-2 gap-10 justify-between items-center'>
            <div>
                <h1 class='text-4xl md:text-7xl mb-3'>Mattias Alexandre Duarte Aparicio</h1>
                <h1><span class='text-gradient text-3xl md:text-5xl font-bold'>Full Stack Dev</span></h1>
                <p class='my-5'>
                    Estudiante de ingenieria en sistemas y autodidacte desde los 17 años.
                    Desarrollador desde hace 3 años especializado en web y móvil.
                </p>
                <button class="button-gradient">
                    Contactar
                </button>
            </div>
            <div>
                <img
                    alt='code'
                    src='/laptop.webp'
                    width={700}
                    height={700}
                    class='animate-[wiggle_3s_ease-in-out_infinite] drop-shadow-2xl'
                />
            </div>
        </header>
    )
});