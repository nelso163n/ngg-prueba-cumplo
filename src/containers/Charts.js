import React, { useState, useEffect} from "react";

import Filters from "../components/Filters";
import Chart from "../components/Chart";
import InfoChart from "../components/InfoChart";
import {getDolarByRange} from "../services/dolar";
import {getPeriod} from "../utils/utils";

const Charts = () => {
  const [avg, setAvg] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const [chartStringDates, setChartStringDates] = useState('');
  const [chartDollars, setChartDollars] = useState([]);

  useEffect(()=>{
    getDolar();
  },[dateFrom, dateTo]);
  
  const onChangeDateFrom = (event) => {
    setDateFrom(event.target.value);
  }

  const onChangeDateTo = (event) => {
    setDateTo(event.target.value);
  }
  
  const getInfoChart = (dollars) => {
    let data = {
      total: 0,
      average:undefined,
      maximum:undefined,
      minimum:undefined,
      stringDates:[],
      dollars:[]
    };
    if (!Array.isArray(dollars) || !dollars.length)
      return data;

    for (const dollar of dollars) {
      let value = parseFloat(dollar.Valor.replace(/,/g , "."));
      data.total = data.total + value;

      data.maximum = (value > data.maximum 
        || data.maximum == undefined)? value : data.maximum;
      data.minimum = (value < data.minimum 
        || data.minimum == undefined)? value : data.minimum;

      data.stringDates.push(dollar.Fecha);
      data.dollars.push(value);
    }

    data.average = data.total/(dollars.length);
    return data;
  }

  const getDolar = async () => {
    if (dateFrom != '' && dateTo != '') {
      const [fromPeriod, dayFrom] = getPeriod(dateFrom);
      const [toPeriod, dayTo] = getPeriod(dateTo);
      const response = await getDolarByRange(fromPeriod, dayFrom, toPeriod, dayTo);
      const info = getInfoChart(response.Dolares);
      setInfoChart(info);
      setChart(info);
    }
  }

  const setInfoChart = ({average, maximum, minimum}) => {
    setAvg(average);
    setMaxValue(maximum);
    setMinValue(minimum);
  };

  const setChart = ({stringDates, dollars}) => {
    setChartStringDates(stringDates);
    setChartDollars(dollars);
  };
  
  return(
    <div>
      <Filters 
        onChangeDateFrom={onChangeDateFrom}
        onChangeDateTo={onChangeDateTo}
        dateFrom={dateFrom}
        dateTo={dateTo}
      />
      <Chart
        chartStringDates={chartStringDates}
        chartDollars={chartDollars}
      />
      <br/>
      <InfoChart
        avg={avg}
        maxValue={maxValue}
        minValue={minValue}
      />
    </div>
  );
}

export default Charts;