import React from 'react';

const Pagination = ({totalRecords, currentPage = 1, recordsPerPage = 10, changePage}) => {
    let totalPage = Math.ceil(totalRecords / recordsPerPage);
    let arrayPage = []
    for(let i=0;i< totalPage; i++){
        arrayPage.push(i+1);
    }
    return(
        <div className='pagination'>
        {
            arrayPage.map(
                (item, idx) => {
                    let disabled = (item === currentPage)
                    let className = 'pagination-button' 
                    if(disabled) className = 'pagination-button-selected' 
                    return (
                        <button key={idx} 
                        disabled={disabled} 
                        className={className}
                        value={item}
                        onClick={
                            (e) => changePage(e.target.value)
                        }>
                            {item}
                        </button>       
                    )
                }
            )
        }
        </div>
    )
}

export default Pagination