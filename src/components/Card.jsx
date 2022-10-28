import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;

    const notTrunfo = '';
    const superTrunfo = <p data-testid="trunfo-card">Super Trunfo</p>;

    return (
      <div className="card">
        <div>
          <h2
            data-testid="name-card"
            className="name-card"
          >
            {cardName}
          </h2>
          <div className="imagem">
            <img
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
          </div>
          <p
            data-testid="description-card"
            className="description"
          >
            {cardDescription}
          </p>
          <div className="atributos">
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
            <div className="superTrunfo">
              {cardTrunfo ? superTrunfo : notTrunfo}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
