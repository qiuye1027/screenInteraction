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

      let {width,height,bg,href,ID} = this.props;

      let btnStyle = {  
            width:width + 'px',  
            height:height + 'px',
            display:'block',
            border: '1px solid #333',
            'textAlign': 'center',
            'lineHeight': height + 'px',
            'borderRadius': '5px',
            'backgroundImage': 'url('+ bg +')',
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'center',
            'backgroundSize': 'cover',

        }; 

       
      let area = {display:'block',width:width} 

      
        return (
          
          <div  className='Plugin' style={area}>
            <a href={href} style={btnStyle}></a>
          </div>        
        )
    }
}

export default btn
