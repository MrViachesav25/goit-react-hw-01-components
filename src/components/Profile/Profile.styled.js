import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 20px;
  border: 10px;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid green;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Name = styled.h1`
  font-family: cursive;
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;
export const UserTag = styled.p`
 margin: 0;
 color: #ccc;
 font-size: 14px;
 font-style: italic;
`;
export const Location= styled.p`
 margin: 0;
 font-size: 14px;
 color: #666;
 font-style: italic;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0;
`;
export const ListItem = styled.li`
  text-align: center;
  flex-basis: 33%;
`;
export const StatContainer = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StatTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  margin-bottom: 5px;
`
export const StatValue = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`