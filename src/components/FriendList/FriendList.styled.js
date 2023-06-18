import styled from 'styled-components';

export const FriendContainer = styled.div`
 display: flex;
 width: 100%;
 height: 150px;
 gap: 8px;
 margin: 0 auto;
`;

export const FriendItem = styled.li`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 16px;
 padding-left: 8px;
 padding-right: 8px;
 border-radius: 8px;
 background-color: #f3f3f3;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

 &:hover {
 transform: translateY(-4px);
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
 }
`;

export const FriendStatus = styled.div`
 width: 12px;
 height: 12px;
 border-radius: 50%;
 background-color: ${({ isOnline }) => isOnline ? '#3cba54' : '#f44336'};
`;

export const FriendAvatar = styled.img`
   width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #000;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FriendName = styled.span` 
 font-weight: 700;
 font-size: 18px;
`;
