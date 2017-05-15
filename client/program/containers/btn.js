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

      let {width,height,name,href,ID} = this.props

      let btnStyle = {  
            width:width,  
            height:height,
            display:'block',
            border: '1px solid #333',
            'text-align': 'center',
            'line-height': height,
            'border-radius': '5px'
        }; 

       
      let area = {display:'block',width:width} 

      
        return (
          
          <div  className='Plugin' style={area}>
            <a href={href} style={btnStyle}>{name}</a>
          </div>        
        )
    }
}

export default btn
