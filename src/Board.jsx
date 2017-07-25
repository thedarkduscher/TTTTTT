const React = require('react');
const ReactDOM = require('react-dom');

const Cell = require('./Cell.jsx');
const Hash = require('./Hash.jsx');

class Board extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let hashes = new Array();

        for(let i = 0 ; i < 9; i++) {
            hashes.push(<Hash key={i} data={[
                    ['x', 'x', 'o'],
                    ['x', 'x', 'o'],
                    ['o', '', ''],
            ]} num={i} clicked={(key) => console.log(key)}/>);
        }

        return (
            <div className="board">
                {hashes}
            </div>
        );
    }
}

module.exports = Board;
