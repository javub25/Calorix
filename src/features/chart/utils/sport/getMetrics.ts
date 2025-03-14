import { PieData } from "@/features/chart/types/Pie";

export const getMetrics = ({sportName, data}: {sportName: string, data: PieData}) => 
{
    const metrics = data.find(element => element.sport === sportName) || {
        sport: "",
        hours: 0,
        calories: 0
    };    
    
    return {metrics};
}