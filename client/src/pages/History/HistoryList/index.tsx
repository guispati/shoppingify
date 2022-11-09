import { useEffect, useState } from "react";
import { useHistory } from "../../../hooks/useHistory";
import { HistoryListContainer } from "./styles";

export function HistoryList() {
    const { history } = useHistory();

    useEffect(() => {
        console.log(history);
    }, [history]);

    return (
        <HistoryListContainer>

        </HistoryListContainer>
    );
}