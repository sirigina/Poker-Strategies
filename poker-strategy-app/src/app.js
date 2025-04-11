import React from 'react';
import ReactDOM from 'react-dom';
import HandDisplay from './components/HandDisplay';
import StrategyTips from './components/StrategyTips';
import './styles.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1>Learn Poker Strategies</h1>
                <HandDisplay />
                <StrategyTips />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));