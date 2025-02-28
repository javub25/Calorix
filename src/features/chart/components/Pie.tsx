import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/features/form/utils/shadcn/index.ts"

import { getCurrentDate } from "@/features/chart/utils/getCurrentDate.ts";
import { PieProps } from "@/features/chart/types/Pie.ts"

export const Pie = (props: PieProps) => 
{
    const {type} = props;
    const {today, currentYear, currentMonth, currentWeek } = getCurrentDate();

    return (
        <>
          <Card className="flex flex-col">
                <CardHeader>
                    <CardTitle className="text-center text-xl">Actividad {type}</CardTitle>
                    <CardDescription className="py-4">
                        📅 {type === "Semanal" ? `Semana ${currentWeek} ` : `${today} `} 
                            de {currentMonth} del {currentYear} 
                    </CardDescription>
                </CardHeader>
                     
                <CardContent className="flex-1 pb-0">
                   <h1>Titulo</h1>
                </CardContent>
            </Card>
        </>
    )
}