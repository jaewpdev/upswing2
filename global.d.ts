// global.d.ts
interface CalendlyInterface {
    initInlineWidget: (options: {
        url: string,
        parentElement: HTMLElement,
        prefill?: {},
        utm?: {}
    }) => void;
}

declare global {
    interface Window {
        Calendly?: CalendlyInterface;
    }
}

export {};
