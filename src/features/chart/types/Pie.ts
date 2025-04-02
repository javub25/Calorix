import { FormData, ContextType } from "@/features/form/types/Activity";

export type PieType = Pick<FormData, "sex" | "sport"> & {
    hours: number,
    calories: number,
};
export type PieData = PieType[];

export type UpdatePie = Pick<ContextType, "setPie"> & {
    newActivity: PieType
}

export type ActivityDeletionType = Pick<ContextType, "pie" | "setPie">

export type DeleteSportType = Pick<ContextType, "setPie"> & Pick<PieType, "sport">

export type DeleteConfirmationType = DeleteSportType & {
    setSportToDelete: (id: number | null) => void
}

export type LocalStorageType = ActivityDeletionType;
