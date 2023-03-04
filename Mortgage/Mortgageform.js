import * as React from "react";
import {
  Label,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";



function renderTooltip({ payload }) {
  if (!payload[0]) {
    return;
  }

  return <span>{`$${payload[0].value.toFixed(2)}`}</span>;
}

function MortgageChart({loanAmount, interestRate, loanDuration}) {
  
  const data = React.useMemo(
    () => {
      const result = [];
      for (let i=1; i<= loanDuration; i++){
        let monthlyPayment = loanAmount*((interestRate*Math.pow(1+interestRate,loanDuration))/((Math.pow(1+interestRate,loanDuration)-1)));
        if (result.length > 0){
          monthlyPayment = result[result.length-1].value;
        }
        result.push({
          label: `${i}`,
          value: monthlyPayment - loanAmount
        });
      }
      return result;
    },
    [loanAmount, loanDuration, interestRate]

  );
  return (
    <>
      <h2>Projected Growth</h2>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label">
              <Label value="Years" offset={-3} position="insideBottom" />
            </XAxis>
            <YAxis />
            <Tooltip content={renderTooltip} />
            <Line type="monotone" dataKey="value" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <hr /> 
    </>
  );
}

export default MortgageChart;