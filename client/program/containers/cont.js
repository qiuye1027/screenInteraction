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
            overflow:'hidden'   
          },
          eleStyle = {
            width:'100%', 
            position:'absolute',
            left:'50%',
            top:'50%',
            transform:'translate(-50%,-50%)'
          };
          return(
            <div style={Style} className='Plugin'>
              {!({type}['type'][0]) ? <div></div> : <VideoEle type={type} path={path} style={eleStyle} />}
              <p>{cont}</p>
            </div>
          )
    }
}

class VideoEle extends Component {
    constructor() {
        super()
    };
    render()  {
      let vd=<video src={this.props.path} controls="controls" style={this.props.style}></video>,
          img=<img src={this.props.path} style={this.props.style} />,
          types=this.props.type[0],
          sw=true;
          if(types==1){
            sw=true
          }else{
            sw=false
          }
      return (
         sw ? vd : img
      )
    }
}
export default btn