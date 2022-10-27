import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;
    const obj = {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    this.setState((prev) => ({
      deck: [...prev.deck, obj],
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    }));
  };

  checkState = () => {
    const noventa = 90;
    const duzentosEDez = 210;
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const checkString = [
      cardName,
      cardImage,
      cardDescription,
    ];
    const checkNumber = [
      cardAttr1,
      cardAttr2,
      cardAttr3,
    ];
    const resultString = checkString.every((el) => el !== '');

    const soma = (Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)) <= duzentosEDez;

    const resultNumber = checkNumber
      .every((el) => Number(el) <= noventa && Number(el) >= 0);

    const checkAll = resultString && resultNumber && soma;

    this.setState({ isSaveButtonDisabled: !checkAll });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const check = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: check,
    }, this.checkState);
  };

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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div id="formContainer">
        <div>
          <Form
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />
        </div>
        <div id="preview">
          <h2>Card preview</h2>
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
