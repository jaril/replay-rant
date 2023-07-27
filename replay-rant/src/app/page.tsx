"use client";

import Clicker from "@/components/Clicker";
import { slideNames } from "@/constants";
import { MouseEvent, useState } from "react";

const LAST_SLIDE = slideNames.length;
export const SLIDE_TO_SABOTAGE = 27;

export default function Home() {
  const [count, setCount] = useState(1);

  const sabotageSetCount = (newCount: number, e: MouseEvent) => {
    if (newCount === SLIDE_TO_SABOTAGE) {
      // Evil laughter 😈 -CEO
      if (!e.metaKey) {
        return;
      }
    }

    setCount(newCount);
  };

  const decrement = (e: MouseEvent) => {
    sabotageSetCount(Math.min(count + 1, LAST_SLIDE), e);
  };
  const increment = (e: MouseEvent) => {
    sabotageSetCount(Math.max(count - 1, 1), e);
  };

  return (
    <div className="relative grid items-center justify-center h-screen w-screen">
      <Clicker count={count} increment={increment} decrement={decrement} />
      <img
        className="h-screen"
        src={`images/${slideNames[count - 1]}.png`}
      ></img>
    </div>
  );
}
