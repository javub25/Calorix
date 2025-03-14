export const getWeightLoss = (calories: number) => 
{
    const weightLoss = Number((calories / 7700).toFixed(2));
    return {weightLoss}
}
