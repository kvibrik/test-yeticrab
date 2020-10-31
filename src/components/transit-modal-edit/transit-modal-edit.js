import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';

import './transit-modal-edit.css';

export default class TransitEditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transit: this.props.currentTransitInfo,
      transitId: this.props.transitId,
    };

    this.onItemChange = (value, field) => {
      this.setState(({ transit }) => {
        const newTransit = { ...transit };
        newTransit[field] = value;

        return {
          transit: newTransit,
        };
      });
    };

    this.onNameChange = e => {
      this.onItemChange(e.target.value, 'clientName');
    };
    this.onDateChange = date => {
      this.setState(({ transit }) => {
        const newTransit = { ...transit };
        newTransit.date = date;

        return {
          transit: newTransit,
        };
      });
    };
    this.onCarrierFullNameChange = e => {
      this.onItemChange(e.target.value, 'carrierFullName');
    };
    this.onCarrierPhoneChange = e => {
      this.onItemChange(e.target.value, 'carrierPhone');
    };
    this.onCommentsChange = e => {
      this.onItemChange(e.target.value, 'comments');
    };
    this.onAtiChange = e => {
      this.onItemChange(e.target.value, 'atiCode');
    };

    this.onSubmit = e => {
      e.preventDefault();
      const { transit } = this.state;
      console.log(transit);
      this.props.onTransitEdit(transit);
      this.setState({
        transit: {
          atiCode: '',
          carrierFullName: '',
          carrierPhone: '',
          clientName: '',
          comments: '',
          date: '',
          id: '',
        },
      });
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentTransitInfo.id !== state.transitId) {
      return {
        transitId: props.currentTransitInfo.id,
        transit: props.currentTransitInfo,
      };
    }
    return null;
  }

  render() {
    const { transitEdit, onEditClose } = this.props;
    const { transit } = this.state;

    // добавление класса, когда открывается модалка
    let classNames = 'transit-edit modal';
    if (transitEdit) {
      classNames += ' d-block';
    }

    return (
      <div className={classNames}>
        <div className="transit-edit__body modal-body">
          <form
            className="transit-edit__content modal-content"
            onSubmit={this.onSubmit}>
            <svg
              width="1.3em"
              height="1.3em"
              viewBox="0 0 16 16"
              className="bi bi-x-circle-fill text-danger close pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onEditClose}>
              <path
                fillRule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
              />
            </svg>
            <h4>Редактирование заявки № {transit.id}</h4>
            <div className="mt-2 row align-items-center">
              <div className="col">
                <label htmlFor="date" className="form-label">
                  Дата/время получения заявки от клиента:
                </label>
              </div>
              <div className="col">
                <DatePicker
                  required
                  selected={transit.date}
                  dateFormat="yyyy.MM.dd HH:mm"
                  showTimeSelect
                  timeIntervals="15"
                  locale={ru}
                  className="form-control"
                  onChange={this.onDateChange}
                />
              </div>
            </div>
            <div className="mt-2 row align-items-center">
              <div className="col">
                <label htmlFor="client-name" className="form-label">
                  Наименование клиента:
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="client-name"
                  value={transit.clientName}
                  onChange={this.onNameChange}
                />
              </div>
            </div>
            <div className="mt-2 row align-items-center">
              <div className="col">
                <label htmlFor="carrier-name" className="form-label">
                  ФИО перевозчика:
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="carrier-name"
                  value={transit.carrierFullName}
                  onChange={this.onCarrierFullNameChange}
                />
              </div>
            </div>
            <div className="mt-2 row align-items-center">
              <div className="col">
                <label htmlFor="carrier-phone" className="form-label">
                  Телефон перевозчика:
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="carrier-phone"
                  value={transit.carrierPhone}
                  onChange={this.onCarrierPhoneChange}
                />
              </div>
            </div>
            <div className="mt-2 row align-items-center">
              <div className="col">
                <label htmlFor="comments" className="form-label">
                  Комментарий:
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="comments"
                  value={transit.comments}
                  onChange={this.onCommentsChange}
                />
              </div>
            </div>
            <div className="mt-2 row align-items-center">
              <div className="col">
                <label htmlFor="ati" className="form-label">
                  ATI-код перевозчика:
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="ati"
                  value={transit.atiCode}
                  onChange={this.onAtiChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-25 ml-auto">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    );
  }
}
