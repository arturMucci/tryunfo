import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
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
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="rare-input">
            <p>Raridade </p>
            <select
              data-testid="rare-input"
              id="rare-input"
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
            />
            <p className="checkbox">Super Trunfo</p>
          </label>
        </div>
        <div className="input">
          <button
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
