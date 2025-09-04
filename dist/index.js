'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

var ColorfulButton = function (_a) {
    _a.initialColor; _a.hoverColor; var onClick = _a.onClick, children = _a.children, _d = _a.className, className = _d === void 0 ? '' : _d;
    var _e = react.useState(false), isHovered = _e[0], setIsHovered = _e[1];
    var _f = react.useState(0), clickCount = _f[0], setClickCount = _f[1];
    var colors = [
        '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b',
        '#eb4d4b', '#6ab04c', '#7ed6df', '#e056fd', '#686de0'
    ];
    var handleClick = function () {
        setClickCount(function (prev) { return prev + 1; });
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    var currentColor = colors[clickCount % colors.length];
    var buttonStyle = {
        backgroundColor: currentColor,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
    };
    return (jsxRuntime.jsx("button", { style: buttonStyle, onClick: handleClick, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, className: className, children: children }));
};

exports.ColorfulButton = ColorfulButton;
