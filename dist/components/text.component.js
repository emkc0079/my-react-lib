import React from "react";
var Text = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, className = _a.className;
    var colorClass = getColorClass(color);
    var sizeClass = getSizeClass(size);
    return (React.createElement("p", { className: "text-".concat(colorClass, " text-").concat(sizeClass, " ").concat(className) }, children));
};
var getColorClass = function (color) {
    switch (color) {
        case "primary":
            return "blue-500";
        case "secondary":
            return "gray-700";
        case "error":
            return "red-500";
        case "success":
            return "green-500";
        default:
            return "blue-500"; // Default to primary
    }
};
var getSizeClass = function (size) {
    switch (size) {
        case "sm":
            return "text-sm";
        case "md":
            return "text-base";
        case "lg":
            return "text-lg";
        default:
            return "text-base"; // Default to medium
    }
};
export default Text;
