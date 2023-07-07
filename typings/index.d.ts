import { Plugin } from 'vue';
export { default as DraggableContainer } from './components/DraggableContainer';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            [x: `on${Capitalize<string>}`]: (...args: any[]) => any;
            active?: boolean;
            draggable?: boolean;
            parent?: boolean;
            x?: number;
            y?: number;
            w?: number;
            h?: number;
            parentScaleX?: number;
            parentScaleY?: number;
            triggerKey?: string;
            resizable?: boolean;
            initW?: number;
            initH?: number;
            disabledX?: boolean;
            disabledY?: boolean;
            disabledW?: boolean;
            disabledH?: boolean;
            minW?: number;
            minH?: number;
            maxW?: number;
            maxH?: number;
            handles?: unknown[];
            classNameDraggable?: string;
            classNameResizable?: string;
            classNameDragging?: string;
            classNameResizing?: string;
            classNameActive?: string;
            classNameHandle?: string;
            lockAspectRatio?: boolean;
            key?: string | number | symbol;
            style?: unknown;
            class?: unknown;
            ref?: import("vue").VNodeRef;
            ref_for?: boolean;
            ref_key?: string;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            initW: {
                type: NumberConstructor;
                default: any;
            };
            initH: {
                type: NumberConstructor;
                default: any;
            };
            w: {
                type: NumberConstructor;
                default: number;
            };
            h: {
                type: NumberConstructor;
                default: number;
            };
            x: {
                type: NumberConstructor;
                default: number;
            };
            y: {
                type: NumberConstructor;
                default: number;
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            resizable: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledX: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledY: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledW: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabledH: {
                type: BooleanConstructor;
                default: boolean;
            };
            minW: {
                type: NumberConstructor;
                default: number;
            };
            minH: {
                type: NumberConstructor;
                default: number;
            };
            maxW: {
                type: NumberConstructor;
                default: number;
            };
            maxH: {
                type: NumberConstructor;
                default: number;
            };
            active: {
                type: BooleanConstructor;
                default: boolean;
            };
            parent: {
                type: BooleanConstructor;
                default: boolean;
            };
            handles: {
                type: ArrayConstructor;
                default: import("./components/types").ResizingHandle[];
                validator: (handles: import("./components/types").ResizingHandle[]) => boolean;
            };
            classNameDraggable: {
                type: StringConstructor;
                default: string;
            };
            classNameResizable: {
                type: StringConstructor;
                default: string;
            };
            classNameDragging: {
                type: StringConstructor;
                default: string;
            };
            classNameResizing: {
                type: StringConstructor;
                default: string;
            };
            classNameActive: {
                type: StringConstructor;
                default: string;
            };
            classNameHandle: {
                type: StringConstructor;
                default: string;
            };
            lockAspectRatio: {
                type: BooleanConstructor;
                default: boolean;
            };
            parentScaleX: {
                type: NumberConstructor;
                default: number;
            };
            parentScaleY: {
                type: NumberConstructor;
                default: number;
            };
            triggerKey: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            [x: `on${Capitalize<string>}`]: (...args: any[]) => any;
        }, {
            handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
            resizeHandleDown: (e: MouseEvent | TouchEvent, handleType: import("./components/types").ResizingHandle) => void;
            setWidth(val: number): number;
            setHeight(val: number): number;
            setTop(val: number): number;
            setLeft(val: number): number;
            minWidth: import("vue").ComputedRef<number>;
            minHeight: import("vue").ComputedRef<number>;
            maxWidth: import("vue").ComputedRef<number>;
            maxHeight: import("vue").ComputedRef<number>;
            minLeft: import("vue").ComputedRef<number>;
            minTop: import("vue").ComputedRef<number>;
            maxLeft: import("vue").ComputedRef<number>;
            maxTop: import("vue").ComputedRef<number>;
            parentWidth: import("vue").Ref<number>;
            parentHeight: import("vue").Ref<number>;
            id: string;
            width: import("vue").Ref<number>;
            height: import("vue").Ref<number>;
            top: import("vue").Ref<number>;
            left: import("vue").Ref<number>;
            enable: import("vue").Ref<boolean>;
            dragging: import("vue").Ref<boolean>;
            resizing: import("vue").Ref<boolean>;
            resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
            resizingMaxHeight: import("vue").Ref<number>;
            resizingMaxWidth: import("vue").Ref<number>;
            resizingMinWidth: import("vue").Ref<number>;
            resizingMinHeight: import("vue").Ref<number>;
            aspectRatio: import("vue").ComputedRef<number>;
            parentScaleX: import("vue").Ref<number>;
            parentScaleY: import("vue").Ref<number>;
            triggerKey: import("vue").Ref<"left" | "right">;
            setEnable: (value: boolean) => boolean;
            setDragging: (value: boolean) => boolean;
            setResizing: (value: boolean) => boolean;
            setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
            setResizingMaxHeight: (value: number) => number;
            setResizingMaxWidth: (value: number) => number;
            setResizingMinWidth: (value: number) => number;
            setResizingMinHeight: (value: number) => number;
            DSMsetWidth: (val: number) => number;
            DSMsetHeight: (val: number) => number;
            DSMsetTop: (val: number) => number;
            DSMsetLeft: (val: number) => number;
            containerRef: import("vue").Ref<HTMLElement>;
            containerProvider: import("./components/types").ContainerProvider;
        }, unknown, {
            style(): {
                [propName: string]: string;
            };
            klass(): {
                [propName: string]: string | boolean;
            };
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
            active: boolean;
            draggable: boolean;
            parent: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
            parentScaleX: number;
            parentScaleY: number;
            triggerKey: string;
            resizable: boolean;
            initW: number;
            initH: number;
            disabledX: boolean;
            disabledY: boolean;
            disabledW: boolean;
            disabledH: boolean;
            minW: number;
            minH: number;
            maxW: number;
            maxH: number;
            handles: unknown[];
            classNameDraggable: string;
            classNameResizable: string;
            classNameDragging: string;
            classNameResizing: string;
            classNameActive: string;
            classNameHandle: string;
            lockAspectRatio: boolean;
        }, {}, string, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        initW: {
            type: NumberConstructor;
            default: any;
        };
        initH: {
            type: NumberConstructor;
            default: any;
        };
        w: {
            type: NumberConstructor;
            default: number;
        };
        h: {
            type: NumberConstructor;
            default: number;
        };
        x: {
            type: NumberConstructor;
            default: number;
        };
        y: {
            type: NumberConstructor;
            default: number;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        resizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledX: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledY: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledW: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledH: {
            type: BooleanConstructor;
            default: boolean;
        };
        minW: {
            type: NumberConstructor;
            default: number;
        };
        minH: {
            type: NumberConstructor;
            default: number;
        };
        maxW: {
            type: NumberConstructor;
            default: number;
        };
        maxH: {
            type: NumberConstructor;
            default: number;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        parent: {
            type: BooleanConstructor;
            default: boolean;
        };
        handles: {
            type: ArrayConstructor;
            default: import("./components/types").ResizingHandle[];
            validator: (handles: import("./components/types").ResizingHandle[]) => boolean;
        };
        classNameDraggable: {
            type: StringConstructor;
            default: string;
        };
        classNameResizable: {
            type: StringConstructor;
            default: string;
        };
        classNameDragging: {
            type: StringConstructor;
            default: string;
        };
        classNameResizing: {
            type: StringConstructor;
            default: string;
        };
        classNameActive: {
            type: StringConstructor;
            default: string;
        };
        classNameHandle: {
            type: StringConstructor;
            default: string;
        };
        lockAspectRatio: {
            type: BooleanConstructor;
            default: boolean;
        };
        parentScaleX: {
            type: NumberConstructor;
            default: number;
        };
        parentScaleY: {
            type: NumberConstructor;
            default: number;
        };
        triggerKey: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
        resizeHandleDown: (e: MouseEvent | TouchEvent, handleType: import("./components/types").ResizingHandle) => void;
        setWidth(val: number): number;
        setHeight(val: number): number;
        setTop(val: number): number;
        setLeft(val: number): number;
        minWidth: import("vue").ComputedRef<number>;
        minHeight: import("vue").ComputedRef<number>;
        maxWidth: import("vue").ComputedRef<number>;
        maxHeight: import("vue").ComputedRef<number>;
        minLeft: import("vue").ComputedRef<number>;
        minTop: import("vue").ComputedRef<number>;
        maxLeft: import("vue").ComputedRef<number>;
        maxTop: import("vue").ComputedRef<number>;
        parentWidth: import("vue").Ref<number>;
        parentHeight: import("vue").Ref<number>;
        id: string;
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
        top: import("vue").Ref<number>;
        left: import("vue").Ref<number>;
        enable: import("vue").Ref<boolean>;
        dragging: import("vue").Ref<boolean>;
        resizing: import("vue").Ref<boolean>;
        resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
        resizingMaxHeight: import("vue").Ref<number>;
        resizingMaxWidth: import("vue").Ref<number>;
        resizingMinWidth: import("vue").Ref<number>;
        resizingMinHeight: import("vue").Ref<number>;
        aspectRatio: import("vue").ComputedRef<number>;
        parentScaleX: import("vue").Ref<number>;
        parentScaleY: import("vue").Ref<number>;
        triggerKey: import("vue").Ref<"left" | "right">;
        setEnable: (value: boolean) => boolean;
        setDragging: (value: boolean) => boolean;
        setResizing: (value: boolean) => boolean;
        setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
        setResizingMaxHeight: (value: number) => number;
        setResizingMaxWidth: (value: number) => number;
        setResizingMinWidth: (value: number) => number;
        setResizingMinHeight: (value: number) => number;
        DSMsetWidth: (val: number) => number;
        DSMsetHeight: (val: number) => number;
        DSMsetTop: (val: number) => number;
        DSMsetLeft: (val: number) => number;
        containerRef: import("vue").Ref<HTMLElement>;
        containerProvider: import("./components/types").ContainerProvider;
    }> & {
        style: {
            [propName: string]: string;
        };
        klass: {
            [propName: string]: string | boolean;
        };
    } & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    initW: {
        type: NumberConstructor;
        default: any;
    };
    initH: {
        type: NumberConstructor;
        default: any;
    };
    w: {
        type: NumberConstructor;
        default: number;
    };
    h: {
        type: NumberConstructor;
        default: number;
    };
    x: {
        type: NumberConstructor;
        default: number;
    };
    y: {
        type: NumberConstructor;
        default: number;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledX: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledY: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledW: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledH: {
        type: BooleanConstructor;
        default: boolean;
    };
    minW: {
        type: NumberConstructor;
        default: number;
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    maxW: {
        type: NumberConstructor;
        default: number;
    };
    maxH: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: {
        type: BooleanConstructor;
        default: boolean;
    };
    handles: {
        type: ArrayConstructor;
        default: import("./components/types").ResizingHandle[];
        validator: (handles: import("./components/types").ResizingHandle[]) => boolean;
    };
    classNameDraggable: {
        type: StringConstructor;
        default: string;
    };
    classNameResizable: {
        type: StringConstructor;
        default: string;
    };
    classNameDragging: {
        type: StringConstructor;
        default: string;
    };
    classNameResizing: {
        type: StringConstructor;
        default: string;
    };
    classNameActive: {
        type: StringConstructor;
        default: string;
    };
    classNameHandle: {
        type: StringConstructor;
        default: string;
    };
    lockAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    parentScaleX: {
        type: NumberConstructor;
        default: number;
    };
    parentScaleY: {
        type: NumberConstructor;
        default: number;
    };
    triggerKey: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: (...args: any[]) => any;
}, {
    handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
    resizeHandleDown: (e: MouseEvent | TouchEvent, handleType: import("./components/types").ResizingHandle) => void;
    setWidth(val: number): number;
    setHeight(val: number): number;
    setTop(val: number): number;
    setLeft(val: number): number;
    minWidth: import("vue").ComputedRef<number>;
    minHeight: import("vue").ComputedRef<number>;
    maxWidth: import("vue").ComputedRef<number>;
    maxHeight: import("vue").ComputedRef<number>;
    minLeft: import("vue").ComputedRef<number>;
    minTop: import("vue").ComputedRef<number>;
    maxLeft: import("vue").ComputedRef<number>;
    maxTop: import("vue").ComputedRef<number>;
    parentWidth: import("vue").Ref<number>;
    parentHeight: import("vue").Ref<number>;
    id: string;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    top: import("vue").Ref<number>;
    left: import("vue").Ref<number>;
    enable: import("vue").Ref<boolean>;
    dragging: import("vue").Ref<boolean>;
    resizing: import("vue").Ref<boolean>;
    resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle>;
    resizingMaxHeight: import("vue").Ref<number>;
    resizingMaxWidth: import("vue").Ref<number>;
    resizingMinWidth: import("vue").Ref<number>;
    resizingMinHeight: import("vue").Ref<number>;
    aspectRatio: import("vue").ComputedRef<number>;
    parentScaleX: import("vue").Ref<number>;
    parentScaleY: import("vue").Ref<number>;
    triggerKey: import("vue").Ref<"left" | "right">;
    setEnable: (value: boolean) => boolean;
    setDragging: (value: boolean) => boolean;
    setResizing: (value: boolean) => boolean;
    setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
    setResizingMaxHeight: (value: number) => number;
    setResizingMaxWidth: (value: number) => number;
    setResizingMinWidth: (value: number) => number;
    setResizingMinHeight: (value: number) => number;
    DSMsetWidth: (val: number) => number;
    DSMsetHeight: (val: number) => number;
    DSMsetTop: (val: number) => number;
    DSMsetLeft: (val: number) => number;
    containerRef: import("vue").Ref<HTMLElement>;
    containerProvider: import("./components/types").ContainerProvider;
}, unknown, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    active: boolean;
    draggable: boolean;
    parent: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    parentScaleX: number;
    parentScaleY: number;
    triggerKey: string;
    resizable: boolean;
    initW: number;
    initH: number;
    disabledX: boolean;
    disabledY: boolean;
    disabledW: boolean;
    disabledH: boolean;
    minW: number;
    minH: number;
    maxW: number;
    maxH: number;
    handles: unknown[];
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
    lockAspectRatio: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]>;
export default _default;
