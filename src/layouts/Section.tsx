import {ActivityForm} from "@/features/form/components/ActivityForm"
import {ActivityPie} from "@/features/chart/components/ActivityPie"
import { useActivity } from "@/features/form/hooks/useActivity"
import { usePie } from "@/features/chart/hooks/usePie"


export const Section = () => 
{
    const {activity, setActivity} = useActivity();
    const {pie, setPie} = usePie();

    return (
        <section className="activity-section__wrapper">
            <ActivityForm type={activity} setType={setActivity} setPie={setPie}/>
            <ActivityPie type={activity} data={pie}/>
        </section>
    )
}