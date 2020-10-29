import React, { Component } from 'react';

// подключаем компоненты
import AppHeader from '../header'; // header приложения
import TransitList from '../transit-list'; // список вссех транзитов
import TransitInfoModal from '../transit-info-modal';

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
      currentTransitInfo: {},
      transitInfo: false,
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

    this.setCurrentTransitInfo = id => {
      this.setState(({ transitList, transitInfo, currentTransitInfo }) => {
        const idx = transitList.findIndex(el => el.id === id);
        const newCurrentTransitInfo = transitList[idx];
        const newTransitInfo = !transitInfo;

        return {
          transitInfo: newTransitInfo,
          currentTransitInfo: newCurrentTransitInfo,
        };
      });
    };

    this.onInfoClose = () => {
      this.setState(({ transitInfo, currentTransitInfo }) => {
        const newTransitInfo = !transitInfo;
        const newCurrentTransitInfo = {};

        return {
          transitInfo: newTransitInfo,
          currentTransitInfo: newCurrentTransitInfo,
        };
      });
    };
  }

  render() {
    const { transitList, currentTransitInfo, transitInfo } = this.state;

    return (
      <div className="app">
        <AppHeader />
        <div className="container">
          <h1 className="mt-3 mb-3 text-center">Заявки на грузоперевозки</h1>
          <TransitList
            transitList={transitList}
            onDeleted={this.deleteTransit}
            onShowInfo={this.setCurrentTransitInfo}
          />
        </div>
        <TransitInfoModal
          currentTransitInfo={currentTransitInfo}
          transitInfo={transitInfo}
          onInfoClose={this.onInfoClose}
        />
      </div>
    );
  }
}
