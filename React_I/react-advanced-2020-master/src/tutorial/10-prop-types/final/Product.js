import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg'; // our default prop/image
const Product = ({ image, name, price }) => {
  const url = image && image.url; // if image exists, then url exists
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} /> {/*pass static/default value or the one intended*/}
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

Product.propTypes = { //import from PropTypes
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
