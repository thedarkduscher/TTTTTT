const React = require('react');
const ReactDOM = require('react-dom');

class Cell extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                width: '33.33%',
                height: '33.33%',
                float: 'left'
            }} onClick={() => this.props.clicked("hallo")}>
                {this.props.checked ? 'x' : ' '}
            </div>
        );
    }
}

module.exports = Cell;
