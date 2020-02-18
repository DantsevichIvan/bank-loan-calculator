import React from 'react';
import './App.scss';
import СreditAmount from "./СreditAmount";
import Month from "./Month";
import AmountToRefund from "./AmountToRefund";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creditValue: 0,
            mothValue: 1,
            resultCredit: 0,
            rate$: 0
        }
    }

    componentDidMount() {
        fetch('http://www.nbrb.by/API/ExRates/Rates/145')
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    rate$: data.Cur_OfficialRate
                })
            })
    }

    payment = () =>{
        this.setState({
            resultCredit: Number(this.state.creditValue) + this.state.creditValue * 0.16 / 12 * this.state.mothValue
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.creditValue !== prevState.creditValue) {
            this.payment()

        } else if (this.state.mothValue !== prevState.mothValue) {
            this.payment()
        }
    }

    setCreditValue = (result) => {
        this.setState({creditValue: result})
    }
    setMothValue = (result) => {
        this.setState({mothValue: result})
    }


    render() {
        return (
            <div className="App">
                <div className='wrapper'>
                    <СreditAmount creditValue={this.state.creditValue} setCreditValue={this.setCreditValue}/>
                    <Month mothValue={this.state.mothValue} setMothValue={this.setMothValue}/>
                    <AmountToRefund resultCredit={this.state.resultCredit} rate$={this.state.rate$}/>
                </div>
            </div>
        );
    }
}

export default App;
