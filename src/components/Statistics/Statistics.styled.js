import styled from 'styled-components';

function generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const Container = styled.div`
  background-color: #fff9;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StatTitle = styled.h2`
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgba(128, 128, 128, 1);
  font-size: 34px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 16px;
`;

const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

`;
const StatContainer = styled.div`
  width: 90px;
  height: 100px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  align-items: flex-end;
  flex-wrap: wrap;
  background-color: ${generateColor};
`;
const StatItem = styled.li`
  transition: all 0.2s ease-in-out;
  &:hover {
  transform: scale(1.1);
}
`;

const StatLabel = styled.span`
  display: block;
  color: #ffff;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 18px;
  margin-right: 16px;
`;

const StatPercentage = styled.span`
  display: block;
  color: #ffff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 700;
  font-size: 24px;
  font-weight: 500;
`;


export { Container, StatTitle, StatList, StatItem, StatLabel, StatPercentage, StatContainer};
