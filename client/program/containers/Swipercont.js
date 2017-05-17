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

      let {width,height,ID} = this.props

      let swipeStyle = {  
            width:width,  
            height:height 
        };
     
 

 
        return (
          
         <div className="swiper-container" ref="container" style={swipeStyle}>
        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src="//placehold.it/500x300" /></div>
          <div className="swiper-slide"><img src="//placehold.it/500x300" /></div>
          <div className="swiper-slide"><img src="//placehold.it/500x300" /></div>
        </div>
        <div className="swiper-pagination"></div>
 
      </div>      
        )
    }
}

export default Swipercont
