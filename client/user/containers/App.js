import React, {Component} from 'react' 
import KpiTree from '../components/KpiTree'
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {userInfo, actions} = this.props

        return (
            <div className={styles.app}>
                <KpiTree userInfo={userInfo} actions={actions}></KpiTree>
            </div>
        )
    }
}

export default App
