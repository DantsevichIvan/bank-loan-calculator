import React from 'react';
import './App.scss';

class Month extends React.Component {
    constructor(props) {
        super(props);
    }

    sizePic = (e) => {
        let result= e.currentTarget.value
        this.props.setMothValue(result)
    };

    render() {
        return (
            <div className='wrapper'>
                <div className='description'>
                    <label>Количество месяцев</label>
                    <span className=''>{this.props.mothValue}</span>
                </div>
                <input className="e-range" id="loan" type="range" min="1" max="12" step="1"
                       defaultValue={this.props.mothValue}
                       onInput={this.sizePic}/>
            </div>
        );
    }
}

export default Month;