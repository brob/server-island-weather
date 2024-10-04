import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, e as createAstro } from './astro/server_94i0TI3P.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Gated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gated;
  const loggedIn = Astro2.cookies.get("username");
  console.log(loggedIn);
  return renderTemplate`${maybeRenderHead()}<div> ${loggedIn ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`${renderSlot($$result, $$slots["fallback"])}`} ${renderSlot($$result, $$slots["test-fallback"])} </div>`;
}, "/Users/bryanrobinson/Documents/dev/server-islands/src/components/Gated.astro", void 0);

const $$file = "/Users/bryanrobinson/Documents/dev/server-islands/src/components/Gated.astro";
const $$url = undefined;

export { $$Gated as default, $$file as file, $$url as url };
