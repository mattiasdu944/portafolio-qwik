import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BannerHome } from "~/components";

export default component$(() => {
  return (
    <>
      <BannerHome/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Mattias Duarte | Portafolio",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
