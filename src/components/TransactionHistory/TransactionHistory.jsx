import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {addTransaction(items)}
  </tbody>
</table>
    );
};

export default TransactionHistory;

const addTransaction = (items) => {
    return items.map(({id, type, amount, currency}) => {
        return (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
        );
    });
};

TransactionHistory.propType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
    )
};

