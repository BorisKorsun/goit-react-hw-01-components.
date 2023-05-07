import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {MakeFreindCard(friends)}
        </ul>
    )
};

export default FriendList;

const MakeFreindCard = (friends) => {
    return friends.map(({ id, avatar, name, isOnline}) => {
        return (
        <li key ={id}>
            <span class={isOnline}></span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
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