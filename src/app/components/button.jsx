import React from 'react';
const ButtonCustom = ({color, value}) => {
    return (<div style={{backgroundColor:color}} className='header-button'>
        {value}
    </div>)
}

export default ButtonCustom