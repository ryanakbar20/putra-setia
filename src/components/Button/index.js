import React from 'react';

export default function Button({ value, type, onClick }) {
  switch (type) {
    case 'mode':
      return (
        <div onClick={onClick} className="btn btn-light btn-sm">
          {value}
        </div>
      );

    case 'nextWhite':
      return (
        <div onClick={onClick} className="next-button">
          Selanjutnya... <i class="fas fa-angle-double-right"></i>
        </div>
      );

    case 'nextBlack':
      return (
        <div onClick={onClick} className="next-button black">
          Selanjutnya... <i class="fas fa-angle-double-right"></i>
        </div>
      );

    default:
      return (
        <div onClick={onClick} className="btn button-container">
          {value}
        </div>
      );
  }
}
