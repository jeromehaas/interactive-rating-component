const Dial = ({ children, className, onClick }) => {

  return (
    <button className={` dial ${className ? className : ''} `} onClick={onClick}>
      {children}
    </button>
  );

};

export {
  Dial
};

