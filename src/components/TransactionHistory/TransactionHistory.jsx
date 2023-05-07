import PropTypes from 'prop-types';
import { Table, TableTitle, TableValue } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
<Table>
  <thead>
    <tr>
      <TableTitle>Type</TableTitle>
      <TableTitle>Amount</TableTitle>
      <TableTitle>Currency</TableTitle>
    </tr>
  </thead>

  <tbody>
        {addTransaction(items)}
  </tbody>
</Table>
    );
};

export default TransactionHistory;

const addTransaction = (items) => {
    return items.map(({id, type, amount, currency}) => {
        return (
        <tr key={id}>
            <TableValue>{type}</TableValue>
            <TableValue>{amount}</TableValue>
            <TableValue>{currency}</TableValue>
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

