const Heading = ({ children, className }) => {

  return (
    <h1 className={`heading ${className ? className : ''}`}>{children}</h1>
  );

};

export {
  Heading
};