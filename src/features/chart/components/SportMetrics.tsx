import {useState} from "react";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/features/form/utils/shadcn/index.ts"
import { PieData } from "@/features/chart/types/Pie";
import ActivityIcon from "@/assets/svg/activity.svg"
import TimeIcon from "@/assets/svg/time.svg"
import CaloriesIcon from "@/assets/svg/calories.svg"
import MenIcon from "@/assets/svg/men.svg"
import WomenIcon from "@/assets/svg/women.svg"
import { WeightLoss } from "@/features/chart/components/WeightLoss.tsx";
import { getWeightLoss } from "@/features/chart/utils/sport/getWeightLoss.ts";
import {getMetrics} from "@/features/chart/utils/sport/getMetrics.ts";

export const SportMetrics = ({data}: {data: PieData}) => 
{
    const [sportName, setSportName] = useState<string>("");

    const {metrics} = getMetrics({sportName, data});

    const {sport, hours, calories} = metrics;

    const {weightLoss} = getWeightLoss(calories);


    return (
        <>
            <Select onValueChange={(sport: string) => setSportName(sport)}>
                <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu deporte" />
                </SelectTrigger>
                <SelectContent>
                    {data.map((item, index: number) => {
                        const { sex, sport } = item;

                        return (
                            <SelectItem key={index} value={sport}>
                                {sport} <img src={sex === "men" ? MenIcon : WomenIcon} alt="Genre icon" className="w-6 h-6 ml-2 inline" />
                            </SelectItem>
                        )
                    })}                        
                </SelectContent>
            </Select>

            {sport ? 
                <>
                    <div className="pt-8 grid grid-cols-3 items-center place-items-center w-[250px]">
                        <div>
                            <img src={ActivityIcon} alt="Activity Icon" className="w-6 h-6 mb-2 mx-auto" />
                            <p className="text-sm">{sport}</p>
                        </div>
                        <div>
                            <img src={TimeIcon} alt="Time Icon" className="w-6 h-6 mb-2 mx-auto" />
                            <p className="text-sm">{hours} h</p>
                        </div>
                        <div>
                            <img src={CaloriesIcon} alt="Calories Icon" className="w-6 h-6 mb-2 mx-auto" />
                            <p className="text-sm">{calories}</p>
                        </div>
                    </div>
                </>
                : null            
            }
            
            {weightLoss ? 
                <WeightLoss weightAmount={weightLoss} calories={calories}/>
            : null}
        </>
    )
}