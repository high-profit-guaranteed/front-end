import { ScaleContinuousNumeric } from "d3-scale";
import * as React from "react";
import { ChartCanvasContextType } from "./ChartCanvas";
import type { ChartConfig } from "./utils/ChartDataUtil";
export type ChartContextType = Omit<ChartCanvasContextType<number | Date>, "chartConfig"> & {
    chartConfig: ChartConfig;
};
export declare const ChartContext: React.Context<ChartContextType>;
export interface ChartProps {
    readonly flipYScale?: boolean;
    readonly height?: number;
    readonly id: number | string;
    readonly onContextMenu?: (event: React.MouseEvent, moreProps: any) => void;
    readonly onDoubleClick?: (event: React.MouseEvent, moreProps: any) => void;
    readonly origin?: number[] | ((width: number, height: number) => number[]);
    readonly padding?: number | {
        top: number;
        bottom: number;
    };
    readonly yExtents?: number[] | ((data: any) => number) | ((data: any) => number[]);
    readonly yExtentsCalculator?: (options: {
        plotData: any[];
        xDomain: any;
        xAccessor: any;
        displayXAccessor: any;
        fullData: any[];
    }) => number[];
    readonly yPan?: boolean;
    readonly yPanEnabled?: boolean;
    readonly yScale?: ScaleContinuousNumeric<number, number>;
}
export declare const Chart: React.MemoExoticComponent<(props: React.PropsWithChildren<ChartProps>) => JSX.Element>;
