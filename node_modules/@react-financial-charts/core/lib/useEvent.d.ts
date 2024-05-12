export declare function useEvent<F extends (...args: any[]) => any>(handler: F): (...args: Parameters<F>) => ReturnType<F>;
