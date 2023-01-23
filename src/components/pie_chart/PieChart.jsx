import { Pie } from 'react-chartjs-2';
import styles from './pie_chart.module.scss'
import { Chart as ChartJS } from 'chart.js/auto'

export default function PieChart({ pieChartData }) {

    return (
        <div className={styles.pie_wrapper}>
            <Pie data={pieChartData} />
        </div>
    )
}




