import { PieData } from "@/features/chart/types/Pie";

export const getSportMetrics = ({sportName, data}: {sportName: string, data: PieData}) => 
{
    const metrics = data.find(element => element.sport === sportName);    

    return {metrics};
}