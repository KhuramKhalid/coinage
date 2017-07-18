/* core imports */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Currencies extends React.PureComponent {

    componentDidMount() {
        this.props.getTicker();
    }

    render() {
        return (
            <div id="Currencies">
                <h1>Test</h1>
            </div>
        )
    }
}

export default Currencies;