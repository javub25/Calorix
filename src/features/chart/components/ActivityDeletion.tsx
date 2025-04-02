import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { ActivityDeletionType} from "@/features/chart/types/Pie";

import {useState} from "react";
import { DeleteConfirmation } from "@/features/chart/components/DeleteConfirmation";

export const ActivityDeletion = ({pie, setPie}: ActivityDeletionType) => 
{
    const [sportToDelete, setSportToDelete] = useState<number | null>(null)

    const getSportId = (index: number) => sportToDelete!== index && setSportToDelete(index);
    
    return (
        <Drawer>
            <DrawerTrigger className="border border-neutral-200 px-2 py-1 mb-5 rounded flex items-center hover:bg-[#FECACA]">
                <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1743001477/trash_fp4bq3.svg" alt="Trash" 
                className="h-4 w-4 mr-2"/>
                <span className="text-sm">Eliminar actividad</span>   
            </DrawerTrigger>
            <DrawerContent>
                <div className="overflow-auto">
                    <DrawerHeader className="pb-2">
                        <DrawerTitle className="mb-4 text-center text-2xl [@media(max-width:430px)]:text-xl">Eliminar una actividad</DrawerTitle>
                    </DrawerHeader>
                    <ul className="activity-deletion__list">
                        {pie.map((activity, index) => {
                            const { sport } = activity;
                            return (
                                <li key={index} className="border border-neutral-200 px-2 py-2 mb-5 rounded flex items-center justify-between hover:bg-[#FECACA]"
                                    onClick={() => getSportId(index)}>
                                        {sportToDelete === index ? (
                                            <DeleteConfirmation sport={sport} setPie={setPie} setSportToDelete={setSportToDelete} />
                                        ):(
                                        <>
                                            <span className="text-sm">{sport}</span>
                                            <img src="https://res.cloudinary.com/dye4ylysz/image/upload/v1743001477/trash_fp4bq3.svg"
                                            alt="Trash icon" className="h-4 w-4 mr-2"/>
                                        </>
                                    )}
                                </li>                               
                                )
                            })}
                        </ul>
                    <DrawerFooter className="w-[11rem] mx-auto pt-2 pb-4">
                        <DrawerClose className="form-activity__update-chart">Volver</DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}