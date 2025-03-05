import { PieData} from "@/features/chart/types/Pie";
export type FormData = {
    sex: string;
    weight: number;
    sport: string;
    weekDays: number;
    intensity: "low" | "medium" | "high";
    minuts: number;
}

export type ActivityProps = {
    type: string;
    setType: (type: string) => void;
    setPie: (updater: (oldSport: PieData) => PieData) => void;

}

  
export type ActivityType = Pick<ActivityProps, "type" | "setType">

export type SportIntensityType = {
    [key: string]: {
        low: number,
        medium: number,
        high: number
    }
}

