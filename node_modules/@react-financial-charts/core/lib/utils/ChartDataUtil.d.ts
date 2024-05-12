import { ScaleContinuousNumeric, ScaleTime } from "d3-scale";
export interface ChartConfig {
    id: number | string;
    readonly origin: number[];
    readonly padding: number | {
        top: number;
        bottom: number;
    };
    readonly originalYExtentsProp?: number[] | ((data: any) => number) | ((data: any) => number[]);
    readonly yExtents?: number[] | ((data: any) => number) | ((data: any) => number[]);
    readonly yExtentsCalculator?: (options: {
        plotData: any[];
        xDomain: any;
        xAccessor: any;
        displayXAccessor: any;
        fullData: any[];
    }) => number[];
    readonly flipYScale?: boolean;
    readonly yScale: ScaleContinuousNumeric<number, number>;
    readonly yPan: boolean;
    readonly yPanEnabled: boolean;
    readonly realYDomain?: number[];
    readonly width: number;
    readonly height: number;
    mouseCoordinates?: {
        at: string;
        format: () => unknown;
    };
}
export declare const ChartDefaultConfig: {
    flipYScale: boolean;
    id: number;
    origin: number[];
    padding: number;
    yPan: boolean;
    yPanEnabled: boolean;
    yScale: import("d3-scale").ScaleLinear<number, number, never>;
};
export declare function getChartOrigin(origin: any, contextWidth: number, contextHeight: number): any;
export declare function getDimensions({ width, height }: any, chartProps: any): {
    availableHeight: any;
    width: any;
    height: any;
};
export declare function getNewChartConfig(innerDimension: any, children: any, existingChartConfig?: ChartConfig[]): any;
export declare function getCurrentCharts(chartConfig: ChartConfig[], mouseXY: number[]): any[];
export declare function getChartConfigWithUpdatedYScales(chartConfig: ChartConfig[], { plotData, xAccessor, displayXAccessor, fullData }: any, xDomain: any, dy?: number, chartsToPan?: (string | number)[]): ChartConfig[];
export declare function getCurrentItem(xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>, xAccessor: any, mouseXY: number[], plotData: any[]): any;
export declare function getXValue(xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>, xAccessor: any, mouseXY: number[], plotData: any[]): any;
