import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { FullDateWithIcon } from "../../../../../components/FullDateWithIcon";
import { HistoryList } from "../../../../../contexts/HistoryContext";
import { ItemContainer, ItemInfo, ItemStatus } from "./styles";

interface ItemProps {
    item: HistoryList;
}

export function Item({ item }: ItemProps) {
    return (
        <ItemContainer>
            <Link to={`/history/${item._id}`}>
                <h3>{item.name}</h3>
                <ItemInfo>
                    <FullDateWithIcon date={item.createdAt} />

                    <ItemStatus status={item.status}>
                        <span>{item.status}</span>
                    </ItemStatus>

                    <CaretRight size={24} weight="bold" />
                </ItemInfo>
            </Link>
        </ItemContainer>
    );
}