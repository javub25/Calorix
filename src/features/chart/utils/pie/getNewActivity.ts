import { PieData } from '@/features/chart/types/Pie.ts';

export const getNewActivity = (pieItems: PieData) => 
{
    const newActivity = pieItems[pieItems.length - 1];
    return {newActivity};
}