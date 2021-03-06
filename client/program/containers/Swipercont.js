import React, {Component} from 'react'
import styles from '../sass/App'  
import utils from '../../shared/utils'
 

class Swipercont extends Component {
    constructor() {
        super()
        this.state = { 
           styleId : '',
          DISPLAYS : 'none'
        } 
        
    }

    showClose() {
      this.setState({DISPLAYS : 'block'})
    }
    hideClose() {
      this.setState({DISPLAYS : 'none'})
    }

    componentDidMount() {

      let _this = this

      utils.ajax({url: '/api/savePlugin',data:this.props}).then(re => {
 
        _this.setState({styleId : re[0].ID})
      })

      const Swiper = require('swiper');
      const swiper = new Swiper(this.refs.container,            
         {
            pagination: '.swiper-pagination',
            paginationClickable: true,
           // nextButton: '.swiper-button-next',
           // prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            loop: true,
            runCallbacksOnInit: true,
            //initialSlide:1,
            //autoplay:1300,
            onInit: (swiper) => {
              this.swiper = swiper
            }
          });
        
    }

    render() {

      let {width,height,datalist,programArrIndex} = this.props



      let swipeStyle = {  
            width:width + 'px',  
            height:height + 'px',
            position:'absolute',
            top:10,
            left:10
        };
      let imgstyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        height: '100%',
        transform: 'translate(-50%,-50%)'
      },
       closeStyle = {
            'display': this.state.DISPLAYS,
            'width': '15px',
            'height': '15px',
            'color': '#db2828',
            'position': 'absolute',
            'right': '-14px',
            'top': '-5px',
            'cursor': 'pointer',
            'fontSize': '12px'
        }
 

 
        return (
         <div className=" Plugin" style={swipeStyle} data-styleId={this.state.styleId} data-programArrIndex={programArrIndex} onMouseOver={this.showClose.bind(this)} onMouseOut={this.hideClose.bind(this)}>   
          <div className="swiper-container " ref="container" >
            <div className="swiper-wrapper">
            {
              datalist.map(function (item,ins) {
 
                  return (
                     <div className="swiper-slide" key={ins}><img src={item}  style={imgstyle}/></div>
                  )})
            }
              
              
            </div>
            <div className="swiper-pagination"></div>
           
          </div>   
           <div style={closeStyle} onClick={this.props.removeProgrameItems.bind(this)}>X</div>
        </div>    
        )
    }
}

export default Swipercont
