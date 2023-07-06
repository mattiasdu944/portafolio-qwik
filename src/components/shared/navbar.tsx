import { component$ } from "@builder.io/qwik"
import { Link, useLocation } from "@builder.io/qwik-city"
import { navMenu, socialNetworks } from "~/constants"

export const Navbar = component$(() => {
    
    const { url } = useLocation();

    return (
        <nav class='navbar'>
            <div class="navbar__container">
                <h1 class='font-medium'>
                    <span class="hidden md:block text-gradient font-semibold">
                        Mattias Duarte
                    </span>
                </h1>

                <ul class='navbar__menu'>
                    {
                        navMenu.map(item => (
                            <li key={ item.uri }>
                                <Link 
                                    href={ item.uri }
                                    class={`${ url.pathname === item.uri && 'text-gradient'}`}
                                >
                                    <span class='text-xl block md:hidden text-indigo-600'>
                                        { item.icon }
                                    </span>
                                    { item.name }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div class='navbar__social'>
                    {
                        socialNetworks.map(item => (
                            <Link
                                target='_blank' 
                                key={ item.uri }
                                href={ item.uri } 
                                class={`navbar__social--item`} 
                            >
                                { item.icon }
                            </Link>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
})
