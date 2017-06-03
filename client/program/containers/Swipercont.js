import React, {Component} from 'react'
import styles from '../sass/App'  
import utils from '../../shared/utils'
 

class Swipercont extends Component {
    constructor() {
        super()
        
    }
    componentDidMount() {
      utils.ajax({url: '/api/savePlugin',data:this.props}).then(re => {})

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

      let {width,height,datalist} = this.props



      let swipeStyle = {  
            width:width + 'px',  
            height:height + 'px'
        };
      let imgstyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        height: '100%',
        transform: 'translate(-50%,-50%)'
      }
 

 
        return (
          
        <div className="swiper-container Plugin" ref="container" style={swipeStyle}>
          <div className="swiper-wrapper">
          {
            datalist.map(function (item) {
                return (
                   <div className="swiper-slide"><img src={item}  style={imgstyle}/></div>
                )})
          }
            
            
          </div>
          <div className="swiper-pagination"></div>
   
        </div>      
        )
    }
}

export default Swipercont
