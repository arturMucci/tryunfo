import { Component } from 'react';
import PropTypes from 'prop-types';

class CheckTrunfo extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            name="cardTrunfo"
            id="trunfo"
            type="checkbox"
            className="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          <p className="checkbox">Super Trunfo</p>
        </label>
      </div>
    );
  }
}

CheckTrunfo.propTypes = {
  cardTrunfo: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequired;

export default CheckTrunfo;
