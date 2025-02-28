import {useState, useRef} from "react";

export const useWeight = () => 
{
    const [weight, setWeight] = useState<number>(30);
    const weightRef = useRef<ReturnType<typeof setTimeout>>(null);

    return {weight, setWeight, weightRef}
}