import React from "react"; 
import { createRoot } from "react-dom/client";

// // Create the first element
// const Reactelement = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello"
// );

// // Create the second element
// const NewReactElement = React.createElement(
//     "h1",
//     null, // No props needed for this one
//     "Hello I'm h1 tag "
// );

// // Create the nested parent structure
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         // 2. Add unique "key" props when creating an array of elements
//         [
//             React.cloneElement(Reactelement, { key: "elem1" }),
//             React.cloneElement(NewReactElement, { key: "elem2" })
//         ]
//     )
// );

// // 3. Get the container and create the root
// const container = document.getElementById("root");
// const root = createRoot(container);

// // 4. Render the final parent element just once
// root.render(parent);

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World"
// );
// console.log(heading);


//react element // javascript object

const jsxheading =(
<h3 id="jsxheading">Hello World Using JSX Object</h3>
);

//component compositin shoving one component in another
//functional Component
//subheading component
const SubHeading = ()=>{
    return <h2>Sub Heading Component Shoved inside Heading Component</h2>
}


//capital letters name
const HeadingComponent=()=>{
    return <div>
    <h1 className="heading">YO BOI Created First Functional Component</h1>
    <SubHeading/>  

    {300+400}

    {jsxheading}

    </div>
}
//javascript inside { } braces 

const root=createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
