import React from 'react';
const InputCustom = ({name_attr, value_attr, props_input}) => {
    console.log('INI ADA YA BRO',name_attr)
    return (
        <input 
        onChange={(e) => props_input(e.target.value)} 
        name={name_attr} 
        defaultValue="" 
        placeholder={value_attr}></input>
    )
}

export default InputCustom