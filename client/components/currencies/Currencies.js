/* core imports */
import React from 'react';

import CurrenciesTable from './CurrenciesTable';
import AddCurrency from './AddCurrency';

class Currencies extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <div>

                {/* all currencies */}
                <CurrenciesTable {...this.props} />

                {/* add currency button */}
                <AddCurrency {...this.props} />

            </div>
        )
    }
}

export default Currencies;