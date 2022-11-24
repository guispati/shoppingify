import { Chart } from "./Chart";
import { TopChartsContainer } from "./styles";

export function TopCharts() {
    return (
        <TopChartsContainer>
            <Chart title="Top Items" type="item" />

            <Chart title="Top Categories" type="category" />
        </TopChartsContainer>
    );
}