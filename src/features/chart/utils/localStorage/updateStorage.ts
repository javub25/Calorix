import { PieData } from '@/features/chart/types/Pie.ts';

export const updateStorage = ({pie}: {pie: PieData}) => 
    localStorage.setItem('sportData', JSON.stringify(pie));