"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.ALL_HANDLES = void 0;
var vue_1 = require("vue");
var hooks_1 = require("./hooks");
require("./index.css");
var utils_1 = require("./utils");
exports.ALL_HANDLES = [
    'tl',
    'tm',
    'tr',
    'ml',
    'mr',
    'bl',
    'bm',
    'br'
];
var VdrProps = {
    initW: {
        type: Number,
        "default": null
    },
    initH: {
        type: Number,
        "default": null
    },
    w: {
        type: Number,
        "default": 0
    },
    h: {
        type: Number,
        "default": 0
    },
    x: {
        type: Number,
        "default": 0
    },
    y: {
        type: Number,
        "default": 0
    },
    draggable: {
        type: Boolean,
        "default": true
    },
    resizable: {
        type: Boolean,
        "default": true
    },
    disabledX: {
        type: Boolean,
        "default": false
    },
    disabledY: {
        type: Boolean,
        "default": false
    },
    disabledW: {
        type: Boolean,
        "default": false
    },
    disabledH: {
        type: Boolean,
        "default": false
    },
    minW: {
        type: Number,
        "default": 20
    },
    minH: {
        type: Number,
        "default": 20
    },
    maxW: {
        type: Number,
        "default": Infinity
    },
    maxH: {
        type: Number,
        "default": Infinity
    },
    active: {
        type: Boolean,
        "default": false
    },
    parent: {
        type: Boolean,
        "default": false
    },
    handles: {
        type: Array,
        "default": exports.ALL_HANDLES,
        validator: function (handles) {
            return (0, utils_1.filterHandles)(handles).length === handles.length;
        }
    },
    classNameDraggable: {
        type: String,
        "default": 'draggable'
    },
    classNameResizable: {
        type: String,
        "default": 'resizable'
    },
    classNameDragging: {
        type: String,
        "default": 'dragging'
    },
    classNameResizing: {
        type: String,
        "default": 'resizing'
    },
    classNameActive: {
        type: String,
        "default": 'active'
    },
    classNameHandle: {
        type: String,
        "default": 'handle'
    },
    lockAspectRatio: {
        type: Boolean,
        "default": false
    },
    parentScaleX: {
        type: Number,
        "default": 1
    },
    parentScaleY: {
        type: Number,
        "default": 1
    },
    triggerKey: {
        type: String,
        "default": 'left'
    }
};
var emits = [
    'activated',
    'deactivated',
    'drag-start',
    'resize-start',
    'dragging',
    'resizing',
    'drag-end',
    'resize-end',
    'update:w',
    'update:h',
    'update:x',
    'update:y',
    'update:active'
];
var VueDraggableResizable = (0, vue_1.defineComponent)({
    name: 'Vue3DraggableResizable',
    props: VdrProps,
    emits: emits,
    setup: function (props, _a) {
        var emit = _a.emit;
        var containerProps = (0, hooks_1.initState)(props, emit);
        var provideIdentity = (0, vue_1.inject)('identity');
        var containerProvider = null;
        if (provideIdentity === utils_1.IDENTITY) {
            containerProvider = {
                updatePosition: (0, vue_1.inject)('updatePosition'),
                getPositionStore: (0, vue_1.inject)('getPositionStore'),
                disabled: (0, vue_1.inject)('disabled'),
                adsorbParent: (0, vue_1.inject)('adsorbParent'),
                adsorbCols: (0, vue_1.inject)('adsorbCols'),
                adsorbRows: (0, vue_1.inject)('adsorbRows'),
                setMatchedLine: (0, vue_1.inject)('setMatchedLine')
            };
        }
        var containerRef = (0, vue_1.ref)();
        var parentSize = (0, hooks_1.initParent)(containerRef, props);
        var limitProps = (0, hooks_1.initLimitSizeAndMethods)(props, parentSize, containerProps);
        (0, hooks_1.initDraggableContainer)(containerRef, containerProps, limitProps, (0, vue_1.toRef)(props, 'draggable'), emit, containerProvider, parentSize);
        var resizeHandle = (0, hooks_1.initResizeHandle)(containerProps, limitProps, parentSize, props, emit);
        (0, hooks_1.watchProps)(props, limitProps);
        return __assign(__assign(__assign(__assign({ containerRef: containerRef, containerProvider: containerProvider }, containerProps), parentSize), limitProps), resizeHandle);
    },
    computed: {
        style: function () {
            return {
                width: this.width + 'px',
                height: this.height + 'px',
                top: this.top + 'px',
                left: this.left + 'px'
            };
        },
        klass: function () {
            var _a;
            return _a = {},
                _a[this.classNameActive] = this.enable,
                _a[this.classNameDragging] = this.dragging,
                _a[this.classNameResizing] = this.resizing,
                _a[this.classNameDraggable] = this.draggable,
                _a[this.classNameResizable] = this.resizable,
                _a;
        }
    },
    mounted: function () {
        if (!this.containerRef)
            return;
        this.containerRef.ondragstart = function () { return false; };
        var _a = (0, utils_1.getElSize)(this.containerRef), width = _a.width, height = _a.height;
        console.log(this.initW, this.w, width);
        this.setWidth(this.initW === null ? this.w || width : this.initW);
        this.setHeight(this.initH === null ? this.h || height : this.initH);
        if (this.containerProvider) {
            this.containerProvider.updatePosition(this.id, {
                x: this.left,
                y: this.top,
                w: this.width,
                h: this.height
            });
        }
    },
    render: function () {
        var _this = this;
        return (0, vue_1.h)('div', {
            ref: 'containerRef',
            "class": ['vdr-container', this.klass],
            style: this.style
        }, __spreadArray([
            this.$slots["default"] && this.$slots["default"]()
        ], this.handlesFiltered.map(function (item) {
            return (0, vue_1.h)('div', {
                "class": [
                    'vdr-handle',
                    'vdr-handle-' + item,
                    _this.classNameHandle,
                    "".concat(_this.classNameHandle, "-").concat(item)
                ],
                style: { display: _this.enable ? 'block' : 'none' },
                onMousedown: function (e) {
                    return _this.resizeHandleDown(e, item);
                },
                onTouchstart: function (e) {
                    return _this.resizeHandleDown(e, item);
                }
            });
        }), true));
    }
});
exports["default"] = VueDraggableResizable;
