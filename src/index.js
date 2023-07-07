"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.DraggableContainer = void 0;
var Vue3DraggableResizable_1 = require("./components/Vue3DraggableResizable");
var DraggableContainer_1 = require("./components/DraggableContainer");
Vue3DraggableResizable_1["default"].install = function (app) {
    app.component(Vue3DraggableResizable_1["default"].name, Vue3DraggableResizable_1["default"]);
    app.component(DraggableContainer_1["default"].name, DraggableContainer_1["default"]);
    return app;
};
var DraggableContainer_2 = require("./components/DraggableContainer");
__createBinding(exports, DraggableContainer_2, "default", "DraggableContainer");
exports["default"] = Vue3DraggableResizable_1["default"];
