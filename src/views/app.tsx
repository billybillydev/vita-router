import { CounterPage } from "$/pages/counter.page";
import { HomePage } from "$/pages/home.page";
import { PropsWithChildren } from "@kitajs/html";

export function App() {

  return (
    <div x-data="" class="bg-base-light h-screen flex flex-col">
      <header class={"flex items-center justify-center p-2 border-b"}>
        <nav>
          <ul class={"flex items-center justify-center gap-x-8 [&_a]:p-4"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/counter">Counter</a>
            </li>
          </ul>
        </nav>
      </header>
      <main class={"flex flex-col items-center justify-center gap-y-16 grow"}>
        <HomePage />
        <CounterPage />
      </main>
      <footer class={"flex iems-center justify-center p-2 border-t"}>Vite + JSXPine {new Date().getFullYear()}</footer>
    </div>
  );
}
