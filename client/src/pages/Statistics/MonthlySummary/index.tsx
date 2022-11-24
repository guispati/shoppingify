import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

import { MonthlySummaryContainer } from "./styles";
import { useStatistics } from "../../../hooks/useStatistics";
import { formatMonthFromNumberToText } from "../../../utils/formatDate";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
);

type ResponseFromApiType = {
    total: number,
    month: number
}

export function MonthlySummary() {
	const { getMonthlySalesByYear } = useStatistics();
    const [response, setResponse] = useState<ResponseFromApiType[]>([]);
    
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        getMonthlySalesByYear(currentYear).then(res => {
            setResponse(res);
        });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
        }
    };

    const labels = response.map(({month}) => formatMonthFromNumberToText(month));

    const data = {
        labels,
        datasets: [
            {
                label: 'items',
                lineTension: 0.5,
                data: response.map(({total}) => total),
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