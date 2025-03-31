import '$/styles/index.css';
import { App } from '$/views/app';
import Alpine from 'alpinejs';
import PineconeRouter from 'pinecone-router';

await import("$/views/counter/script").then((m) =>
  Alpine.data("counter", m.default)
);

Alpine.plugin(PineconeRouter);

window.Alpine = Alpine;

Alpine.start();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = String(<App />);
