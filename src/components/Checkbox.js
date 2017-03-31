import React from 'react';

class Checkbox extends React.Component {
  constructor () {
    super();
    this.state = {
      isChecked: false
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  toggleCheckboxChange ()  {
    // The below line is ES6 or ES7 object destructuring...
    // can you say this in ES5? Do you know what it's doing? - Harold
    const { handleCheckboxChange, label } = this.props;

    // I don't understand what the code below is supposed to do - does it work?
    // - Harold
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    // more advanced ES++ style object destructuring notation. Make sure you
    // understand -Harold
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: React.PropTypes.string.isRequired,
  handleCheckboxChange: React.PropTypes.func.isRequired
};

export default Checkbox;
