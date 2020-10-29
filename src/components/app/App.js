import React, { Component } from 'react';

// подключаем компоненты
import AppHeader from '../header'; // header приложения
import TransitList from '../transit-list'; // список вссех транзитов

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      transitList: [
        {
          id: 1,
          date: '2020-11-05T12:30',
          clientName: 'ТД "Рога и Копыта"',
          carrierFullName: 'Петров Петр Петрович',
          carrierPhone: '+79665554433',
          comments: '',
          atiCode: '12345',
        },
        {
          id: 2,
          date: '2020-11-01T11:00',
          clientName: 'ООО "Василек"',
          carrierFullName: 'Деловой портал',
          carrierPhone: '+79665554433',
          comments: '',
          atiCode: '153340',
        },
        {
          id: 3,
          date: '2020-12-01T14:00',
          clientName: 'ООО "Работа не волк"',
          carrierFullName: 'БАСАТИ СПЕДИШН',
          carrierPhone: '+79665554433',
          comments: '',
          atiCode: '70714',
        },
      ],
    };

    this.deleteTransit = id => {
      this.setState(({ transitList }) => {
        const idx = transitList.findIndex(el => el.id === id);

        const newTransits = [
          ...transitList.slice(0, idx),
          ...transitList.slice(idx + 1),
        ];

        return {
          transitList: newTransits,
        };
      });
    };
  }

  render() {
    const { transitList } = this.state;

    return (
      <div>
        <AppHeader />
        <div className="container">
          <h1 className="mt-3 mb-3 text-center">Заявки на грузоперевозки</h1>
          <TransitList
            transitList={transitList}
            onDeleted={this.deleteTransit}
          />
        </div>
      </div>
    );
  }
}
