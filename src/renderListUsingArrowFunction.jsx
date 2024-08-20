import * as React from "react";

const RenderListUsingArrowFunction = (props) => {
  //Note: all function components by convention receive "props" even 
  //if the function doesn't have the param "props 
    return (
        <>
        <h2>Printed by JS Arrow Function</h2>
        <ul>
          {props.list.map( (item) => {  //Using JS Arrow
            return (
              <li key={item.objectID}>
                 <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </li> 
            ) 
           })}
        </ul>
      </>

    );

};
export default RenderListUsingArrowFunction;