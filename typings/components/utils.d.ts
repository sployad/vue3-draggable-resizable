import { ContainerProvider, ParentSize, ReferenceLineMap, ResizingHandle } from './types';
export declare const IDENTITY: unique symbol;
export declare function getElSize(el: Element): {
    width: number;
    height: number;
};
export declare const addEvent: <K extends keyof HTMLElementEventMap>(el: HTMLElement, events: K | K[], handler: any) => void;
export declare const removeEvent: <K extends keyof HTMLElementEventMap>(el: HTMLElement, events: K | K[], handler: any) => void;
export declare function filterHandles(handles: ResizingHandle[]): ResizingHandle[];
export declare function getId(): string;
export declare function getReferenceLineMap(containerProvider: ContainerProvider, parentSize: ParentSize, id?: string): ReferenceLineMap;
