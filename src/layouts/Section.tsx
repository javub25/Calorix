import {Activity} from "@/features/form/components/Activity.tsx"
import {Pie} from "@/features/chart/components/Pie"
import { useActivity } from "@/features/form/hooks/useActivity"

export const Section = () => 
{
    const {activity, setActivity} = useActivity();

    return (
        <section className="p-8 flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto">
            <Activity 
                type={activity} setType={setActivity} 
            />
            <Pie type={activity}/>
        </section>
    )
}