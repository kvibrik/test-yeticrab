import React, { Component } from 'react';

import AppHeader from '../header';
import TransitList from '../transit-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div className="container">
          <h1 className="mt-3 mb-3 text-center">Заявки на грузоперевозки</h1>
          <TransitList />
        </div>
      </div>
    );
  }
}
