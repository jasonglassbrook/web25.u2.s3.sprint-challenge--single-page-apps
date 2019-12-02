/// external modules ///
import React from 'react';
import { Card, CardImg , CardBody , CardTitle } from 'reactstrap';

/***************************************
  COMPONENT
***************************************/
const LocationCard = ({ data , ...props }) => {
  return (
    <Card className='location'>
      <CardImg top width='100%' src={data.image} alt='location image'/>
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
      </CardBody>
    </Card>
  );
};

/**************************************/
export default LocationCard;
