import "./Chart.css";

const ChartBar = ({ dataPoint }) => {
    // console.log(dataPoint);
    let barFillHeight = "0%";
    if (dataPoint.value > 0) {
        barFillHeight =
            Math.round((dataPoint.value / dataPoint.maxValue) * 100) + "%";
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    style={{ height: barFillHeight }}
                    className="chart-bar__fill"
                ></div>
            </div>
            <div className="chart-bar__label">{dataPoint.label}</div>
        </div>
    );
};
export default ChartBar;
