import React from 'react';

export default () => {
  const myStyle = {
    display: 'inline-block', transform: 'rotate(180deg)', fontSize: '1,5rem', fontWeight: 400,
    color: '#17a2b8', textAlign: 'center'
  }

  return (
    <div>
      <h1 className="display-4">About Reactive Contacts</h1>
      <hr/>
      <p className="lead">A simple app that helps you manage your contacts</p>
      <p className="text-secondary">Version 0.1.0</p>
      <p className="text-info"><b>BiggaHD </b> 

      <a href="https://github.com/biggahd" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-2x"></i> </a>

      </p>
      <hr/>
      <p><span style={myStyle}>&copy; </span> Copyleft - 2018</p>
      
    </div>
  );

  

};
