import React from 'react';

const BotonMultiuso = ({ urlDestination, urlImg, name, backColor }) => {

  const botonStyle = {
    padding: '10px',
    backgroundColor: backColor,
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    maxWidth: '200px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const textStyle = {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginRight: '8px',
  };

  const iconStyle = {
    maxWidth: '40px',
    height: '30px',
  };

  return (
    <button style={botonStyle} onClick={handleButtonClick}>
      <div style={containerStyle}>
        <span style={textStyle}>{name}</span>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" className="icon-style" />
      </div>
    </button>
  );
};

export default BotonMultiuso;
