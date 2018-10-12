import React from 'react';
import Pet from './Pet'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Pet catToAdopt/>
        <Pet dogToAdpot/>
      </div>
    );
  }
}
