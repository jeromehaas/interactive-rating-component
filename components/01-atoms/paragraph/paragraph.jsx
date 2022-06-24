const Paragraph = ({ children, className }) => {

  return (
    <p className={`paragraph ${className ? className : ''}`}>
      {children}
    </p>
  );

};

export {
  Paragraph
};