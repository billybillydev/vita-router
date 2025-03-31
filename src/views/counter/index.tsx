import { PrimaryButton } from "$/ui/components/button.component";
import { NumberInput } from "$/ui/components/input.component";

export function Counter() {
    return (
      <div x-data="counter" class={"flex gap-x-4 items-center"}>
        <PrimaryButton x-bind="decrementButton" text="-" />
        <NumberInput x-bind="input" />
        <PrimaryButton x-bind="incrementButton" text="+" />
      </div>
    );
}