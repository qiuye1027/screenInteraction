import React, {Component} from 'react'
import styles from '../sass/App'

import Swiper from 'react-id-swiper';

class ClientList extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
    
        
    }

    render() {

      let {width,height} = this.props

      let swipeStyle = {  
            width:width,  
            height:height 
        };  

           // swipes 的配置
         let params = {
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
          }
        return (
          
          <div className={styles.swipercont} style={swipeStyle}>
            <Swiper {...params}>
              <div>Slide 1</div>
              <div>Slide 2</div>
              <div>Slide 3</div>
              <div>Slide 4</div>
              <div>Slide 5</div>
            </Swiper>
          </div>        
        )
    }
}

export default ClientList