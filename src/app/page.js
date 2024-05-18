"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export default function Home() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();

  const [total, setTotal] = useState();

  const calculateTotal = () => {
    return setTotal(Number(number1) + Number(number2));
  };

  const onFirstNumberChange = (e) => setNumber1(e.target.value);
  const onSecondNumberChange = (e) => setNumber2(e.target.value);

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex items-center gap-4 flex-col justify-center rounded-lg border-solid border-2 p-16">
        <div>
          <Input
            type="number"
            onChange={onFirstNumberChange}
            value={number1}
            placeholder="First number"
          />
        </div>
        <div>
          <Input
            type="number"
            onChange={onSecondNumberChange}
            value={number2}
            placeholder="Second number"
          />
        </div>
        <div className="self-start">
          <Button onClick={calculateTotal} disabled={!number1 || !number2}>
            Add Two Numbers
          </Button>
        </div>

        <p className="text-md self-start text-muted-foreground">
          Total: {total}
        </p>
      </div>
    </div>
  );
}
