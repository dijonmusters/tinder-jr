import { Component } from 'react';
import { fetchBabies } from '../data/api';

class BabyFetcher extends Component {
  state = {};

  componentDidMount = async () => {
    console.log('RUNNING FETCH');
    const babies = await fetchBabies();
    this.setState(babies);
  };

  render() {
    return this.props.children(this.state.babies);
  }
}

export default BabyFetcher;
