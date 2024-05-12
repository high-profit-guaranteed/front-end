/// <reference types="react" />
import { GenericComponent } from "./GenericComponent";
export declare class GenericChartComponent extends GenericComponent {
    static defaultProps: {
        svgDraw: any;
        draw: never[];
        canvasToDraw: (contexts: import("./CanvasContainer").ICanvasContexts) => CanvasRenderingContext2D | undefined;
        clip: boolean;
        edgeClip: boolean;
        selected: boolean;
        disablePan: boolean;
        enableDragOnHover: boolean;
    };
    static contextType: import("react").Context<import("./Chart").ChartContextType>;
    constructor(props: any, context: any);
    preCanvasDraw(ctx: CanvasRenderingContext2D, moreProps: any): void;
    postCanvasDraw(ctx: CanvasRenderingContext2D, moreProps: any): void;
    updateMoreProps(moreProps: any): void;
    preEvaluate(): void;
    shouldTypeProceed(type: string, moreProps: any): boolean;
}
