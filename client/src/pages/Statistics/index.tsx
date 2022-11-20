import { MonthlySummary } from "./MonthlySummary";
import { StatisticsContainer } from "./styles";
import { TopCharts } from "./TopCharts";

export function Statistics() {
	return (
		<StatisticsContainer>
			<TopCharts />

			<MonthlySummary />
		</StatisticsContainer>
	);
}