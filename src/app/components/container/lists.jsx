import React from 'react';
import ButtonCustom from '../button'


const Lists = ({maping}) => {
    if (maping.length === 0) {
        return (
            <div className='lists-card'>
                <div className='list-card'>
                    Loading...
                </div>
                <div className='list-card'>
                    Loading...
                </div>
                <div className='list-card'>
                    Loading...
                </div>
            </div>
        )
    } else {
        return (
            <div className='lists-card'>
                {maping.map((item, idx) => {
                    return (
                        <div key={idx} className='list-card'>
                            <div>{item.name}</div>
                            <div>{item.hair_color}</div>
                            <div>{item.birth_year}</div>
                            <div>Button {item.id}</div>
                            <ButtonCustom
                                color='green'
                                value={`Button ${item.id}`}
                            />
                        </div>       
                    )
                })}
            </div>
        )
    }
}

export default Lists