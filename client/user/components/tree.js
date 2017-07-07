import React, {Component} from 'react' 
import utils from '../../shared/utils'
class btn extends Component {
    constructor() {
        super()
         this.state = { 
           styleId : '',
           DISPLAYS : 'none'
        } 
    }
    componentDidMount() {
        
    }

    showClose() {
      this.setState({DISPLAYS : 'block'})
    }
    
    hideClose() {
      this.setState({DISPLAYS : 'none'})
    }

    render() {
      
    }
}

export default btn