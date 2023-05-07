import PropTypes from 'prop-types';
import { OnlineStatus, FriendCatalogue, Friend, FriendAvatar } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <FriendCatalogue>
            {MakeFreindCard(friends)}
        </FriendCatalogue>
    )
};

export default FriendList;

const MakeFreindCard = (friends) => {
    return friends.map(({ id, avatar, name, isOnline}) => {
        return (
        <Friend key ={id}>
            <OnlineStatus isOnline={isOnline}></OnlineStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </Friend>
        );
    });
};

FriendList.propType = {
    friends: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
}