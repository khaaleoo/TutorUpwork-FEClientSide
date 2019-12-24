/* eslint-disable react/prop-types */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { DatePicker } from 'antd';

const Statistic = props => {
  const { RangePicker } = DatePicker;
  const {
    statisticData,
    setStatisticData,
    getListContractByTime,
    tutorId,
    loadStatisticDone,
    timeRange,
    setTimeRange,
  } = props;
  const moneyData = [0, 0, 0, 0, 0, 0, 0];
  if (statisticData && statisticData !== undefined) {
    statisticData.forEach(val => {
      const price = val.totalPrice;
      const state = val.status;
      if (state === 'Chưa thanh toán') moneyData[0] += price;
      if (state === 'Đã thanh toán') moneyData[1] += price;
      if (state === 'Đang thực hiện') moneyData[2] += price;
      if (state === 'Hoàn thành') moneyData[3] += price;
      if (state === 'Đã huỷ') moneyData[4] += price;
      if (state === 'Đang khiếu nại') moneyData[5] += price;
      moneyData[6] += price;
    });
  }
  const handleChange = (e, dt) => {
    setTimeRange(e);
    setStatisticData(false);
    getListContractByTime(tutorId, dt[0], dt[1], loadStatisticDone);
  };
  return (
    <div>
      <RangePicker
        style={{ padding: 10 }}
        size="default"
        onChange={handleChange}
        value={timeRange}
      />
      <hr />
      <Bar
        data={{
          labels: [
            'Chưa thanh toán',
            'Đã thanh toán',
            'Đang thực hiện',
            'Hoàn thành',
            'Đã huỷ',
            'Đang khiếu nại',
            'Tổng',
          ],
          datasets: [
            {
              label: 'Đơn vị: VND',
              data: moneyData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};
export default Statistic;
