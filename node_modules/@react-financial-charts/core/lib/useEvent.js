import { useCallback, useLayoutEffect, useRef } from "react";
// Based on https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md#internal-implementation
export function useEvent(handler) {
    const handlerRef = useRef();
    useLayoutEffect(() => {
        handlerRef.current = handler;
    });
    return useCallback((...args) => {
        const fn = handlerRef.current;
        return fn(...args);
    }, []);
}
//# sourceMappingURL=useEvent.js.map