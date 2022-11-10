import { CalendarBlank } from "phosphor-react";
import { formatDateComplete } from "../../utils/formatDate";
import { FullDateWithIconContainer } from "./styles";

interface FullDateWithIconProps {
    date: Date;
}

export function FullDateWithIcon({ date }: FullDateWithIconProps) {
    return (
        <FullDateWithIconContainer>
            <CalendarBlank size={20} weight="bold" />
            <span>{formatDateComplete(date)}</span>
        </FullDateWithIconContainer>
    );
}