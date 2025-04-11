class HandDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hand: [],
        };
    }

    updateHand(newHand) {
        this.setState({ hand: newHand });
    }

    render() {
        return (
            <div className="hand-display">
                <h2>Current Poker Hand</h2>
                <ul>
                    {this.state.hand.map((card, index) => (
                        <li key={index}>{card}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default HandDisplay;