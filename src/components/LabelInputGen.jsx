import React, { Component } from 'react';

class LabelInputGen extends Component {
  render() {
    const { atributes } = this.props;
    const [htmlFor, idLabel, text, type, name, value, idInput, onChange] = atributes;
    return (
      <label
        htmlFor={ htmlFor }
        data-testid={ idLabel }
      >
        { text }
        <input
          type={ type }
          name={ name }
          value={ value }
          data-testid={ idInput }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default LabelInputGen;