const Tag = ({ children, className }) => {

  return (
    <p className={`tag ${className ? className : ''}`}>
      {children}
    </p>
  );

};

export {
  Tag
};