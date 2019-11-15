/// external modules ///
import React from 'react';
import { Card, CardImg , CardBody , CardTitle } from 'reactstrap';

/***************************************
  COMPONENT
***************************************/
const CharacterCard = ({ data , ...props }) => {
  return (
    <Card className='character'>
      <CardImg top width='100%' src={data.image} alt='character image'/>
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
      </CardBody>
    </Card>
  );
};

/**************************************/
export default CharacterCard;
