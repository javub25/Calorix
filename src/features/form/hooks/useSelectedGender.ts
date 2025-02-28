import {useState} from "react";
import { SelectedGenderType } from "@/features/form/types/Gender.ts";

export const useSelectedGender = () => 
{
    const [SelectedGender, setSelectedGender] = useState<SelectedGenderType>({
        men: {
            selected: false
        },
        women: {
            selected: false
        },
    })

    return {SelectedGender, setSelectedGender}
}