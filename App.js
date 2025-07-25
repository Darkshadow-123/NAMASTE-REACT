
// element attribute value 

//react element or a javascript object is created
const Reactelement = React.createElement(
    "h1" , 
    {
        id:"heading"
    } , 
    "Hello"
);
console.log(Reactelement); //object

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(Reactelement);//convert object into a tag

///////////////////////
/*

<div id="parent">

   <div id="child">
    <h1>Hi I'm h1 tag </h1>
   </div>

</div>

*/
const NewReactElement = React.createElement(
            "h1",
            {
                
            },
            "Hi I'm h1 tag "
        )

const parent =React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [Reactelement,NewReactElement]//siblings inside child div //in an array
    )
);
//react.development.js:199  Warning: Each child in a list should have a unique "key" prop.


root.render(parent);
console.log(parent);
