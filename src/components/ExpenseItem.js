import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate = new Date();
    const expenseName = 'Car Insurance';
    const expensePrice = 728.24;
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseName}</h2>
                <div className='expense-item__price'>${expensePrice}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;