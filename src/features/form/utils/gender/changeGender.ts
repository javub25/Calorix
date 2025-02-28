import { GenderProps } from "@/features/form/types/Gender.ts";

export const changeGender = ({e, setSelectedGender}: GenderProps) => {
    const {value} = e.target;

    setSelectedGender(({
      women: { selected: value === "women" },
      men: { selected: value === "men" }
    }));
  };