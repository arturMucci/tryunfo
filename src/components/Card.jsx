import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    const superTrunfo = <p data-testid="trunfo-card">Super Trunfo</p>;
    return (
      <div>
        <h2 data-testid="name-card">{cardName}</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          {cardRare}
        </p>
        {cardTrunfo ? superTrunfo : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.string,
}.isRequired;

export default Card;