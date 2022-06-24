import { Heading } from 'components/01-atoms/heading/heading';
import { Card } from 'components/04-layouts/card/card';
import { Paragraph } from 'components/01-atoms/paragraph/paragraph';
import { Tag } from 'components/02-molecules/tag/tag';
import { Graphic } from 'components/01-atoms/graphic/graphic';
import { AppContext } from 'context/app-provider';
import { useContext } from 'react';
import { useRouter } from 'next/router';

const Thanks = ({ className }) => {

  const { error, setError, rating, setRating } = useContext(AppContext);
  const router = useRouter();

  return (
    <div className={`thanks ${className ? className : ''}`}>
      <Card className="thanks__card">
        <Graphic className="thanks__graphic" />
        <Tag className="thanks__summary">You selected {rating} out of 5</Tag>
        <Heading className="thanks__heading">Thank you!</Heading>
        <Paragraph className="thanks__paragraph">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Paragraph>
      </Card>
    </div >
  );

};

export {
  Thanks
};