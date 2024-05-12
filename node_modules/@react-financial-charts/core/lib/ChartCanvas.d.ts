import { ScaleContinuousNumeric, ScaleTime } from "d3-scale";
import * as React from "react";
import { IZoomAnchorOptions } from "./zoom";
import { ChartConfig } from "./utils/ChartDataUtil";
import { ICanvasContexts } from "./CanvasContainer";
export interface ChartCanvasContextType<TXAxis extends number | Date> {
    width: number;
    height: number;
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    chartId: number | string;
    getCanvasContexts?: () => ICanvasContexts | undefined;
    xScale: Function;
    ratio: number;
    xAccessor: (data: any) => TXAxis;
    displayXAccessor: (data: any) => TXAxis;
    xAxisZoom?: (newDomain: any) => void;
    yAxisZoom?: (chartId: string, newDomain: any) => void;
    redraw: () => void;
    plotData: any[];
    fullData: any[];
    chartConfigs: ChartConfig[];
    morePropsDecorator?: () => void;
    generateSubscriptionId?: () => number;
    getMutableState: () => {};
    amIOnTop: (id: string | number) => boolean;
    subscribe: (id: string | number, rest: any) => void;
    unsubscribe: (id: string | number) => void;
    setCursorClass: (className: string | null | undefined) => void;
}
export declare const chartCanvasContextDefaultValue: ChartCanvasContextType<number | Date>;
export declare const ChartCanvasContext: React.Context<ChartCanvasContextType<number | Date>>;
export interface ChartCanvasProps<TXAxis extends number | Date> {
    readonly clamp?: boolean | ("left" | "right" | "both") | ((domain: [number, number], items: [number, number]) => [number, number]);
    readonly className?: string;
    readonly children?: React.ReactNode;
    readonly data: any[];
    readonly defaultFocus?: boolean;
    readonly disableInteraction?: boolean;
    readonly disablePan?: boolean;
    readonly disableZoom?: boolean;
    readonly displayXAccessor?: (data: any) => TXAxis;
    readonly flipXScale?: boolean;
    readonly height: number;
    readonly margin: {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
    readonly maintainPointsPerPixelOnResize?: boolean;
    readonly minPointsPerPxThreshold?: number;
    readonly mouseMoveEvent?: boolean;
    /**
     * Called when panning left past the first data point.
     */
    readonly onLoadAfter?: (start: TXAxis, end: TXAxis) => void;
    /**
     * Called when panning right past the last data point.
     */
    readonly onLoadBefore?: (start: TXAxis, end: TXAxis) => void;
    /**
     * Click event handler.
     */
    readonly onClick?: React.MouseEventHandler<HTMLDivElement>;
    /**
     * Double click event handler.
     */
    readonly onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
    readonly padding?: number | {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
    readonly plotFull?: boolean;
    readonly pointsPerPxThreshold?: number;
    readonly postCalculator?: (plotData: any[]) => any[];
    readonly ratio: number;
    readonly seriesName: string;
    readonly useCrossHairStyleCursor?: boolean;
    readonly width: number;
    readonly xAccessor: (data: any) => TXAxis;
    readonly xExtents: ((data: any[]) => [TXAxis, TXAxis]) | (((data: any[]) => TXAxis) | TXAxis)[];
    readonly xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
    readonly zIndex?: number;
    readonly zoomAnchor?: (options: IZoomAnchorOptions<any, TXAxis>) => TXAxis;
    readonly zoomMultiplier?: number;
}
interface ChartCanvasState<TXAxis extends number | Date> {
    lastProps?: ChartCanvasProps<TXAxis>;
    propIteration?: number;
    xAccessor: (data: any) => TXAxis;
    displayXAccessor?: any;
    filterData?: any;
    chartConfigs: ChartConfig[];
    plotData: any[];
    xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
    fullData: any[];
}
interface MutableState {
    mouseXY: [number, number];
    currentItem: any;
    currentCharts: string[];
}
export declare class ChartCanvas<TXAxis extends number | Date> extends React.Component<ChartCanvasProps<TXAxis>, ChartCanvasState<TXAxis>> {
    static defaultProps: {
        clamp: boolean;
        className: string;
        defaultFocus: boolean;
        disablePan: boolean;
        disableInteraction: boolean;
        disableZoom: boolean;
        flipXScale: boolean;
        maintainPointsPerPixelOnResize: boolean;
        margin: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        minPointsPerPxThreshold: number;
        mouseMoveEvent: boolean;
        postCalculator: (d: any) => any;
        padding: number;
        pointsPerPxThreshold: number;
        useCrossHairStyleCursor: boolean;
        xAccessor: (data: any) => any;
        xExtents: any[];
        zIndex: number;
        zoomAnchor: <TData, TXAxis_1 extends number | Date>(options: IZoomAnchorOptions<TData, TXAxis_1>) => TXAxis_1;
        zoomMultiplier: number;
    };
    private readonly canvasContainerRef;
    private readonly eventCaptureRef;
    private finalPinch?;
    private lastSubscriptionId;
    private mutableState;
    private panInProgress;
    private prevMouseXY?;
    private subscriptions;
    private waitingForPinchZoomAnimationFrame?;
    private waitingForPanAnimationFrame?;
    private waitingForMouseMoveAnimationFrame?;
    private hackyWayToStopPanBeyondBounds__plotData?;
    private hackyWayToStopPanBeyondBounds__domain?;
    constructor(props: ChartCanvasProps<TXAxis>);
    static getDerivedStateFromProps<TXAxis extends number | Date>(props: ChartCanvasProps<TXAxis>, state: ChartCanvasState<TXAxis>): ChartCanvasState<TXAxis>;
    getSnapshotBeforeUpdate(prevProps: Readonly<ChartCanvasProps<TXAxis>>, prevState: Readonly<ChartCanvasState<TXAxis>>): null;
    componentDidUpdate(prevProps: ChartCanvasProps<TXAxis>): void;
    getMutableState: () => MutableState;
    getCanvasContexts: () => ICanvasContexts | undefined;
    generateSubscriptionId: () => number;
    clearBothCanvas(): void;
    clearMouseCanvas(): void;
    clearThreeCanvas(): void;
    subscribe: (id: string | number, rest: any) => void;
    unsubscribe: (id: string | number) => void;
    getAllPanConditions: () => {
        draggable: boolean;
        panEnabled: boolean;
    }[];
    setCursorClass: (className: string | null | undefined) => void;
    amIOnTop: (id: string | number) => boolean;
    handleContextMenu: (mouseXY: number[], e: React.MouseEvent) => void;
    calculateStateForDomain: (newDomain: any) => {
        xScale: ScaleContinuousNumeric<number, number, never> | ScaleTime<number, number, never>;
        plotData: any;
        chartConfigs: ChartConfig[];
    };
    pinchZoomHelper: (initialPinch: any, finalPinch: any) => {
        chartConfigs: ChartConfig[];
        xScale: ScaleContinuousNumeric<number, number, never> | ScaleTime<number, number, never>;
        plotData: any;
        mouseXY: any;
        currentItem: any;
        xAccessor: (data: any) => TXAxis;
        fullData: any[];
    };
    cancelDrag(): void;
    handlePinchZoom: (initialPinch: any, finalPinch: any, e: any) => void;
    handlePinchZoomEnd: (initialPinch: any, e: any) => void;
    handleZoom: (zoomDirection: any, mouseXY: any, e: any) => void;
    xAxisZoom: (newDomain: any) => void;
    yAxisZoom: (chartId: string, newDomain: any) => void;
    triggerEvent(type: any, props?: any, e?: any): void;
    draw: (props: {
        trigger: string;
    } | {
        force: boolean;
    }) => void;
    redraw: () => void;
    panHelper: (mouseXY: [number, number], initialXScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>, { dx, dy }: {
        dx: number;
        dy: number;
    }, chartsToPan: string[]) => {
        xScale: ScaleContinuousNumeric<number, number, never> | ScaleTime<number, number, never>;
        plotData: any;
        chartConfigs: ChartConfig[];
        mouseXY: [number, number];
        currentCharts: any[];
        currentItem: any;
    };
    handlePan: (mousePosition: [number, number], panStartXScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>, dxdy: {
        dx: number;
        dy: number;
    }, chartsToPan: string[], e: React.MouseEvent) => void;
    handlePanEnd: (mousePosition: [number, number], panStartXScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>, dxdy: {
        dx: number;
        dy: number;
    }, chartsToPan: string[], e: React.MouseEvent | React.TouchEvent) => void;
    handleMouseDown: (_: number[], __: string[], e: React.MouseEvent) => void;
    handleMouseEnter: (e: React.MouseEvent) => void;
    handleMouseMove: (mouseXY: [number, number], _: string, e: any) => void;
    handleMouseLeave: (e: any) => void;
    handleDragStart: ({ startPos }: any, e: any) => void;
    handleDrag: ({ startPos, mouseXY }: {
        startPos: [number, number];
        mouseXY: [number, number];
    }, e: React.MouseEvent) => void;
    handleDragEnd: ({ mouseXY }: {
        mouseXY: number[];
    }, e: React.MouseEvent) => void;
    handleClick: (_: number[], e: React.MouseEvent) => void;
    handleDoubleClick: (_: number[], e: React.MouseEvent) => void;
    getContextValues(): ChartCanvasContextType<TXAxis>;
    resetYDomain: (chartId?: string) => void;
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export {};
