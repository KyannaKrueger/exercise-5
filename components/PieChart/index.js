
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: '# of Votes',
                data: [10,30, 14, 5, 12, 25],
                borderColor: 'rgba(53, 162, 235, 0.4)',
                backgroundColor: 
                ['rgba(255, 100, 100, 0.4)',
                'rgba(10, 100, 255, 0.4)',
                'rgba(255, 255, 20, 0.4)',
                'rgba(30, 255, 30, 0.4)',
                'rgba(10, 10, 255, 0.4)',
                'rgba(255, 100, 10, 0.4)'
            ]
            }
        ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
            <div>
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
            </div>
    )
}