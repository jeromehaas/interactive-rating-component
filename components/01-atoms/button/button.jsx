const Button = ({ children, className, onClick }) => {

  return (
    <button className={` button ${className ? className : ''}`} onClick={onClick}>
      {children}
    </button>
  );

};

export {
  Button
};