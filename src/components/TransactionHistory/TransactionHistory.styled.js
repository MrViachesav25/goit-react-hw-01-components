import styled from 'styled-components';

const TableTransaction = styled.table`
  width: 450px;
  border-collapse: separate;
  margin-top: 20px;
`;

const TableHead = styled.thead`
  background-color: rgba(0, 0, 190, 0.5);
  color: #fff;
`;

const TableHeadRow = styled.tr``;

const TableHeadCell = styled.th`
  padding: 8px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid #ddd;
`;

const TableHeadType = styled(TableHeadCell)``;

const TableHeadAmount = styled(TableHeadCell)`
`;

const TableHeadCurrency = styled(TableHeadCell)`
`;

const TableBody = styled.tbody`
`;

const TableBodyRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const TableBodyCell = styled.td`
  padding: 8px;
  border-bottom: 2px solid #ddd;
  text-align: center;
  color: rgba(128, 128, 128, 0.9);
  font-weight: bold;
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const TableBodyType = styled(TableBodyCell)``;

const TableBodyAmount = styled(TableBodyCell)`
`;

const TableBodyCurrency = styled(TableBodyCell)`
`;

export { TableTransaction, TableHead, TableHeadRow, TableHeadType, TableHeadAmount, TableHeadCurrency, TableBody, TableBodyRow, TableBodyType, TableBodyAmount, TableBodyCurrency};