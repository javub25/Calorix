import {useEffect} from "react";
import { LocalStorageType } from '@/features/chart/types/Pie.ts';
import { updatePie } from "@/features/chart/utils/pie/updatePie";
import { getCurrentStorage } from '@/features/chart/utils/localStorage/getCurrentStorage.ts';
import { updateStorage } from '@/features/chart/utils/localStorage/updateStorage.ts';
import { getNewActivity } from "@/features/chart/utils/pie/getNewActivity.ts";

export const useLocalStorage = ({pie, setPie}: LocalStorageType) => {

    const {currentPie} = getCurrentStorage();
    const {newActivity} = getNewActivity(pie);
    
    useEffect(() => 
    {
        setPie(currentPie);
    }, []);
    
    useEffect(() => 
    {
        if(newActivity) {
            updatePie({newActivity, setPie});
        }
    }, [newActivity]);

    useEffect(() => 
    {
        updateStorage({pie});
    }, [pie])
  };