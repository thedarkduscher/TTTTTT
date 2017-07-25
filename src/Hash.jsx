const React = require('react');
const ReactDOM = require('react-dom');

const Cell = require('./Cell.jsx');

class Hash extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let d = this.d.bind(this);

        return (
            <div className="hash" onClick={() => this.props.clicked(this.props.num)}>
                <div className="top left">{d(0, 0)}</div>
                <div className="top center">{d(1, 0)}</div>
                <div className="top right">{d(2, 0)}</div>

                <div className="middle left">{d(0, 1)}</div>
                <div className="middle center">{d(1, 1)}</div>
                <div className="middle right">{d(2, 1)}</div>

                <div className="bottom left">{d(0, 2)}</div>
                <div className="bottom center">{d(1, 2)}</div>
                <div className="bottom right">{d(2, 3)}</div>
            </div>
        );
    }

    d(x, y) {
        return this.props.data[x][y];
    };
}

module.exports = Hash;
