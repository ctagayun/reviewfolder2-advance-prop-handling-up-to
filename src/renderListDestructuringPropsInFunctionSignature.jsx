import * as React from "react";

const RenderListDestructuringPropsInFunctionSignature = ({list}) => (
    //When we destruture props in the function signature we 
    //omit the function block body (meaning the return statement)
        <>
        <h2>Example of Destructuring Props in Function Signature</h2>
        <ul>
          {list.map( (item) => ( 
           <Item key={item.objectID} item={item} />
          ))}
        </ul>
      </>
    );
  
export default RenderListDestructuringPropsInFunctionSignature;


//Again When we destruture props in the function signature we 
//omit the function block body (meaning the return statement)
const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);