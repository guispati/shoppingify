import { ProgressBar } from "./ProgressBar";
import { ChartWrapper, TopChartsContainer } from "./styles";

export function TopCharts() {
    return (
        <TopChartsContainer>
            <div>
                <h2>Top Items</h2>
                <ChartWrapper>
                    <ProgressBar item="Banana" percentage={12} type="item" />
                    <ProgressBar item="Rice" percentage={10} type="item" />
                    <ProgressBar item="Chicken 1kg" percentage={8} type="item" />
                </ChartWrapper>
            </div>

            <div>
                <h2>Top Categories</h2>
                <ChartWrapper>
                    <ProgressBar item="Fruit and vegetables" percentage={23} type="category" />
                    <ProgressBar item="Meat and Fish" percentage={14} type="category" />
                    <ProgressBar item="Pets" percentage={11} type="category" />
                </ChartWrapper>
            </div>
        </TopChartsContainer>
    );
}