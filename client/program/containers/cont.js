import React, {Component} from 'react' 
import utils from '../../shared/utils'

class btn extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
     utils.ajax({url: '/api/savePlugin',data:this.props}).then(re => {})
        
    }

    render() {

      let {width,height,cont,path,type,ID} = this.props

      let Style = {  
            width:width,  
            height:height,
             
        }; 

      
        return (
          
          <div style={Style} className='Plugin'>
            <img src={path} />
            <p>{cont}</p>
          </div>        
        )
    }
}

export default btn
