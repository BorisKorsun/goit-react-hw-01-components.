import PropTypes from 'prop-types';
import { ProfileBox, ProfileDesc, UserAvatar, UserName, UserTag, UserLocation} from 'components/Profile/Profile.styled';

const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    return (
        <ProfileBox>
        <ProfileDesc>
          <UserAvatar
            src={avatar}
            alt="User avatar"
          />
          <UserName>{username}</UserName>
          <UserTag>{tag}</UserTag>
          <UserLocation>{location}</UserLocation>
        </ProfileDesc>
      
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </ProfileBox>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;