import { MonthlySummaryContainer } from "./styles";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
);

export function MonthlySummary() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
        }
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'items',
                lineTension: 0.5,
                data: labels.map(() => Math.random()),
                borderColor: "#F9A109",
                backgroundColor: "#F9A109",
            },
        ],
    };

    return(
        <MonthlySummaryContainer>
            <h2>Monthly Summary</h2>

            <Line height={100} options={options} data={data} />
        </MonthlySummaryContainer>
    );
}