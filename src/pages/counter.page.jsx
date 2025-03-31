import { Counter } from "$/views/counter";

export function CounterPage() {
    return (
        <template x-route={"/counter"}>
            <div>
                <h1>This is Counter Page</h1>

                <Counter />
            </div>
        </template>
    )
}