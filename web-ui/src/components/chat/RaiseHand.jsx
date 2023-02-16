import React from 'react';
import PropTypes from 'prop-types';

const RaiseHand = ({ isRaised, handleRaiseHandSend }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleRaiseHandSend();
  };
  return (
    <>
      <button
        className={`input-line-btn raise-hand-btn${
          isRaised ? ' raise-hand-btn--raised' : ''
        }`}
        onClick={handleButtonClick}
      >
        <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
          <path d='M12.775 24q-1.825 0-3.337-.688-1.513-.687-2.613-1.824-1.1-1.138-1.712-2.638-.613-1.5-.613-3.1v-10q0-.525.363-.888.362-.362.887-.362t.888.362Q7 5.225 7 5.75v5.75q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V2.75q0-.525.363-.888.362-.362.887-.362t.887.362q.363.363.363.888v7.75q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V1.25q0-.525.363-.888Q12.225 0 12.75 0t.887.362Q14 .725 14 1.25v9.25q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35V3.25q0-.525.363-.888Q15.725 2 16.25 2t.888.362q.362.363.362.888v10.775q-1.4.2-2.325 1.138-.925.937-1.125 2.262-.05.225.113.4.162.175.412.175.175 0 .3-.113.125-.112.15-.312.15-1.1 1-1.837Q16.875 15 18 15q.2 0 .35-.15.15-.15.15-.35V9.25q0-.525.363-.887Q19.225 8 19.75 8t.888.363q.362.362.362.887v6.5q0 1.6-.6 3.087-.6 1.488-1.688 2.638-1.087 1.15-2.599 1.837Q14.6 24 12.775 24Z' />
        </svg>
      </button>
    </>
  );
};

RaiseHand.props = {
  handleRaiseHandSend: PropTypes.func,
};

export default RaiseHand;
