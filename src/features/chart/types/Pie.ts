import { FormData, ActivityProps } from "@/features/form/types/Activity";

export type PieType = Pick<FormData, "sex" | "sport"> & {
    hours: number,
    calories: number,
};
export type PieData = PieType[];

export type PieProps = Pick<ActivityProps, "type"> & {
    data: PieData
};

export type UpdatePie = {
    newActivity: PieType;
    setPie: (updater: (currentActivity: PieData) => PieData) => void
}
