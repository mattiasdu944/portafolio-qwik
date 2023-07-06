import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components";


export default component$(() => {
  return (
    <>
      <Navbar/>
      <main>
        <Slot />
      </main>
    </>
  );
});
