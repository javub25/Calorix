
export type SelectedGenderType = {
    [key: string]: {
        selected: boolean
    }
};

export type GenderProps = {
    e: React.ChangeEvent<HTMLInputElement>,
    setSelectedGender: (gender: { women: { selected: boolean }, men: { selected: boolean } }) => void 
}