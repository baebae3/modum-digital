import { useState } from 'react'
import './App.css'
import GiftList from './components/gift_list/GiftList'
import PieChart from './components/pie_chart/PieChart'
import BarChart from './components/bar_chart/BarChart'
import History from './components/history/History'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { giftCountHandler, genderCountHandler } from './store/reducers/charts'


function App() {
  const dispatch = useDispatch()

  const allGifts = useSelector(store => store.gifts)
  const giftsCount = useSelector(store => store.charts.giftCount)
  const genderCount = useSelector(store => store.charts.genderCount)

  const pieConfig = {
    labels: ['Дикий Авимим', 'Смышлёная Юрамайя', 'Оранжевый Таларурус', 'Грациозная Иликура', 'Беспечная Ендайя'],
    datasets: [{
      label: 'Количество подаренных подарков',
      data: [giftsCount['Дикий Авимим'], giftsCount['Смышлёная Юрамайя'], giftsCount['Оранжевый Таларурус'], giftsCount['Грациозная Иликура'], giftsCount['Беспечная Ендайя']],
      backgroundColor: ['red', 'green', 'orange', 'blue', 'purple']
    }]
  }

  const barConfig = {
    labels: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: 'Мальчик',
        data: [genderCount[3]['Мальчик'], genderCount[4]['Мальчик'], genderCount[5]['Мальчик'], genderCount[6]['Мальчик'], genderCount[7]['Мальчик'], genderCount[8]['Мальчик'], genderCount[9]['Мальчик'], genderCount[10]['Мальчик'], genderCount[11]['Мальчик'], genderCount[12]['Мальчик']]
      },
      {
        label: 'Девочка',
        data: [genderCount[3]['Девочка'], genderCount[4]['Девочка'], genderCount[5]['Девочка'], genderCount[6]['Девочка'], genderCount[7]['Девочка'], genderCount[8]['Девочка'], genderCount[9]['Девочка'], genderCount[10]['Девочка'], genderCount[11]['Девочка'], genderCount[12]['Девочка']]
      }
    ]
  }

  const [pieChartConfig, setPieChartConfig] = useState(pieConfig)
  const [barChartConfig, setBarChartConfig] = useState(barConfig)




  useEffect(() => {
    dispatch(giftCountHandler(allGifts))
    dispatch(genderCountHandler(allGifts))
  }
    , [allGifts])

  useEffect(() => {
    setPieChartConfig(pieConfig)
  }, [giftsCount])

  useEffect(() => {
    setBarChartConfig(barConfig)
  }, [giftsCount])


  return (
    <div className="App">
      <PieChart pieChartData={pieChartConfig} />
      <BarChart barChartConfig={barChartConfig} />
      <GiftList />
      <History />
    </div>
  )
}


export default App
