import {useState} from 'react'

export const useActivity = () => 
{
    const [activity, setActivity] = useState<string>("Diaria")

    return {activity, setActivity}
}