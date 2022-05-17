import React from 'react';
import './widgetLG.css';

function Button({ type }) {
  return <button className={`widgetLGButton ${type}`}> {type} </button>;
}

export default function WidgetLG() {
  return (
    <div className="widgetLG">
      <h3 className="widgetLGTitle">Latest Transaction</h3>
      <table className="widgetLGTable">
        <thead>
          <tr className="widgetLGTr">
            <th className="widgetLGTh">Customer</th>
            <th className="widgetLGTh">Date</th>
            <th className="widgetLGTh">Amount</th>
            <th className="widgetLGTh">States</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLGTr">
            <td className="widgetLGUser">
              <img
                className="widgetLGImg"
                src="https://picsum.photos/300/300?random=100"
                alt=""
              />
              <span className="widgetLGUserName">Moz Yen</span>
            </td>
            <td className="widgetLGDate">13 Dec 1989</td>
            <td className="widgetLGAmount">$145.00</td>
            <td className="widgetLGStates">
              <Button type={'Approved'} />
            </td>
          </tr>
          <tr className="widgetLGTr">
            <td className="widgetLGUser">
              <img
                className="widgetLGImg"
                src="https://picsum.photos/300/300?random=101"
                alt=""
              />
              <span className="widgetLGUserName">Moz Yen</span>
            </td>
            <td className="widgetLGDate">13 Dec 1989</td>
            <td className="widgetLGAmount">$145.00</td>
            <td className="widgetLGStates">
              <Button type={'Rejected'} />
            </td>
          </tr>
          <tr className="widgetLGTr">
            <td className="widgetLGUser">
              <img
                className="widgetLGImg"
                src="https://picsum.photos/300/300?random=102"
                alt=""
              />
              <span className="widgetLGUserName">Moz Yen</span>
            </td>
            <td className="widgetLGDate">13 Dec 1989</td>
            <td className="widgetLGAmount">$145.00</td>
            <td className="widgetLGStates">
              <Button type={'Pending'} />
            </td>
          </tr>
          <tr className="widgetLGTr">
            <td className="widgetLGUser">
              <img
                className="widgetLGImg"
                src="https://picsum.photos/300/300?random=103"
                alt=""
              />
              <span className="widgetLGUserName">Moz Yen</span>
            </td>
            <td className="widgetLGDate">13 Dec 1989</td>
            <td className="widgetLGAmount">$145.00</td>
            <td className="widgetLGStates">
              <Button type={'Approved'} />
            </td>
          </tr>
          <tr className="widgetLGTr">
            <td className="widgetLGUser">
              <img
                className="widgetLGImg"
                src="https://picsum.photos/300/300?random=104"
                alt=""
              />
              <span className="widgetLGUserName">Moz Yen</span>
            </td>
            <td className="widgetLGDate">13 Dec 1989</td>
            <td className="widgetLGAmount">$145.00</td>
            <td className="widgetLGStates">
              <Button type={'Rejected'} />
            </td>
          </tr>
          <tr className="widgetLGTr">
            <td className="widgetLGUser">
              <img
                className="widgetLGImg"
                src="https://picsum.photos/300/300?random=105"
                alt=""
              />
              <span className="widgetLGUserName">Moz Yen</span>
            </td>
            <td className="widgetLGDate">13 Dec 1989</td>
            <td className="widgetLGAmount">$145.00</td>
            <td className="widgetLGStates">
              <Button type={'Pending'} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
