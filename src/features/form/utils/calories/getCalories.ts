import { getHoursByDay } from "@/features/form/utils/calories/getHoursByDay"
import { FormData } from "@/features/form/types/Activity"
import { SportIntensity } from "@/features/form/data/SportIntensity";

export const getCalories = (data: FormData) => 
{
    const {sex, weight, sport, intensity, minuts, weekDays} = data;

    const {hours} = getHoursByDay({
        minuts,
        days: weekDays === undefined ? 1 : weekDays
    });
    
    const calories = {
        METValue: SportIntensity[sport][intensity],
        FactorByGender: sex === "women" ? 0.9 : 1,
        number() { 
            return this.METValue * this.FactorByGender * weight * hours
        }
    }    

    const newActivity = {
        sex, 
        sport, 
        hours, 
        calories: Math.round(calories.number() * 10) / 10
    }

    return {newActivity}
}
