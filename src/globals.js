import jquery from "jquery";
import React from "react";
import createReactClass from "create-react-class";
import reactDom from "react-dom";

window.React = React;
window.createReactClass = createReactClass;
window.ReactDOM = reactDom;
window.$ = window.jQuery = jquery;
