import { Bar, ProgressBarContainer } from "./styles";

interface ProgressBarProps {
    type: "item" | "category";
    item: string;
    percentage: number;
}

export function ProgressBar({ item, percentage, type }: ProgressBarProps) {
    return (
        <ProgressBarContainer>
            <header>
                <h3>{item}</h3>
                <h3>{percentage}%</h3>
            </header>

            <Bar percentage={percentage} type={type} />
        </ProgressBarContainer>
    );
}