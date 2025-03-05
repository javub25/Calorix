import { UpdatePie } from "@/features/chart/types/Pie"

export const updatePie = ({newActivity, setPie}: UpdatePie) => 
{
    setPie(currentActivity => [
        ...currentActivity.filter(activity => activity.sport!== newActivity.sport), 
        newActivity
    ]);
}