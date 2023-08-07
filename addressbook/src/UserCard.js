import React, { useState } from 'react';

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <div className="user-card">
      <img src={user.picture.thumbnail} alt="Thumbnail" />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="details">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {/* Add any additional details you want to display */}
        </div>
      )}
    </div>
  );
};

export default UserCard;