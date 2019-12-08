import React from 'react'
import ExpenseItem from './ExpenseItem'
import {MdDelete} from 'react-icons/md'

const ExpenseList = ({expenses,clearItems,handleEdit,handleDelete}) => {
    return (
        <>
            <ul className="list">
                {expenses.map((expense)=>{
                    return(
                        <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        ></ExpenseItem>
                    )
                })}
            </ul>
            {expenses.length && (<button onClick={clearItems} className="btn">
                clear <MdDelete className="btn-icon"></MdDelete>
                </button>)}
        </>
    )
}
export default ExpenseList