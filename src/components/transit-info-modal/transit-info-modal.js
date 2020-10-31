import React, { Component } from 'react';
import moment from 'moment';

import './transit-info-modal.css';

export default class TransitInfoModal extends Component {
  render() {
    const { currentTransitInfo, transitInfo, onInfoClose } = this.props;
    // форматирование даты
    const formatDate = moment(new Date(currentTransitInfo.date)).format(
      'YYYY.MM.DD HH:mm',
    );
    // форматирование ссылки на ати-код
    const atiLink = `https://ati.su/firms/${currentTransitInfo.atiCode}/info`;

    // добавление класса, когда открывается модалка
    let classNames = 'transit-info modal';
    if (transitInfo) {
      classNames += ' d-block';
    }

    return (
      <div className={classNames}>
        <div className="transit-info__body modal-body">
          <div className="transit-info__content modal-content">
            <svg
              width="1.3em"
              height="1.3em"
              viewBox="0 0 16 16"
              className="bi bi-x-circle-fill text-danger close pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onInfoClose}>
              <path
                fillRule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
              />
            </svg>
            <div className="container-fluid">
              <h4>
                Заявка на перевозку № <b>{currentTransitInfo.id}</b>
              </h4>
              <div className="row mt-3">
                <div className="col">
                  Дата/время получения заявки от клиента:
                </div>
                <div className="col">{formatDate}</div>
              </div>
              <div className="row mt-3">
                <div className="col">Наименование клиента:</div>
                <div className="col">{currentTransitInfo.clientName}</div>
              </div>
              <div className="row mt-3">
                <div className="col">ФИО перевозчика:</div>
                <div className="col">{currentTransitInfo.carrierFullName}</div>
              </div>
              <div className="row mt-3">
                <div className="col">Телефон перевозчика:</div>
                <div className="col">{currentTransitInfo.carrierPhone}</div>
              </div>
              <div className="row mt-3">
                <div className="col">Комментарий:</div>
                <div className="col">{currentTransitInfo.comments}</div>
              </div>
              <div className="row mt-3">
                <div className="col">ATI-код перевозчика:</div>
                <a
                  href={atiLink}
                  target="_blank"
                  rel="noreferrer"
                  className="col">
                  {currentTransitInfo.atiCode}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
