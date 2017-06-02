import React, {Component} from 'react'  
import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        const {userInfo, actions} = this.props
 
        let divstyle = {
            width: '100%',
            border: 'none',
            height: '510px'
        }
        return (
            <div className={styles.app}>
                <iframe  src="http://localhost:3001/"  style={divstyle}/>
            </div>
        )
    }
}

export default App
