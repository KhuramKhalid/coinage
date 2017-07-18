import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/ActionCreator';

import RootApp from './RootApp';

function mapStateToProps(state) {
    return {
        currencies: state.currencies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const AppBinder = connect(mapStateToProps, mapDispatchToProps)(RootApp);

export default AppBinder;