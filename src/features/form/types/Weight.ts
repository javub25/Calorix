export type WeigthProps = {
    e: React.ChangeEvent<HTMLInputElement>,
    setWeight: (weight: number) => void,
    weightRef: React.RefObject<NodeJS.Timeout | null>
}