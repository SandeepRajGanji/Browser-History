import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails

  const onDeleteHistoryItem = () => {
    deleteItem(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="history-item-content">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteHistoryItem}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
