import React, { Component } from 'react';

// подключаем компоненты
import AppHeader from '../header'; // header приложения
import TransitList from '../transit-list'; // список вссех транзитов
import TransitInfoModal from '../transit-info-modal'; // модалка с информацией о заявке
import TransitEditModal from '../transit-modal-edit';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      transitList: [
        {
          id: 1,
          date: new Date(),
          clientName: 'ТД "Рога и Копыта"',
          carrierFullName: 'Петров Петр Петрович',
          carrierPhone: '+79665554433',
          comments: '',
          atiCode: '12345',
        },
        {
          id: 2,
          date: new Date(),
          clientName: 'ООО "Василек"',
          carrierFullName: 'Деловой портал',
          carrierPhone: '+79665554433',
          comments: '',
          atiCode: '153340',
        },
        {
          id: 3,
          date: new Date(),
          clientName: 'ООО "Работа не волк"',
          carrierFullName: 'БАСАТИ СПЕДИШН',
          carrierPhone: '+79665554433',
          comments: '',
          atiCode: '70714',
        },
      ],
      currentTransitInfo: {
        id: '',
        date: '',
        clientName: '',
        carrierFullName: '',
        carrierPhone: '',
        comments: '',
        atiCode: '',
      },
      transitInfo: false,
      transitEdit: false,
    };

    // удаление заявки на доставку
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

    // редактирование заявки на доставку
    this.onTransitEdit = transit => {
      this.setState(({ transitList, transitEdit }) => {
        const idx = transitList.findIndex(el => el.id === transit.id);
        const newTransitList = [...transitList];
        newTransitList[idx] = transit;

        const newTransitEdit = !transitEdit;

        return {
          transitList: newTransitList,
          transitEdit: newTransitEdit,
          currentTransitInfo: {
            id: '',
            date: '',
            clientName: '',
            carrierFullName: '',
            carrierPhone: '',
            comments: '',
            atiCode: '',
          },
        };
      });
    };

    // запись в стейт выбранной заявки для просмотра
    this.setCurrentTransitInfo = id => {
      this.setState(({ transitList, transitInfo }) => {
        const idx = transitList.findIndex(el => el.id === id);
        const newCurrentTransitInfo = transitList[idx];
        const newTransitInfo = !transitInfo;

        return {
          transitInfo: newTransitInfo,
          currentTransitInfo: newCurrentTransitInfo,
        };
      });
    };
    this.setCurrentTransitEdit = id => {
      this.setState(({ transitList, transitEdit, currentTransitInfo }) => {
        const idx = transitList.findIndex(el => el.id === id);
        const newCurrentTransitInfo = transitList[idx];
        const newTransitEdit = !transitEdit;

        return {
          transitEdit: newTransitEdit,
          currentTransitInfo: newCurrentTransitInfo,
        };
      });
    };

    // закрытие модалки с информацией о заявке
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
    // закрытие модалки с информацией о заявке
    this.onEditClose = () => {
      this.setState(({ transitEdit, currentTransitInfo }) => {
        const newTransitEdit = !transitEdit;
        const newCurrentTransitInfo = {};

        return {
          transitEdit: newTransitEdit,
          currentTransitInfo: newCurrentTransitInfo,
        };
      });
    };
  }

  render() {
    const {
      transitList,
      currentTransitInfo,
      transitInfo,
      transitEdit,
    } = this.state;

    return (
      <div className="app">
        <AppHeader />
        <div className="container">
          <h1 className="mt-3 mb-3 text-center">Заявки на грузоперевозки</h1>
          <TransitList
            transitList={transitList}
            onDeleted={this.deleteTransit}
            onShowInfo={this.setCurrentTransitInfo}
            onEdit={this.setCurrentTransitEdit}
          />
        </div>
        <TransitInfoModal
          currentTransitInfo={currentTransitInfo}
          transitInfo={transitInfo}
          onInfoClose={this.onInfoClose}
        />
        <TransitEditModal
          transitEdit={transitEdit}
          onEditClose={this.onEditClose}
          currentTransitInfo={currentTransitInfo}
          onTransitEdit={this.onTransitEdit}
          transitId={currentTransitInfo.id}
        />
      </div>
    );
  }
}
