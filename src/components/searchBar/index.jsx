import React from 'react';

export default (props)=>{
    const termHandler =(event)=>{
        props.handler(event.target.value)
    }
    return(
        <input style={{textAlign:"center", marginLeft:"0", marginRight:"0"}} className="form-control form-control-lg" value={props.term} onChange={termHandler} type="text" placeholder="username"/>
    )
}