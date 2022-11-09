import { Fragment, useEffect, useState } from "react";
import { useHistory } from "../../../hooks/useHistory";
import { HistoryListContainer } from "./styles";
import { formatDateToMonthYear } from "../../../utils/formatDate";

export function HistoryList() {
    const { history } = useHistory();
    const [dates, setDates] = useState<string[]>([]);
	
	useEffect(() => {
		if (history.length > 0) {
			const arr = [...new Set(history.map((item) => formatDateToMonthYear(item.createdAt)))];
			setDates(arr);
		}
	}, [history]);

    return (
        <HistoryListContainer>
            {dates.map((date) => (
                <Fragment key={date}>
                    <h2>{date}</h2>
                    <ul>
                        {history.filter(item => formatDateToMonthYear(item.createdAt) === date).map(item => (
                            <li key={item._id}>{item.name}</li>
                        ))}
                    </ul>
                </Fragment>
            ))}
        </HistoryListContainer>
    );
}