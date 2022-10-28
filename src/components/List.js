import { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends Component {
  render() {
    const { deck } = this.props;
    return (
      <div>
        {deck.map(({
          cardName,
          cardImage,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        }) => (<Card
          key={ cardName }
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />))}
      </div>
    );
  }
}

List.propTypes = {
  deck: PropTypes.string,
}.isRequired;

export default List;
