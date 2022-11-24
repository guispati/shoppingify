import { useEffect, useState } from "react";

import { useStatistics } from "../../../../hooks/useStatistics";
import { ProgressBar } from "./ProgressBar";
import { ChartContainer, ChartWrapper } from "./styles";

interface ChartProps {
    title: string;
    type: "item" | "category";
}

type ItemType = {
    id: string,
    name: string,
    percentage: number,
}

export function Chart({ title, type }: ChartProps) {
    const { getTopSellingsByField } = useStatistics();
    const [ items, setItems ] = useState<ItemType[]>([]);
    const field = type === 'item' ? 'name' : 'category';
    
    useEffect(() => {
        getTopSellingsByField(field).then(res => {
            const formattedItems: ItemType[] = res.map((el: any) => {
                return {
                    id: el._id,
                    name: el.item.name,
                    percentage: el.percentage,
                };
            });
            setItems(formattedItems);
        });
    }, []);

    return (
        <ChartContainer>
            <h2>{title}</h2>

            <ChartWrapper>
                {items.map((item, index) => (
                    <ProgressBar key={index} item={item.name} percentage={item.percentage} type={type} />
                ))}
            </ChartWrapper>
        </ChartContainer>
    );
}