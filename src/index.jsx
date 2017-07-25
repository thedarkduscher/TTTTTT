const React = require('react');
const ReactDOM = require('react-dom');

require('./style.css');

const Board = require('./Board.jsx');

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Board />;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
