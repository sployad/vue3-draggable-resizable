"use strict";
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
var vue_1 = require("vue");
var utils_1 = require("./utils");
exports["default"] = (0, vue_1.defineComponent)({
    name: 'DraggableContainer',
    props: {
        disabled: {
            type: Boolean,
            "default": false
        },
        adsorbParent: {
            type: Boolean,
            "default": true
        },
        adsorbCols: {
            type: Array,
            "default": null
        },
        adsorbRows: {
            type: Array,
            "default": null
        },
        referenceLineVisible: {
            type: Boolean,
            "default": true
        },
        referenceLineColor: {
            type: String,
            "default": '#f00'
        }
    },
    setup: function (props) {
        var positionStore = (0, vue_1.reactive)({});
        var updatePosition = function (id, position) {
            positionStore[id] = position;
        };
        var getPositionStore = function (excludeId) {
            var _positionStore = Object.assign({}, positionStore);
            if (excludeId) {
                delete _positionStore[excludeId];
            }
            return _positionStore;
        };
        var state = (0, vue_1.reactive)({
            matchedLine: null
        });
        var matchedRows = (0, vue_1.computed)(function () { return (state.matchedLine && state.matchedLine.row) || []; });
        var matchedCols = (0, vue_1.computed)(function () { return (state.matchedLine && state.matchedLine.col) || []; });
        var setMatchedLine = function (matchedLine) {
            state.matchedLine = matchedLine;
        };
        (0, vue_1.provide)('identity', utils_1.IDENTITY);
        (0, vue_1.provide)('updatePosition', updatePosition);
        (0, vue_1.provide)('getPositionStore', getPositionStore);
        (0, vue_1.provide)('setMatchedLine', setMatchedLine);
        (0, vue_1.provide)('disabled', (0, vue_1.toRef)(props, 'disabled'));
        (0, vue_1.provide)('adsorbParent', (0, vue_1.toRef)(props, 'adsorbParent'));
        (0, vue_1.provide)('adsorbCols', props.adsorbCols || []);
        (0, vue_1.provide)('adsorbRows', props.adsorbRows || []);
        return {
            matchedRows: matchedRows,
            matchedCols: matchedCols
        };
    },
    methods: {
        renderReferenceLine: function () {
            var _this = this;
            if (!this.referenceLineVisible) {
                return [];
            }
            return __spreadArray(__spreadArray([], this.matchedCols.map(function (item) {
                return (0, vue_1.h)('div', {
                    style: {
                        width: '0',
                        height: '100%',
                        top: '0',
                        left: item + 'px',
                        borderLeft: "1px dashed ".concat(_this.referenceLineColor),
                        position: 'absolute'
                    }
                });
            }), true), this.matchedRows.map(function (item) {
                return (0, vue_1.h)('div', {
                    style: {
                        width: '100%',
                        height: '0',
                        left: '0',
                        top: item + 'px',
                        borderTop: "1px dashed ".concat(_this.referenceLineColor),
                        position: 'absolute'
                    }
                });
            }), true);
        }
    },
    render: function () {
        return (0, vue_1.h)('div', {
            style: { width: '100%', height: '100%', position: 'relative' }
        }, __spreadArray([
            this.$slots["default"] && this.$slots["default"]()
        ], this.renderReferenceLine(), true));
    }
});
