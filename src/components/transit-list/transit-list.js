import React from 'react';

import TransitItem from '../transit-item';

const TransitList = ({ transitList }) => {
  const elements = transitList.map(item => {
    const { id, ...itemProps } = item;

    return <TransitItem key={id} id={id} {...itemProps} />;
  });

  return (
    <table className="table table-hover mt-4">
      <thead>
        <tr>
          <th>Номер заявки</th>
          <th>Дата/время</th>
          <th>Клиент</th>
          <th>ATI код перевозчика</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
};
export default TransitList;
