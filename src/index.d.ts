interface VisibilityCheckerOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
}

type VisibilityCallback = (element: Element, isVisible: boolean) => void;

declare class VisibilityChecker {
    constructor(callback: VisibilityCallback, options?: VisibilityCheckerOptions);

    observe(element: Element): void;
    unobserve(element: Element): void;
    disconnect(): void;
}

export default VisibilityChecker;