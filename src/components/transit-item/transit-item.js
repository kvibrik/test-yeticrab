import React, { Component } from 'react';
import moment from 'moment';

import './transit-item.css';

export default class TransitItem extends Component {
  render() {
    const { id, date, clientName, atiCode } = this.props;
    const formatDate = moment(new Date(date)).format('YYYY.MM.DD HH:mm');
    const atiLink = `https://ati.su/firms/${atiCode}/info`;

    return (
      <tr>
        <td>{id}</td>
        <td>{formatDate}</td>
        <td>{clientName}</td>
        <td>
          <a href={atiLink} target="_blank" rel="noreferrer">
            {atiCode}
          </a>
        </td>
        <td>
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-info-circle-fill text-primary pointer"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-pencil-square text-success pointer ml-3"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-x-circle-fill text-danger pointer ml-3"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
            />
          </svg>
        </td>
      </tr>
    );
  }
}
