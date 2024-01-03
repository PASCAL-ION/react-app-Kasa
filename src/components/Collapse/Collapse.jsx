import React, { useState } from 'react';
import './Collapse.scss';
import arrowDown from '../../assets/arrow_down.svg'
import arrowUp from '../../assets/arrow_up.svg'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-wrapper">
      <button className="collapse-button" onClick={handleToggle}>
        {title} {isOpen ? <img src={arrowDown} alt=""/> : <img src={arrowUp} alt=""/>}
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;



