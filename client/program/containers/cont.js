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

       let _this = this
      utils.ajax({url: '/api/savePlugin',data:this.props}).then(re => {
 
        _this.setState({styleId : re[0].ID})
      })
    }
     showClose() {
      this.setState({DISPLAYS : 'block'})
    }
    hideClose() {
      this.setState({DISPLAYS : 'none'})
    }
    render() {

      let {width,height,cont,path,type,ID,programArrIndex,removeProgrameItems} = this.props,
          Style = {  
            width:width + 'px',  
            height:height + 'px', 
           
            position:'absolute',
            top:10,
            left:10 
          },
           closeStyle = {
            'display': this.state.DISPLAYS,
            'width': '15px',
            'height': '15px',
            'color': '#db2828',
            'position': 'absolute',
            'right': '-10px',
            
            'cursor': 'pointer',
            'fontSize': '12px'
        },
          eleStyle = {
            width:'100%', 
            position:'absolute',
            left:'50%',
            top:'50%',
            transform:'translate(-50%,-50%)'
          };

          
          return(
            <div style={Style} className='Plugin'  data-styleId={this.state.styleId} data-programArrIndex={programArrIndex} onMouseOver={this.showClose.bind(this)} onMouseOut={this.hideClose.bind(this)}>
              {!({type}['type'][0]) ? <div></div> : <VideoEle type={type} path={path} style={eleStyle} />}
              <p>{cont}</p>
              <div  style={closeStyle} onClick={this.props.removeProgrameItems.bind(this)}>X</div>
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