import React from 'react';

interface LeftButtonProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
}

const LeftButton: React.FC<LeftButtonProps> = ({ onClick, disabled = false }) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 2
      }}>
      <img
        src="../../Images/prev.png"
        alt="previous"
        style={{
          width: '20px',
          height: '20px',
          transform: 'rotate(180deg)'
        }}
      />
    </div>
  );
};

export default LeftButton;
