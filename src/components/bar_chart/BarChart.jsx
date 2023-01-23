import { Bar } from 'react-chartjs-2';
import styles from './bar_chart.module.scss'
import { Chart as ChartJS } from 'chart.js/auto'

export default function BarChart({ barChartConfig }) {

    return (
        <div className={styles.bar_wrapper}>
            <Bar data={barChartConfig} />
        </div>
    )
}




