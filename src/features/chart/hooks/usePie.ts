import {useState} from "react";
import {PieData} from "@/features/chart/types/Pie.ts"

export const usePie = () => 
{
    const [pie, setPie] = useState<PieData>([]);

    return {pie, setPie}
}