import { MonthList } from "@/features/chart/data/MonthList.ts";

export const getCurrentDate = () => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const firstDayWeekday = firstDayOfMonth.getDay(); // Día de la semana (0=Domingo, 1=Lunes...)
    
    // Ajuste para que la semana empiece el lunes
    const adjustedFirstDayWeekday = firstDayWeekday === 0 ? 6 : firstDayWeekday - 1;

    // Calcular la semana actual dentro del mes
    const currentWeek = Math.ceil((today.getDate() + adjustedFirstDayWeekday) / 7);
    
    return {
        today: today.getDate(),
        currentYear: today.getFullYear(),
        currentMonth: MonthList[today.getMonth()],
        currentWeek
    };
}