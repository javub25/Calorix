import { WeigthProps } from "@/features/form/types/Weight";

export const getCurrentWeight = ({e, setWeight, weightRef }: WeigthProps) => {

    //##Performance Optimization

    // If there is any weightRef created before, clear them
     if (weightRef.current) clearTimeout(weightRef.current);
    
    //Otherwise, we set a new timeout with 70 ms to update the state
    weightRef.current = setTimeout(() => {
        const weightValue = parseInt(e.target.value);
        setWeight(weightValue); 
    }, 70);
}