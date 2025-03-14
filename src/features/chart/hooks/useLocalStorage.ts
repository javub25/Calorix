import {useEffect} from "react";
import { PieData } from '@/features/chart/types/Pie.ts';
import {usePie} from "@/features/chart/hooks/usePie.ts";
import { updatePie } from "@/features/chart/utils/pie/updatePie";
import { getCurrentStorage } from '@/features/chart/utils/localStorage/getCurrentStorage.ts';
import { updateStorage } from '@/features/chart/utils/localStorage/updateStorage.ts';
import { getNewActivity } from "@/features/chart/utils/pie/getNewActivity.ts";

export const useLocalStorage = (pieItems: PieData) => {

    const {currentPie} = getCurrentStorage();
    const {pie, setPie} = usePie();

    useEffect(() => 
    {
        setPie(currentPie);
    }, []);

    useEffect(() => 
    {
        if(pieItems.length > 0) {
            const {newActivity} = getNewActivity(pieItems);
            updatePie({newActivity, setPie});
        }
    }, [pieItems]);

    useEffect(() => 
    {
        updateStorage({pie});
    }, [pie]);

    return {pie};
  };