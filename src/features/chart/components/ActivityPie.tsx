import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/features/form/utils/shadcn/index.ts"


import { PieChart, Pie, Cell, ResponsiveContainer, Legend} from "recharts"
import { getCurrentDate } from "@/features/chart/utils/getCurrentDate.ts";
import { PieProps } from "@/features/chart/types/Pie.ts"
import {SportMetrics} from "@/features/chart/components/SportMetrics"

export const ActivityPie = (props: PieProps) => 
{
    const {type, data} = props;
    const {today, currentYear, currentMonth, currentWeek } = getCurrentDate();

    const COLORS = ['#2563eb', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
    
    return (
        <>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-center text-xl">Actividad {type}</CardTitle>
                    <CardDescription className="py-4">
                        📅 {type === "Semanal" ? `Semana ${currentWeek} ` : `${today} `} 
                            de {currentMonth} del {currentYear} 
                    </CardDescription>
                </CardHeader>
                     
                <CardContent className="pb-0 h-[450px]">
                    {data.length!==0 ?  
                           <SportMetrics data={data}/>
                        : null
                    }    

                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="30%"
                                outerRadius={80}
                                dataKey="hours"
                                nameKey="sport"
                                stroke="none">

                                {data.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>

                            <Legend 
                                layout="horizontal"                                
                                iconType="square"
                                wrapperStyle={{marginTop:"5rem"}}
                                verticalAlign="middle" 
                                align="center"
                            />
                        </PieChart>
                    </ResponsiveContainer>

                            
                </CardContent>
            </Card>
        </>
    )
}