// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Search2 from './searchDestructuringPropsRightAway.jsx';
import Search from './searchBasicDestructuring.jsx';

import './App.css'

import RenderListDestructuringPropsInFunctionSignature from "./renderListDestructuringPropsInFunctionSignature.jsx";

//Declaration of App component
function App() {

  const welcome = {
     greeting: 'Hey',
     title: "Chito",
  };
  
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
 
  //What is Lifting State?
  //In this scenario the state is set in Search component. For some reason 
  //the App.jsx wants this state from Search component so that App.jsx
  //can use it to filter stories by their "title" property.
  //  1. One solution is to create another useState in App.jsx and capture 
  //     the arriving searchTerm from handle.search. But that would be a duplication
  //  2. The solution is to create the useState in App component instead of Search 
  //     component and pass the event to parent component (in this case App.jsx)
  //     by using the callback handler in the Search component.  
   
   const [searchTerm, setSearchTerm] = React.useState('React'); //init searchTerm with a value "React"

  //====================================
  //  Consider this handler as "A".  "A" gets introduced as event handler
  //  It is passed as function in props to another component (in this case
  //  Search component(B). "A" is executed there as handler "C", and 
  //  calls back to the place it was introduced (D):
  //====================================
  const handleSearch = (event) => {
  //The implementation of the callback function is in App component.
  //"Event" this is the value the was passed by the Search component to the 
  //parent component App. When you type Tochi in the search input field
  //the target.value is "Tochi" is passed to the parent component. 
  // (D")
  console.log(`Callback handler defined in app.jsx is called. Event passed in by Search 
              component to parent in this case App component via  
              Callback handleChange is = ' ${event.target.value} `);
  setSearchTerm(event.target.value); //update state hook variable in this case "searchTerm"
}

  //this will filter the stories displayed as the user enters 
  //something in the search box in the Search component

  //The JavaScript array's built-in filter method is used to create a 
  //new filtered array. The filter() method takes a function as 
  //an argument, which accesses each item in the array and returns
  // true or false. If the function returns true, meaning the condition is met, 
  //the item stays in the newly created array; if the function returns false,
  //it's removed:
  //const searchedStories = stories.filter(function (story) {
  //  return story.title.includes(searchTerm);
  //});

  //filter() is a method of an object. In this case stories. 
  //It could be made more concise by using an 
  //arrow function with an immediate return. The searchTerm could be case sensitive.
  //To make it work,  fix this problem yourself by making the filter() method's 
  //condition case insensitive. so convert everything to lower case.
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
       <h1> 
          {welcome.greeting} {welcome.title}
      </h1>
       
       {/* // B - Pass in a callback handler as prop to search component*/}
       <Search search={searchTerm} onSearch={handleSearch} />; 
       {/* <Search2 search={searchTerm} onSearch={handleSearch} />;  */}

       <hr/>

       <RenderListDestructuringPropsInFunctionSignature list={searchedStories} />
        
    </div>
  )
}

export default App
