import colorGenerator from './colorGenerator';

function formatDataForChart(data) {
  const dataHardskilsFormated = data.map(({ area, tools }) => {
    const dataFormated = tools.reduce((acc, obj) => {
      acc.labels.push(obj.type);
      acc.data.push(obj.value);
      acc.backgroundColor.push(colorGenerator());
      return acc;
    }, { labels: [], data: [], backgroundColor: [] });

    return {
      data: {
        labels: dataFormated.labels,
        datasets: [
          {
            data: dataFormated.data,
            backgroundColor: dataFormated.backgroundColor,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          title: { display: true, text: area },
          legend: { display: false },
        },
      },
    };
  });

  return dataHardskilsFormated;
}

export default formatDataForChart;
