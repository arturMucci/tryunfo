import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckTrunfo from './CheckTrunfo';
import './Form.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <div className="input">
          <label htmlFor="name">
            <p>Nome </p>
            <input
              data-testid="name-input"
              name="cardName"
              id="name"
              type="text"
              placeholder="Insira o nome da carta"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="image">
            <p>Imagem </p>
            <input
              data-testid="image-input"
              name="cardImage"
              id="image"
              type="text"
              value={ cardImage }
              placeholder="Insira o link da imagem"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="description">
            <p>Descrição </p>
            <textarea
              data-testid="description-input"
              name="cardDescription"
              className="descriptionInput"
              placeholder="Insira a descrição do Animal"
              maxLength="166"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="attr1">
            <p>Força</p>
            <input
              data-testid="attr1-input"
              name="cardAttr1"
              id="cardAttr1"
              type="number"
              placeholder="Força"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="attr2">
            <p>Agilidade</p>
            <input
              data-testid="attr2-input"
              name="cardAttr2"
              id="cardAttr2"
              type="number"
              placeholder="Agilidade"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="attr3">
            <p>Inteligência</p>
            <input
              data-testid="attr3-input"
              name="cardAttr3"
              id="cardAttr3"
              type="number"
              placeholder="Inteligência"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="rare">
            <p>Raridade </p>
            <select
              data-testid="rare-input"
              name="cardRare"
              id="rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <div className="input">
          {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho'
            : <CheckTrunfo cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } /> }
        </div>
        <div className="input">
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.string,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
