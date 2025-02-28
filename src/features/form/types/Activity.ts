
export type Activity = {
    sex: string;
    weight: number;
    sport: string;
    frequency: number;
    intensity: "low" | "medium" | "high";
    duration: number;
}

export type ActivityProps = {
    type: string;
    setType: (type: string) => void;
}

