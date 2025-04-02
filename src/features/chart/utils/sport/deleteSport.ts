import { DeleteSportType } from "@/features/chart/types/Pie.ts"

export const deleteSport = ({sport, setPie}: DeleteSportType) => 
    setPie(currentActivity => currentActivity.filter(activity => activity.sport!==sport));