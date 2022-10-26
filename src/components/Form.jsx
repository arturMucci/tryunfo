import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <div className="input">
          <label htmlFor="name-input">
            <p>Nome </p>
            <input
              data-testid="name-input"
              id="name-input"
              type="text"
              placeholder="Insira o nome da carta"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="description-input">
            <p>Descrição </p>
            <textarea
              data-testid="description-input"
              id="description-input"
              placeholder="Insira a descrição da carta"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="attr1-input">
            <p>Atributo 1 </p>
            <input
              data-testid="attr1-input"
              id="attr1-input"
              type="number"
              placeholder="Atributo 1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="attr2-input">
            <p>Atributo 2 </p>
            <input
              data-testid="attr2-input"
              id="attr1-input"
              type="number"
              placeholder="Atributo 2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="attr3-input">
            <p>Atributo 3 </p>
            <input
              data-testid="attr3-input"
              id="attr3-input"
              type="number"
              placeholder="Atributo 3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="image-input">
            <p>Imagem </p>
            <input
              data-testid="image-input"
              id="image-input"
              type="text"
              placeholder="Insira o link da imagem"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="rare-input">
            <p>Raridade </p>
            <select
              data-testid="rare-input"
              id="rare-input"
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
          <label htmlFor="trunfo-input">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="trunfo-input"
              className="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            <p className="checkbox">Super Trunfo</p>
          </label>
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
  // hasTrunfo: PropTypes.string,
  isSaveButtonDisabled: PropTypes.string,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
