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

      let {width,height,bg,href,ID,programArrIndex,removeProgrameItems,programArr} = this.props;

      let btnStyle = {  
            width: width + 'px',  
            height: height + 'px',
            display:'block',
            border: '1px solid #333',
            'textAlign': 'center',
            'lineHeight': height + 'px',
            'borderRadius': '5px',
            'backgroundImage': 'url('+ bg +')',
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'center',
            'backgroundSize': 'cover',
            position: 'absolute',
        },
        closeStyle = {
            'display': this.state.DISPLAYS,
            'width': '15px',
            'height': '15px',
            'color': '#db2828',
            'position': 'absolute',
            'right': '-14px',
            'top': '-13px',
            'cursor': 'pointer',
            'fontSize': '12px'
        }

       
      let area = {display:'block',width:width,height:height} 

      
        return (
          
          <div  className='Plugin' style={area} data-styleId={this.state.styleId} data-programArrIndex={programArrIndex} onMouseOver={this.showClose.bind(this)} onMouseOut={this.hideClose.bind(this)}>
            <a href={href} style={btnStyle}></a>
            <div class="close" style={closeStyle} onClick={this.props.removeProgrameItems}>X</div>
          </div>        
        )
    }
}

export default btn
