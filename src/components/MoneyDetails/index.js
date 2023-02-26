import './index.css'

const MoneyDetails = props => {
  const {expenses, income, balance} = props
  return (
    <div className="MoneyDetails">
      <div className="BalanceDetailsItem">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="amount-container">
          <p className="title">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            {balance}
          </p>
        </div>
      </div>
      <div className="IncomeDetailsItem">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="amount-container">
          <p className="title">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            {income}
          </p>
        </div>
      </div>
      <div className="ExpensesDetailsItem">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="amount-container">
          <p className="title">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
