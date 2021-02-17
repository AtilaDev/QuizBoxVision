import React from 'react';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';

function LineChart({ dataChart }) {
  return (
    <Chart
      style={{ height: 250, width: 400, marginTop: 10 }}
      data={dataChart}
      padding={{ left: 60, bottom: 20, right: 60, top: 20 }}
      xDomain={{ min: 1, max: 10 }}
      yDomain={{ min: 0, max: 100 }}
      viewport={{ size: { width: 5 } }}>
      <VerticalAxis
        tickCount={11}
        theme={{ labels: { formatter: (v) => v } }}
      />
      <HorizontalAxis tickCount={10} />
      <Area
        theme={{
          gradient: {
            from: { color: '#5DD1B9' },
            to: { color: '#5DD1B9', opacity: 0.4 },
          },
        }}
      />
      <Line
        theme={{
          stroke: { color: '#5DD1B9', width: 4 },
          scatter: { default: { width: 4, height: 4, rx: 2 } },
        }}
      />
    </Chart>
  );
}

export default LineChart;
