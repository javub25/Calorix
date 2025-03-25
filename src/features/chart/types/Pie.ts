import { FormData, ContextType } from "@/features/form/types/Activity";

export type PieType = Pick<FormData, "sex" | "sport"> & {
    hours: number,
    calories: number,
};
export type PieData = PieType[];

export type UpdatePie = Pick<ContextType, "setPie"> & {
    newActivity: PieType
}
