import React from "react";
import { Text } from "./components/index";
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { color: "secondary" }, "ths is my text"),
        React.createElement("div", { className: "bg-red-400" }, "asds")));
}
export default App;
