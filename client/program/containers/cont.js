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

      let {width,height,cont,path,type,ID} = this.props,
          Style = {  
            width:width + 'px',  
            height:height + 'px',     
          },
          ele=({type}==1)?<video src={path} controls='controls'/>:<img src={path} />;
          return(
            <div style={Style} className='Plugin'>
              {ele}
              <p>{cont}</p>
            </div>
          )
    }
}

export default btn