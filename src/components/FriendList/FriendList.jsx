import { FriendContainer } from './FriendList.styled';
import FriendListItem  from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <FriendContainer>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </FriendContainer>
);


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
