import React from "react";

export default function Alert(props) {
const capitalize = (word)=>{
  const lower = word.toLowerCase() ;
  return lower.charAt(0).toUpperCase() + lower.slice(1) ; 
}




  return (
   props.myalert &&
      <div className={`alert alert-${props.myalert.type} alert-dismissible fade show `}role="alert">
        <strong>{capitalize(props.myalert.type)}</strong> : {props.myalert.msg}
      </div>
   
  );
}
