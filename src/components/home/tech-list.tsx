import { component$ } from "@builder.io/qwik";
import { SiJavascript, SiReact, SiNextdotjs, SiMongodb, SiMysql, SiFlutter, SiLaravel, SiPostgresql } from "@qwikest/icons/simpleicons";
export const TechList = component$(() => {
    return (
        <div class="items-center justify-center flex flex-wrap gap-10 mt-5">
            <div class="text-6xl opacity-30 hover:opacity-100 hover:text-yellow-500 transition-all">
                <SiJavascript/>
            </div>
            <div class="text-6xl opacity-30 hover:opacity-100 hover:text-sky-600 transition-all">
                <SiReact/>
            </div>
            <div class="text-6xl opacity-30 hover:opacity-100  transition-all">
                <SiNextdotjs/>
            </div>
            <div class="text-6xl opacity-30 hover:opacity-100 hover:text-blue-500 transition-all">
                <SiFlutter/>
            </div>
            <div class="text-6xl opacity-30 hover:opacity-100 hover:text-red-600 transition-all">
                <SiLaravel/>
            </div>
            <div class="text-6xl opacity-30 hover:opacity-100 hover:text-blue-500 transition-all">
                <SiMysql/>
            </div>
            <div class="text-6xl opacity-30 hover:opacity-100 hover:text-blue-800 transition-all">
                <SiPostgresql/>
            </div>
            <div class="text-6xl opacity-30 hover:opacity-100 hover:text-green-800 transition-all">
                <SiMongodb/>
            </div>

        </div>
    )
});