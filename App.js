import React from "react";
// 1. Correct import for React 18's client-side rendering APIs
import { createRoot } from "react-dom/client";

// Create the first element
const Reactelement = React.createElement(
    "h1",
    { id: "heading" },
    "Hello"
);

// Create the second element
const NewReactElement = React.createElement(
    "h1",
    null, // No props needed for this one
    "Hello I'm h1 tag "
);

// Create the nested parent structure
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        // 2. Add unique "key" props when creating an array of elements
        [
            React.cloneElement(Reactelement, { key: "elem1" }),
            React.cloneElement(NewReactElement, { key: "elem2" })
        ]
    )
);

// 3. Get the container and create the root
const container = document.getElementById("root");
const root = createRoot(container);

// 4. Render the final parent element just once
root.render(parent);