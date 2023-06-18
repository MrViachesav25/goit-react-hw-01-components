import { FriendContainer, FriendItem, FriendStatus, FriendAvatar, FriendName } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendContainer> 
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <FriendStatus isOnline={friend.isOnline} />
          <FriendAvatar src={friend.avatar} alt={`${friend.name} avatar`} width="48" />
          <FriendName>{friend.name}</FriendName>
        </FriendItem>
      ))}
    </FriendContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
