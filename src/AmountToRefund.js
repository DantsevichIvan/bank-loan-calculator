import React from 'react';
import './AmountToRefund.scss'


class AmountToRefund extends React.Component {
    render() {
        return (
            <div className="resultWrap">
                <div className='result'>К возврату: <span>${this.props.resultCredit.toFixed(2)}</span>
                    <span> ({(this.props.resultCredit*this.props.rate$).toFixed(2)} бел.руб.)</span></div>
            </div>
        );
    }
}

export default AmountToRefund;