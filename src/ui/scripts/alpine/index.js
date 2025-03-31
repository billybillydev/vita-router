import Alpine from "alpinejs";
import PineconeRouter from 'https://cdn.jsdelivr.net/npm/pinecone-router@6.2.4/dist/router.esm.js'
import focus from "@alpinejs/focus";
import collapse from "@alpinejs/collapse";
import manage from "alpinejs-manage";

import { capitalizeDirective } from "./directive/capitalize.directive";
import { logDirective } from "./directive/log.directive";
import { clipboardMagic } from "./magic/clipboard.magic";
import { nowMagic } from "./magic/now.magic";

/* Directive */
Alpine.directive("capitalize", capitalizeDirective);
Alpine.directive("log", logDirective);

/* Magic */
Alpine.magic("clipboard", clipboardMagic);
Alpine.magic("now", nowMagic);

/* Plugins */
Alpine.plugin(focus);
Alpine.plugin(collapse);
Alpine.plugin(manage);
Alpine.plugin(PineconeRouter);

export default Alpine;
