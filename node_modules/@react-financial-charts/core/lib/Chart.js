import * as React from "react";
import { ChartCanvasContext, chartCanvasContextDefaultValue } from "./ChartCanvas";
export const ChartContext = React.createContext(Object.assign(Object.assign({}, chartCanvasContextDefaultValue), { 
    // @ts-ignore
    chartConfig: {}, chartId: 0 }));
export const Chart = React.memo((props) => {
    const { 
    // flipYScale = false,
    id = 0, 
    // origin = [0, 0],
    // padding = 0,
    // yPan = true,
    // yPanEnabled = false,
    // yScale = scaleLinear(),
    onContextMenu, onDoubleClick, } = props;
    const chartCanvasContextValue = React.useContext(ChartCanvasContext);
    const { subscribe, unsubscribe, chartConfigs } = chartCanvasContextValue;
    const listener = React.useCallback((type, moreProps, _, e) => {
        switch (type) {
            case "contextmenu": {
                if (onContextMenu === undefined) {
                    return;
                }
                const { currentCharts } = moreProps;
                if (currentCharts.indexOf(id) > -1) {
                    onContextMenu(e, moreProps);
                }
                break;
            }
            case "dblclick": {
                if (onDoubleClick === undefined) {
                    return;
                }
                const { currentCharts } = moreProps;
                if (currentCharts.indexOf(id) > -1) {
                    onDoubleClick(e, moreProps);
                }
                break;
            }
        }
    }, [onContextMenu, onDoubleClick, id]);
    React.useEffect(() => {
        subscribe(`chart_${id}`, {
            listener,
        });
        return () => unsubscribe(`chart_${id}`);
    }, [subscribe, unsubscribe, id, listener]);
    const config = chartConfigs.find(({ id }) => id === props.id);
    const contextValue = React.useMemo(() => {
        return Object.assign(Object.assign({}, chartCanvasContextValue), { chartId: id, chartConfig: config });
    }, [id, config, chartCanvasContextValue]);
    const { origin: [x, y], } = config;
    return (React.createElement(ChartContext.Provider, { value: contextValue },
        React.createElement("g", { transform: `translate(${x}, ${y})`, id: `chart_${id}` }, props.children)));
});
Chart.displayName = "Chart";
//# sourceMappingURL=Chart.js.map