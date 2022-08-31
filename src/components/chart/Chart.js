import ChartBar from "./ChartBar";
import "./ChartBar.css";

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    const max = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => {
                dataPoint.maxValue = max;
                return <ChartBar key={dataPoint.label} dataPoint={dataPoint} />;
            })}
        </div>
    );
};
export default Chart;
