import { useEffect, useRef } from "react";
import { pageOptions } from "../contexts/SidebarContext";

export function usePrevious(value: pageOptions) {
    const ref = useRef<pageOptions>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    if (ref.current) {
        return ref.current;
    }
    return 'shopping-cart';
}
