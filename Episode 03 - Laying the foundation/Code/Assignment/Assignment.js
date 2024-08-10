import React from "react";
import ReactDOM from "react-dom";

//1. nested header element using React.createElement
/*const header = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "This is assignment"),
        React.createElement("h2", {}, "of Episode 3"),
        React.createElement("h3", {}, "by Namaste React🚀")
    ]),
]);*/

//2. same element using JSX
/*const jsxHeading1 = (
    <div className="title">
        <h1>This is assignment</h1>
        <h2>of Episode 3</h2>
        <h3>by Namaste React🚀</h3>
    </div>
)*/

//3. functional component of  same with JSX
/*const Header = () => (
    <div className="title">
        <h1>This is assignment</h1>
        <h2>of Episode 3</h2>
        <h3>by Namaste React🚀</h3>
    </div>
)*/

//4. composition of components => adding a component inside another
const Component1 = () => (
    <h1 className="head" tabIndex={5}>
        Namaste React using JSX🚀
    </h1>
)
const Component2 = () => (
    <div id="container">
        <Component1 />
        <h1>Namaste React using functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component2 />);