import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/features/form/utils/shadcn/index.ts"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend} from "recharts"
import { getCurrentDate } from "@/features/chart/utils/getCurrentDate.ts";
import {SportMetrics} from "@/features/chart/components/SportMetrics"
import { useLocalStorage } from "@/features/chart/hooks/useLocalStorage.ts"
import { PieColors } from "@/features/chart/data/PieColors.ts";
import { useActivityContext} from "@/contexts/Activity-context";
import { ActivityDeletion } from "./ActivityDeletion";

const ActivityPie = () => 
{
    const {type, pie, setPie} = useActivityContext();
    useLocalStorage({pie, setPie});
    const {today, currentYear, currentMonth, currentWeek } = getCurrentDate();
    return (
        <>
            <Card className="activity-section__wrapper">
                <CardHeader>
                    <CardTitle className="text-center text-xl">Actividad {type}</CardTitle>
                    <CardDescription className="py-4 text-black">
                        <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1742827031/calendar_ybsh6h.svg" alt="Calendar icon" 
                            className="w-6 h-6 inline mr-2 mb-1" />
                        {type === "Semanal" ? `Semana ${currentWeek} ` : `${today} `} de {currentMonth} del {currentYear} 
                    </CardDescription>
                </CardHeader>
                     
                <CardContent className="pb-9">
                    {pie.length!==0 ?
                            <>
                                <ActivityDeletion pie={pie} setPie={setPie}/>  
                                <SportMetrics data={pie}/>
                            </>
                        : null
                    }

                    <div className="h-64 mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pie}
                                    cx="50%"
                                    cy="40%"
                                    outerRadius={70}
                                    dataKey="hours"
                                    nameKey="sport"
                                    stroke="none">

                                    {pie.map((_entry, index) => (
                                      <Cell key={`cell-${index}`} fill={PieColors[index % PieColors.length]} />
                                    ))}
                                </Pie>

                                <Legend 
                                    layout="horizontal"                                
                                    iconType="circle"
                                    wrapperStyle={{marginTop:"7rem"}}
                                    verticalAlign="middle" 
                                    align="center"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div> 
                </CardContent>
            </Card>
        </>
    )
}
export default ActivityPie;