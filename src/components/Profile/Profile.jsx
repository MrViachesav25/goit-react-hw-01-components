import user from '../../user.json';
import { Container, Avatar, Name, UserTag, Location, List, ListItem, StatContainer, StatTitle, StatValue} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = () => {
  const { avatar, username, tag, location, stats } = user;
  return (
  <Container> 
    <div>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <Name>{username}</Name>
      <UserTag>@{tag}</UserTag>
      <Location>{location}</Location>
    </div>
    <List>
      <ListItem>
         <StatContainer>
           <StatTitle>Followers</StatTitle>
           <StatValue>{stats.followers}</StatValue>
         </StatContainer>
      </ListItem>
      <ListItem>
        <StatContainer>
          <StatTitle>Views</StatTitle>
          <StatValue>{stats.views}</StatValue>
        </StatContainer>
      </ListItem>
      <ListItem>
          <StatContainer>
            <StatTitle>Likes</StatTitle>
            <StatValue>{stats.likes}</StatValue>
          </StatContainer>
      </ListItem>
    </List>
  </Container>)
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};