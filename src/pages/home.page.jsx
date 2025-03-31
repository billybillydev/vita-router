import jsxpineLogo from "/jsxpine.jpg";
import viteLogo from "/vite.svg";

export function HomePage() {
    const readDoccs = new Intl.ListFormat("en", {
        style: "long",
        type: "disjunction",
    }).format(["vite", "jsxpine"]);

    return (
        <template x-route={"/"}>
            <div>
                <div class="flex flex-wrap items-center justify-around gap-x-12">
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} class="w-24" alt="Vite logo" />
                    </a>
                    <a href="https://www.jsxpine.com/core" target="_blank">
                        <img src={jsxpineLogo} class="w-24" alt="JSXPine logo" />
                    </a>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <h1>Vite + JSXPine</h1>
                    <p class="read-the-docs">
                        Click on the {readDoccs} logos to learn more
                    </p>
                </div>
            </div>
        </template>
    )
}