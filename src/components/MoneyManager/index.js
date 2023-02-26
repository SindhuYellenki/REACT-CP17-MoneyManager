import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TractionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    HistoryList: [],
    Balance: 0,
    Income: 0,
    Expenses: 0,
    Title: '',
    Amount: '',
    Type: 'Income',
  }

  onChangeTitle = e => {
    console.log('Title change trigerred')
    this.setState({Title: e.target.value})
  }

  onChangeAmount = e => {
    const newAmount = parseInt(e.target.value)
    this.setState({Amount: newAmount})
  }

  onChangeType = e => {
    console.log(e.target.value)
    const typeId = e.target.value
    if (typeId === 'INCOME') {
      this.setState({Type: 'Income'})
    } else {
      this.setState({Type: 'Expenses'})
    }
  }

  onSubmitStateChange = e => {
    console.log('submit triggered')
    e.preventDefault()
    const {Title, Amount, Type} = this.state
    const newHistoryItem = {id: uuidv4(), Title, Amount, Type}
    this.setState(p => ({
      HistoryList: [...p.HistoryList, newHistoryItem],
      Title: '',
      Amount: '',
      Type: 'Income',
    }))
    if (Type === 'Income') {
      this.setState(p => ({
        Balance: p.Balance + Amount,
        Income: p.Income + Amount,
      }))
    } else {
      this.setState(p => ({
        Balance: p.Balance - Amount,
        Expenses: p.Expenses + Amount,
      }))
    }
  }

  deleteHistoryItem = (id, Type, Amount) => {
    const {HistoryList} = this.state
    const newList = HistoryList.filter(each => each.id !== id)
    if (Type === 'Expenses') {
      this.setState(p => ({
        Balance: p.Balance + parseInt(Amount),
        Expenses: p.Expenses - parseInt(Amount),
      }))
    } else {
      this.setState(p => ({
        Balance: p.Balance - parseInt(Amount),
        Income: p.Income - parseInt(Amount),
      }))
    }
    this.setState({HistoryList: newList})
  }

  render() {
    const {
      HistoryList,
      Balance,
      Income,
      Expenses,
      Title,
      Amount,
      Type,
    } = this.state
    return (
      <div className="bg-container">
        <div className="header-container">
          <h1 className="Greeting">Hi,Richard</h1>
          <p className="WelcomePara">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={Income} balance={Balance} expenses={Expenses} />
        <div className="transactions-history-container">
          <div className="AddTransactionsContainer">
            <h1 className="heading">Add Transactions</h1>
            <form onSubmit={this.onSubmitStateChange}>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="title"
                value={Title}
                onChange={this.onChangeTitle}
              />
              <br />
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                value={Amount}
                onChange={this.onChangeAmount}
              />
              <br />
              <label className="label" htmlFor="type" value={Type}>
                TYPE
              </label>
              <br />
              <select id="type" onChange={this.onChangeType}>
                <option value="INCOME">Income</option>
                <option value="EXPENSES">Expenses</option>
              </select>
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="historyContainer">
            <h1 className="heading">History</h1>
            <div className="historyHeader">
              <p className="historyHeading">Title</p>
              <p className="historyHeading">Amount</p>
              <p className="historyHeading">Type</p>
            </div>
            <ul>
              {HistoryList.map(each => (
                <TractionItem
                  details={each}
                  deleteHistoryItem={this.deleteHistoryItem}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
