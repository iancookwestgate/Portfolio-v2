import React from 'react';

function Error404(){
  return (
    <div className="errorSection">
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <a href="/">Home</a> instead?</h3>
    </div>
  );
}


export default Error404;