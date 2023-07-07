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
exports.__esModule = true;
exports.watchProps = exports.initResizeHandle = exports.initDraggableContainer = exports.initLimitSizeAndMethods = exports.initParent = exports.initState = exports.useState = void 0;
var vue_1 = require("vue");
var utils_1 = require("./utils");
function useState(initialState) {
    var state = (0, vue_1.ref)(initialState);
    var setState = function (value) {
        state.value = value;
        return value;
    };
    return [state, setState];
}
exports.useState = useState;
function initState(props, emit) {
    var _a = useState(props.w !== 0 ? props.w : props.initW), width = _a[0], setWidth = _a[1];
    var _b = useState(props.h !== 0 ? props.h : props.initH), height = _b[0], setHeight = _b[1];
    var _c = useState(props.x), left = _c[0], setLeft = _c[1];
    var _d = useState(props.y), top = _d[0], setTop = _d[1];
    var _e = useState(props.active), enable = _e[0], setEnable = _e[1];
    var _f = useState(false), dragging = _f[0], setDragging = _f[1];
    var _g = useState(false), resizing = _g[0], setResizing = _g[1];
    var _h = useState(''), resizingHandle = _h[0], setResizingHandle = _h[1];
    var _j = useState(props.maxW), resizingMaxWidth = _j[0], setResizingMaxWidth = _j[1];
    var _k = useState(props.maxH), resizingMaxHeight = _k[0], setResizingMaxHeight = _k[1];
    var _l = useState(props.minW), resizingMinWidth = _l[0], setResizingMinWidth = _l[1];
    var _m = useState(props.minH), resizingMinHeight = _m[0], setResizingMinHeight = _m[1];
    var _o = useState(props.parentScaleX), parentScaleX = _o[0], setParentScaleX = _o[1];
    var _p = useState(props.parentScaleY), parentScaleY = _p[0], setParentScaleY = _p[1];
    var _q = useState(props.triggerKey), triggerKey = _q[0], setTriggerKey = _q[1];
    var aspectRatio = (0, vue_1.computed)(function () { return height.value / width.value; });
    (0, vue_1.watch)(width, function (newVal) {
        emit('update:w', newVal);
    }, { immediate: true });
    (0, vue_1.watch)(height, function (newVal) {
        emit('update:h', newVal);
    }, { immediate: true });
    (0, vue_1.watch)(top, function (newVal) {
        emit('update:y', newVal);
    });
    (0, vue_1.watch)(left, function (newVal) {
        emit('update:x', newVal);
    });
    (0, vue_1.watch)(enable, function (newVal, oldVal) {
        emit('update:active', newVal);
        if (!oldVal && newVal) {
            emit('activated');
        }
        else if (oldVal && !newVal) {
            emit('deactivated');
        }
    });
    (0, vue_1.watch)(function () { return props.active; }, function (newVal) {
        setEnable(newVal);
    });
    (0, vue_1.watch)(function () { return props.parentScaleX; }, function () {
        setParentScaleX(props.parentScaleX);
    });
    (0, vue_1.watch)(function () { return props.parentScaleY; }, function () {
        setParentScaleY(props.parentScaleY);
    });
    (0, vue_1.watch)(function () { return props.triggerKey; }, function () {
        setTriggerKey(props.triggerKey);
    });
    return {
        id: (0, utils_1.getId)(),
        width: width,
        height: height,
        top: top,
        left: left,
        enable: enable,
        dragging: dragging,
        resizing: resizing,
        resizingHandle: resizingHandle,
        resizingMaxHeight: resizingMaxHeight,
        resizingMaxWidth: resizingMaxWidth,
        resizingMinWidth: resizingMinWidth,
        resizingMinHeight: resizingMinHeight,
        aspectRatio: aspectRatio,
        parentScaleX: parentScaleX,
        parentScaleY: parentScaleY,
        triggerKey: triggerKey,
        setEnable: setEnable,
        setDragging: setDragging,
        setResizing: setResizing,
        setResizingHandle: setResizingHandle,
        setResizingMaxHeight: setResizingMaxHeight,
        setResizingMaxWidth: setResizingMaxWidth,
        setResizingMinWidth: setResizingMinWidth,
        setResizingMinHeight: setResizingMinHeight,
        DSMsetWidth: function (val) { return setWidth(Math.floor(val)); },
        DSMsetHeight: function (val) { return setHeight(Math.floor(val)); },
        DSMsetTop: function (val) { return setTop(Math.floor(val)); },
        DSMsetLeft: function (val) { return setLeft(Math.floor(val)); }
    };
}
exports.initState = initState;
function initParent(containerRef, props) {
    var parentWidth = (0, vue_1.ref)(0);
    var parentHeight = (0, vue_1.ref)(0);
    (0, vue_1.onMounted)(function () {
        (0, vue_1.watch)(function () { return props.parent; }, function (newVal) {
            if (newVal && containerRef.value && containerRef.value.parentElement) {
                var _a = (0, utils_1.getElSize)(containerRef.value.parentElement), width = _a.width, height = _a.height;
                parentWidth.value = width;
                parentHeight.value = height;
            }
        }, { immediate: true });
    });
    return {
        parentWidth: parentWidth,
        parentHeight: parentHeight
    };
}
exports.initParent = initParent;
function initLimitSizeAndMethods(props, parentSize, containerProps) {
    var width = containerProps.width, height = containerProps.height, left = containerProps.left, top = containerProps.top, resizingMaxWidth = containerProps.resizingMaxWidth, resizingMaxHeight = containerProps.resizingMaxHeight, resizingMinWidth = containerProps.resizingMinWidth, resizingMinHeight = containerProps.resizingMinHeight;
    var DSMsetWidth = containerProps.DSMsetWidth, DSMsetHeight = containerProps.DSMsetHeight, DSMsetTop = containerProps.DSMsetTop, DSMsetLeft = containerProps.DSMsetLeft;
    var parentWidth = parentSize.parentWidth, parentHeight = parentSize.parentHeight;
    var limitProps = {
        minWidth: (0, vue_1.computed)(function () {
            return resizingMinWidth.value;
        }),
        minHeight: (0, vue_1.computed)(function () {
            return resizingMinHeight.value;
        }),
        maxWidth: (0, vue_1.computed)(function () {
            var max = resizingMaxWidth.value;
            if (props.parent) {
                max = Math.min(parentWidth.value, resizingMaxWidth.value);
            }
            return max;
        }),
        maxHeight: (0, vue_1.computed)(function () {
            var max = resizingMaxHeight.value;
            if (props.parent) {
                max = Math.min(parentHeight.value, resizingMaxHeight.value);
            }
            return max;
        }),
        minLeft: (0, vue_1.computed)(function () {
            return props.parent ? 0 : -Infinity;
        }),
        minTop: (0, vue_1.computed)(function () {
            return props.parent ? 0 : -Infinity;
        }),
        maxLeft: (0, vue_1.computed)(function () {
            return props.parent ? parentWidth.value - width.value : Infinity;
        }),
        maxTop: (0, vue_1.computed)(function () {
            return props.parent ? parentHeight.value - height.value : Infinity;
        })
    };
    var limitMethods = {
        setWidth: function (val) {
            if (props.disabledW) {
                return width.value;
            }
            console.log("SET WIDTH", val, limitProps.maxWidth.value, limitProps.minWidth.value);
            return DSMsetWidth(Math.min(limitProps.maxWidth.value, Math.max(limitProps.minWidth.value, val)));
        },
        setHeight: function (val) {
            if (props.disabledH) {
                return height.value;
            }
            return DSMsetHeight(Math.min(limitProps.maxHeight.value, Math.max(limitProps.minHeight.value, val)));
        },
        setTop: function (val) {
            if (props.disabledY) {
                return top.value;
            }
            return DSMsetTop(Math.min(limitProps.maxTop.value, Math.max(limitProps.minTop.value, val)));
        },
        setLeft: function (val) {
            if (props.disabledX) {
                return left.value;
            }
            return DSMsetLeft(Math.min(limitProps.maxLeft.value, Math.max(limitProps.minLeft.value, val)));
        }
    };
    return __assign(__assign({}, limitProps), limitMethods);
}
exports.initLimitSizeAndMethods = initLimitSizeAndMethods;
var DOWN_HANDLES = ['mousedown', 'touchstart'];
var UP_HANDLES = ['mouseup', 'touchend'];
var MOVE_HANDLES = ['mousemove', 'touchmove'];
function getPosition(e) {
    if ('touches' in e) {
        return [e.touches[0].pageX, e.touches[0].pageY];
    }
    else {
        return [e.pageX, e.pageY];
    }
}
function initDraggableContainer(containerRef, containerProps, limitProps, draggable, emit, containerProvider, parentSize) {
    var x = containerProps.left, y = containerProps.top, w = containerProps.width, h = containerProps.height, dragging = containerProps.dragging, id = containerProps.id;
    var setDragging = containerProps.setDragging, setEnable = containerProps.setEnable, setResizing = containerProps.setResizing, setResizingHandle = containerProps.setResizingHandle, parentScaleX = containerProps.parentScaleX, parentScaleY = containerProps.parentScaleY, triggerKey = containerProps.triggerKey;
    var setTop = limitProps.setTop, setLeft = limitProps.setLeft;
    var lstX = 0;
    var lstY = 0;
    var lstPageX = 0;
    var lstPageY = 0;
    var referenceLineMap = null;
    var documentElement = document.documentElement;
    var DSMunselect = function (e) {
        var _a;
        var target = e.target;
        if (!((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(target))) {
            setEnable(false);
            setDragging(false);
            setResizing(false);
            setResizingHandle('');
        }
    };
    var handleUp = function () {
        setDragging(false);
        // document.documentElement.removeEventListener('mouseup', handleUp)
        // document.documentElement.removeEventListener('mousemove', handleDrag)
        (0, utils_1.removeEvent)(documentElement, UP_HANDLES, handleUp);
        (0, utils_1.removeEvent)(documentElement, MOVE_HANDLES, handleDrag);
        referenceLineMap = null;
        if (containerProvider) {
            containerProvider.updatePosition(id, {
                x: x.value,
                y: y.value,
                w: w.value,
                h: h.value
            });
            containerProvider.setMatchedLine(null);
        }
    };
    var handleDrag = function (e) {
        e.preventDefault();
        var trigger = triggerKey.value == 'right' ? 3 : 1;
        if (trigger != e.which) {
            return;
        }
        if (!(dragging.value && containerRef.value))
            return;
        var _a = getPosition(e), pageX = _a[0], pageY = _a[1];
        var deltaX = (pageX - lstPageX) / parentScaleX.value;
        var deltaY = (pageY - lstPageY) / parentScaleY.value;
        var newLeft = lstX + deltaX;
        var newTop = lstY + deltaY;
        if (referenceLineMap !== null) {
            var widgetSelfLine = {
                col: [newLeft, newLeft + w.value / 2, newLeft + w.value],
                row: [newTop, newTop + h.value / 2, newTop + h.value]
            };
            var matchedLine = {
                row: widgetSelfLine.row
                    .map(function (i, index) {
                    var match = null;
                    Object.values(referenceLineMap.row).forEach(function (referItem) {
                        if (i >= referItem.min && i <= referItem.max) {
                            match = referItem.value;
                        }
                    });
                    if (match !== null) {
                        if (index === 0) {
                            newTop = match;
                        }
                        else if (index === 1) {
                            newTop = Math.floor(match - h.value / 2);
                        }
                        else if (index === 2) {
                            newTop = Math.floor(match - h.value);
                        }
                    }
                    return match;
                })
                    .filter(function (i) { return i !== null; }),
                col: widgetSelfLine.col
                    .map(function (i, index) {
                    var match = null;
                    Object.values(referenceLineMap.col).forEach(function (referItem) {
                        if (i >= referItem.min && i <= referItem.max) {
                            match = referItem.value;
                        }
                    });
                    if (match !== null) {
                        if (index === 0) {
                            newLeft = match;
                        }
                        else if (index === 1) {
                            newLeft = Math.floor(match - w.value / 2);
                        }
                        else if (index === 2) {
                            newLeft = Math.floor(match - w.value);
                        }
                    }
                    return match;
                })
                    .filter(function (i) { return i !== null; })
            };
            containerProvider.setMatchedLine(matchedLine);
        }
        emit('dragging', { x: setLeft(newLeft), y: setTop(newTop) });
    };
    var handleDown = function (e) {
        if (!draggable.value)
            return;
        setDragging(true);
        lstX = x.value;
        lstY = y.value;
        lstPageX = getPosition(e)[0];
        lstPageY = getPosition(e)[1];
        // document.documentElement.addEventListener('mousemove', handleDrag)
        // document.documentElement.addEventListener('mouseup', handleUp)
        (0, utils_1.addEvent)(documentElement, MOVE_HANDLES, handleDrag);
        (0, utils_1.addEvent)(documentElement, UP_HANDLES, handleUp);
        if (containerProvider && !containerProvider.disabled.value) {
            referenceLineMap = (0, utils_1.getReferenceLineMap)(containerProvider, parentSize, id);
        }
    };
    (0, vue_1.watch)(dragging, function (cur, pre) {
        if (!pre && cur) {
            emit('drag-start', { x: x.value, y: y.value });
            setEnable(true);
            setDragging(true);
        }
        else {
            emit('drag-end', { x: x.value, y: y.value });
            setDragging(false);
        }
    });
    (0, vue_1.onMounted)(function () {
        var el = containerRef.value;
        if (!el)
            return;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        // document.documentElement.addEventListener('mousedown', DSMunselect)
        // el.addEventListener('mousedown', handleDown)
        (0, utils_1.addEvent)(documentElement, DOWN_HANDLES, DSMunselect);
        (0, utils_1.addEvent)(el, DOWN_HANDLES, handleDown);
    });
    (0, vue_1.onUnmounted)(function () {
        if (!containerRef.value)
            return;
        // document.documentElement.removeEventListener('mousedown', DSMunselect)
        // document.documentElement.removeEventListener('mouseup', handleUp)
        // document.documentElement.removeEventListener('mousemove', handleDrag)
        (0, utils_1.removeEvent)(documentElement, DOWN_HANDLES, DSMunselect);
        (0, utils_1.removeEvent)(documentElement, UP_HANDLES, handleUp);
        (0, utils_1.removeEvent)(documentElement, MOVE_HANDLES, handleDrag);
    });
    return { containerRef: containerRef };
}
exports.initDraggableContainer = initDraggableContainer;
function initResizeHandle(containerProps, limitProps, parentSize, props, emit) {
    var setWidth = limitProps.setWidth, setHeight = limitProps.setHeight, setLeft = limitProps.setLeft, setTop = limitProps.setTop;
    var width = containerProps.width, height = containerProps.height, left = containerProps.left, top = containerProps.top, aspectRatio = containerProps.aspectRatio;
    var setResizing = containerProps.setResizing, setResizingHandle = containerProps.setResizingHandle, setResizingMaxWidth = containerProps.setResizingMaxWidth, setResizingMaxHeight = containerProps.setResizingMaxHeight, setResizingMinWidth = containerProps.setResizingMinWidth, setResizingMinHeight = containerProps.setResizingMinHeight;
    var parentWidth = parentSize.parentWidth, parentHeight = parentSize.parentHeight;
    var lstW = 0;
    var lstH = 0;
    var lstX = 0;
    var lstY = 0;
    var lstPageX = 0;
    var lstPageY = 0;
    var tmpAspectRatio = 1;
    var idx0 = '';
    var idx1 = '';
    var documentElement = document.documentElement;
    var resizeHandleDrag = function (e) {
        e.preventDefault();
        var _a = getPosition(e), DSMpageX = _a[0], DSMpageY = _a[1];
        var deltaX = DSMpageX - lstPageX;
        var deltaY = DSMpageY - lstPageY;
        var DSMdeltaX = deltaX;
        var DSMdeltaY = deltaY;
        if (props.lockAspectRatio) {
            deltaX = Math.abs(deltaX);
            deltaY = deltaX * tmpAspectRatio;
            if (idx0 === 't') {
                if (DSMdeltaX < 0 || (idx1 === 'm' && DSMdeltaY < 0)) {
                    deltaX = -deltaX;
                    deltaY = -deltaY;
                }
            }
            else {
                if (DSMdeltaX < 0 || (idx1 === 'm' && DSMdeltaY < 0)) {
                    deltaX = -deltaX;
                    deltaY = -deltaY;
                }
            }
        }
        if (idx0 === 't') {
            setHeight(lstH - deltaY);
            setTop(lstY - (height.value - lstH));
        }
        else if (idx0 === 'b') {
            setHeight(lstH + deltaY);
        }
        if (idx1 === 'l') {
            setWidth(lstW - deltaX);
            setLeft(lstX - (width.value - lstW));
        }
        else if (idx1 === 'r') {
            setWidth(lstW + deltaX);
        }
        emit('resizing', {
            x: left.value,
            y: top.value,
            w: width.value,
            h: height.value
        });
    };
    var resizeHandleUp = function () {
        emit('resize-end', {
            x: left.value,
            y: top.value,
            w: width.value,
            h: height.value
        });
        setResizingHandle('');
        setResizing(false);
        setResizingMaxWidth(props.maxW);
        setResizingMaxHeight(props.maxH);
        setResizingMinWidth(props.minW);
        setResizingMinHeight(props.minH);
        // document.documentElement.removeEventListener('mousemove', resizeHandleDrag)
        // document.documentElement.removeEventListener('mouseup', resizeHandleUp)
        (0, utils_1.removeEvent)(documentElement, MOVE_HANDLES, resizeHandleDrag);
        (0, utils_1.removeEvent)(documentElement, UP_HANDLES, resizeHandleUp);
    };
    var resizeHandleDown = function (e, handleType) {
        if (!props.resizable)
            return;
        e.stopPropagation();
        setResizingHandle(handleType);
        setResizing(true);
        idx0 = handleType[0];
        idx1 = handleType[1];
        if (aspectRatio.value) {
            if (['tl', 'tm', 'ml', 'bl'].includes(handleType)) {
                idx0 = 't';
                idx1 = 'l';
            }
            else {
                idx0 = 'b';
                idx1 = 'r';
            }
        }
        var minHeight = props.minH;
        var minWidth = props.minW;
        if (minHeight / minWidth > aspectRatio.value) {
            minWidth = minHeight / aspectRatio.value;
        }
        else {
            minHeight = minWidth * aspectRatio.value;
        }
        setResizingMinWidth(minWidth);
        setResizingMinHeight(minHeight);
        if (parent) {
            var maxHeight = idx0 === 't' ? top.value + height.value : parentHeight.value - top.value;
            var maxWidth = idx1 === 'l' ? left.value + width.value : parentWidth.value - left.value;
            if (props.lockAspectRatio) {
                if (maxHeight / maxWidth < aspectRatio.value) {
                    maxWidth = maxHeight / aspectRatio.value;
                }
                else {
                    maxHeight = maxWidth * aspectRatio.value;
                }
            }
            setResizingMaxHeight(Math.min(maxHeight, props.maxH));
            setResizingMaxWidth(Math.min(maxWidth, props.maxW));
        }
        lstW = width.value;
        lstH = height.value;
        lstX = left.value;
        lstY = top.value;
        var lstPagePosition = getPosition(e);
        lstPageX = lstPagePosition[0];
        lstPageY = lstPagePosition[1];
        tmpAspectRatio = aspectRatio.value;
        emit('resize-start', {
            x: left.value,
            y: top.value,
            w: width.value,
            h: height.value
        });
        // document.documentElement.addEventListener('mousemove', resizeHandleDrag)
        // document.documentElement.addEventListener('mouseup', resizeHandleUp)
        (0, utils_1.addEvent)(documentElement, MOVE_HANDLES, resizeHandleDrag);
        (0, utils_1.addEvent)(documentElement, UP_HANDLES, resizeHandleUp);
    };
    (0, vue_1.onUnmounted)(function () {
        // document.documentElement.removeEventListener('mouseup', resizeHandleDrag)
        // document.documentElement.removeEventListener('mousemove', resizeHandleUp)
        (0, utils_1.removeEvent)(documentElement, UP_HANDLES, resizeHandleUp);
        (0, utils_1.removeEvent)(documentElement, MOVE_HANDLES, resizeHandleDrag);
    });
    var handlesFiltered = (0, vue_1.computed)(function () {
        return props.resizable ? (0, utils_1.filterHandles)(props.handles) : [];
    });
    return {
        handlesFiltered: handlesFiltered,
        resizeHandleDown: resizeHandleDown
    };
}
exports.initResizeHandle = initResizeHandle;
function watchProps(props, limits) {
    var setWidth = limits.setWidth, setHeight = limits.setHeight, setLeft = limits.setLeft, setTop = limits.setTop;
    (0, vue_1.watch)(function () { return props.w; }, function (newVal) {
        setWidth(newVal);
    });
    (0, vue_1.watch)(function () { return props.h; }, function (newVal) {
        setHeight(newVal);
    });
    (0, vue_1.watch)(function () { return props.x; }, function (newVal) {
        setLeft(newVal);
    });
    (0, vue_1.watch)(function () { return props.y; }, function (newVal) {
        setTop(newVal);
    });
}
exports.watchProps = watchProps;
