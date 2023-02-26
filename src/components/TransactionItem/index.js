import './index.css'

const TransactionItem = props => {
  const {details, deleteHistoryItem} = props
  const {id, Title, Amount, Type} = details

  const onClickSendId = () => {
    deleteHistoryItem(id, Type, Amount)
  }

  return (
    <li className="listItem">
      <p className="item">{Title}</p>
      <p className="item">{`Rs ${Amount}`}</p>
      <p className="item">{Type}</p>
      <button type="button" data-testid="delete" onClick={onClickSendId}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
