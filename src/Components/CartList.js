import react from 'react';

export default class CartList extends react.Component {
  constructor(props) {
    super(props);
    this.state = { abacate: 0, banana: 0, laranja: 0, maca: 0, manga: 0 };
  }

  incrementValue = (fruit, value) => {
    switch (fruit) {
      case 'abacate':
        this.setState(state => ({
          abacate: state.abacate + value,
        }));
      case 'banana':
        this.setState(state => ({
          banana: state.banana + value,
        }));
      case 'laranja':
        this.setState(state => ({
          laranja: state.laranja + value,
        }));
      case 'maça':
        this.setState(state => ({
          maca: state.maca + value,
        }));
      case 'manga':
        this.setState(state => ({
          manga: state.manga + value,
        }));
    }
  };
}
