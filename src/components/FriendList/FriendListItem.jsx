import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendAvatar, FriendName } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
      <FriendItem> 
            <FriendStatus isOnline={isOnline} />
            <FriendAvatar src={avatar} alt={`${name} avatar`} width="48" />
            <FriendName>{name}</FriendName>
      </FriendItem>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;