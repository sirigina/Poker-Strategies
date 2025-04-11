import React from 'react';

class StrategyTips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tips: []
        };
    }

    componentDidMount() {
        this.fetchTips();
    }

    fetchTips() {
        // Sample tips for poker strategies
        const sampleTips = [
            "Play tight and aggressive.",
            "Know when to fold.",
            "Pay attention to your opponents.",
            "Position is key in poker.",
            "Don't chase losses."
        ];
        this.setState({ tips: sampleTips });
    }

    render() {
        return (
            <div className="strategy-tips">
                <h2>Strategy Tips</h2>
                <ul>
                    {this.state.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default StrategyTips;