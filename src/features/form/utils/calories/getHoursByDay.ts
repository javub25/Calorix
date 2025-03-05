export const getHoursByDay = ({minuts, days}: {minuts: number, days: number}) => 
{
    const hours = Math.round(minuts * days / 60 * 100) / 100;
    return {hours}
}