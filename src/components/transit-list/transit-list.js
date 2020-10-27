import React, { Component } from 'react';

export default class TransitList extends Component {
  render() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Номер заявки</th>
            <th>Дата/время</th>
            <th>Клиент</th>
            <th>ATI код</th>
            <th></th>
          </tr>
        </thead>
      </table>
    );
  }
}
