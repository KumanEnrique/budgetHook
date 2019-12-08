import React from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit,edit}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input type="text"
                        id="charge"
                        name="charge"
                        placeholder="example:tax"
                        className="form-control"
                        value={charge}
                        onChange={handleCharge}/>
                </div>
            </div>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="mount">Mount</label>
                    <input type="number" id="mount" name="mount" placeholder="example: 100" className="form-control"
                    value={amount} onChange={handleAmount}
                    />
                </div>
            </div>
            <button type="submit" className="btn">{edit?"Edit":"Submit"}
                <MdSend className="btn-icon"></MdSend>
            </button>
        </form>
    )
}
export default ExpenseForm