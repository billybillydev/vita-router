import { AlpineComponent } from "alpinejs";

type CounterDataOutput = {
    count: number;
    decrement: () => void;
    increment: () => void;
    change: (
        this: AlpineComponent<CounterDataOutput> & {
            $event: { target: { value: string } };
        },
        value: number
    ) => void;
    decrementButton: Record<
        string,
        (
            this: AlpineComponent<CounterDataOutput>
        ) => void
    >;
    incrementButton: Record<
        string,
        (
            this: AlpineComponent<CounterDataOutput>
        ) => void
    >;
    input: Record<
        string,
        (
            this: AlpineComponent<CounterDataOutput> & {
                $event: { target: { value: string } };
            }
        ) => void
    >;
};

export default function (): AlpineComponent<CounterDataOutput> {
    return {
        init() {
            console.log("counter init");
        },
        count: 0,
        decrement() {
            this.count--;
        },
        increment() {
            this.count++;
        },
        change() {
            this.count = Number(this.$event.target.value);
        },
        decrementButton: {
            ["@click"]() {
                this.decrement();
            },
            [":disabled"]() {
                return this.count < 1;
            },
        },
        incrementButton: {
            ["@click"]() {
                this.increment();
            },
            [":disabled"]() {
                return this.count >= 10;
            },
        },
        input: {
            [':value']() {
                return this.count;
            },
            ['@input']() {
                this.change(Number(this.$event.target.value));
            },
        },
    }
}
