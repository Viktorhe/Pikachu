import React from 'react';
import Lists from './lists'

const Containers = ({props_list, datas}) => {
    // let json = [{
    //     id: 1,
    //     title: 'Kelas 1',
    //     content1: 'ini bukan apa apa',
    //     content2: 'ini bukan siapa siapa'
    // }, {
    //     id: 2,
    //     title: 'Kelas 2',
    //     content1: 'ini bukan apa apa',
    //     content2: 'ini bukan siapa siapa'
    // }, {
    //     id: 3,
    //     title: 'Kelas 3',
    //     content1: 'ini bukan apa apa',
    //     content2: 'ini bukan siapa siapa'
    // }, {
    //     id: 3,
    //     title: 'Kelas 3',
    //     content1: 'ini bukan apa apa',
    //     content2: 'ini bukan siapa siapa'
    // }]
    
    let json_filter = datas.filter(e => e.name.toLowerCase().includes(props_list))
    return (
        <div>
            <div className='container'>   
                <Lists
                    maping={json_filter}
                />
            </div>
        </div>
    )
}

export default Containers