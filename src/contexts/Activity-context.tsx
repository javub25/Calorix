import {createContext, useContext} from "react";
import { ContextType} from "@/features/form/types/Activity";
import { useActivity } from "@/features/form/hooks/useActivity";
import { usePie } from "@/features/chart/hooks/usePie";

const ActivityContext = createContext<ContextType | null>(null);

const useActivityContext = () => 
{
    const context = useContext(ActivityContext);

    if (!context) {
        throw new Error("useActivityContext must be used within a ActivityProvider");
    }
    return context;
}

const ActivityProvider = ({children}: {children: React.ReactElement}) => {
    const {activity, setActivity} = useActivity();
    const {pie, setPie} = usePie();

    const ActivityValues = {type: activity, setType: setActivity, setPie, pie};

    return (
        <ActivityContext.Provider value={ActivityValues}>
            {children}
        </ActivityContext.Provider>
    );
}

export {ActivityProvider, useActivityContext}