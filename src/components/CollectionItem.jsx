import React from 'react';
import Figure from 'react-bootstrap/Figure'


const CollectionItem = (props) => {
  const { nft } = props;

  return (
    <Figure key={nft[1]} className="collection-item">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={nft[2]}
      />
    </Figure>
  )
}

export default CollectionItem;