import { SelectedGenderType } from "@/features/form/types/Gender.ts";

export const isGenderSelected = ({SelectedGender}: {SelectedGender: SelectedGenderType}) => 
{
        const genderSelected: boolean = Object.values(SelectedGender).some(gender => gender.selected);
        return {genderSelected}
}
       
