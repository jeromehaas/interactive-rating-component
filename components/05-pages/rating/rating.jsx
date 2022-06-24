import { Dial } from 'components/01-atoms/dial/dial';
import { Button } from 'components/01-atoms/button/button';
import { Heading } from 'components/01-atoms/heading/heading';
import { Card } from 'components/04-layouts/card/card';
import { Paragraph } from 'components/01-atoms/paragraph/paragraph';
import { ErrorMessage } from 'components/02-molecules/error-message/error-message';
import { AppContext } from 'context/app-provider';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const Rating = ({ children, className }) => {

  const { error, setError, rating, setRating } = useContext(AppContext);
  const router = useRouter();

  const handleClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    router.push('/thanks');
  }

  return (
    <div className={`rating ${className ? className : ''}`}>
      <Card className="rating__card">
        <Dial className="rating__star"></Dial>
        <Heading className="rating__heading">How did we do?</Heading>
        <span>{error}</span>
        <span className="rating__dial-wrapper">
          <Dial className={`dial__item ${rating === 1 ? 'dial--active' : ''}`} onClick={() => handleClick(1)}>1</Dial>
          <Dial className={`dial__item ${rating === 2 ? 'dial--active' : ''}`} onClick={() => handleClick(2)}>2</Dial>
          <Dial className={`dial__item ${rating === 3 ? 'dial--active' : ''}`} onClick={() => handleClick(3)}>3</Dial>
          <Dial className={`dial__item ${rating === 4 ? 'dial--active' : ''}`} onClick={() => handleClick(4)}>4</Dial>
          <Dial className={`dial__item ${rating === 5 ? 'dial--active' : ''}`} onClick={() => handleClick(5)}>5</Dial>
        </span>
        <p>{error}</p>
        <Paragraph className="rating__paragraph">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Paragraph>
        <Button className={`rating__button ${rating ? '' : 'rating__button--disabled'}`} onClick={rating ? handleSubmit : () => setError(true)}>Submit</Button>
        <ErrorMessage className={`rating__error-message ${error === true ? 'rating__error-message--active' : ''}`} />
      </Card>
    </div >
  );

};

export {
  Rating
};