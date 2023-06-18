import { TableTransaction, TableHead, TableHeadRow, TableHeadType, TableHeadAmount, TableHeadCurrency, TableBody, TableBodyRow, TableBodyType, TableBodyAmount, TableBodyCurrency} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => {
    return (
    <TableTransaction>
        <TableHead>
            <TableHeadRow>
                <TableHeadType>Type</TableHeadType>
                <TableHeadAmount>Amount</TableHeadAmount>
                <TableHeadCurrency>Currency</TableHeadCurrency>
            </TableHeadRow>
        </TableHead>
        <TableBody>
            {transactions.map(transaction => (
               <TableBodyRow key={transaction.id}>
                   <TableBodyType>{transaction.type}</TableBodyType>
                   <TableBodyAmount>{transaction.amount}</TableBodyAmount>
                   <TableBodyCurrency>{transaction.currency}</TableBodyCurrency>
               </TableBodyRow>
            ))}
        </TableBody>    
    </TableTransaction>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
  };

