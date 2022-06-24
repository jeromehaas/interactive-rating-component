const ErrorMessage = ({ className }) => {

  return (
    <p className={`error-message ${className ? className : ''}`}>Please rate your support expirience.</p>
  );

};

export {
  ErrorMessage
};