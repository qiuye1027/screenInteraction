import React, {Component} from 'react'
import styles from '../sass/App'

class ClientList extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
    
      

        
    }

    render() {
        return (
             
            <div className="container"> 
              <h2 className="ui center aligned header"> 终端列表 </h2>



              <div className="ui three column grid" id="indexList">

               <div className="column">
                 
                 <a href="singleClient" className="ui medium images">
                  <img src="/images/photo.jpg" />
                  <h3 className="ui header">终端1</h3>
                </a>
                
              </div>
               <div className="column">
                 
                 <a href="singleClient" className="ui medium images">
                  <img src="/images/photo.jpg" />
                  <h3 className="ui header">终端2</h3>
                </a>
                
              </div>
               <div className="column">
                 
                 <a href="singleClient" className="ui medium images">
                  <img src="/images/photo.jpg" />
                  <h3 className="ui header">终端3</h3>
                </a>
                
              </div>
               <div className="column">
                 
                 <a href="singleClient" className="ui medium images">
                  <img src="/images/photo.jpg" />
                  <h3 className="ui header">终端4</h3>
                </a>
                
              </div>




              </div>
          </div>
        )
    }
}

export default ClientList
