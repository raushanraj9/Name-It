import React,{useState} from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultContainer from "../ResultContainer/ResultContainer"

const name=require('@rstacruz/startup-name-generator');
function App() {
  const state={
    headertitle:"Name It!",
    // handleChange:true,
  }
  const [handleChange,setChange]=useState(true);
  const [suggestName,setSuggestName]=useState([]);

  const HandleInputChnage=(inputtext)=>
  {
    setChange((handleChange)=>!inputtext)
    setSuggestName((suggestName)=> inputtext?name(inputtext):[]);
    
  }

  return (

   <div>
    <Header headtit={state.headertitle} handleChange={handleChange}/>
    <SearchBox  HandleInputChange={HandleInputChnage}/>
    <ResultContainer suggestName={suggestName}/>
   </div>
  );
}

export default App;
