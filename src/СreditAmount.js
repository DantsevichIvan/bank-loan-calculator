import React from 'react';
import './App.scss';
import './CreditAmount.scss'


class СreditAmount extends React.Component {

    sizePic = (e) =>{
        let result= e.currentTarget.value
        this.props.setCreditValue(result)
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='description'>
                    <label>Сумма кредита($)</label>
                    <span className=''>{this.props.creditValue}</span>
                </div>
                <input className="e-range" id="loan" type="range" min="0" max="1000" step="100" defaultValue={this.props.creditValue}
                       onInput={this.sizePic}/>
            </div>
        );
    }
}

export default СreditAmount;