import React from 'react';
import './Card.css';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    describe: 'Hedy Lamarr, geboren als Hedwig Eva Maria Kiesler, war eine österreichisch-US-amerikanische Schauspielerin und Erfinderin.',
    imageSize: 90,
  };

 
  
  export default function Profile() {
    return (
        <div id="Card">
      <>
        <h1>{user.name}</h1>
        <p>{user.describe}</p>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}

          style={{
            width: user.imageSize,
            height: user.imageSize,    
          }}
        />
      </>
      </div>
    );
  }
  