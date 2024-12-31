// Creating an element;
// createElement has three params - 
// 1st : Type of element we want to create;
// 2nd : Attributes we need pass the function;
const heading = React.createElement("h1", {}, "Hello World How are you?");
// Created a root or getting a root where the above created element will be added;
// React Dom Used to render/create element inside the DOM of HTML.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Rendering/Placing the new element inside the root element;
root.render(heading);


// Multiple Sibling element;
const headingWithObj = React.createElement("h2", { className: "test" }, "test with attribute");
// We will be using array for that;
root.render([heading, headingWithObj])


// Nested Element;
const headingNested = React.createElement("h1", { id: "parent" }, [React.createElement("div", { id: "child" }, "I am Nested Child"), React.createElement("div", { id: "child2" }, "I am Nested Child 2")])


root.render([heading, headingWithObj, headingNested])

// We will be getting error in console -  Each child in a list should have a unique "key" prop;
// For now ignore it;