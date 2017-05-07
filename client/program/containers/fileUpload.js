import React, {Component} from 'react'
import styles from '../sass/App'

class FileUpload extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
      $(".filechose").click(function(){
        $(".chosepath").html("你选择的素材为："+$(this).html())
        $("#chosepath").val($(this).html())
        
      })
         
    }

    render() {
        return (
              
            <div className="ui list">
            <input type="hidden" id="chosepath" />
             <div className="right chosepath">--</div>
              <div className="item">
                <i className="folder icon"></i>
                <div className="content">
                  <div className="header">src</div>
                  <div className="list">
                    <div className="item">
                      <i className="folder icon"></i>
                      <div className="content">
                        <div className="header">site</div>
                      </div>
                    </div>
                    <div className="item">
                      <i className="folder icon"></i>
                      <div className="content">
                        <div className="header">themes</div>
                        <div className="list">
                            
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <i className="file icon"></i>
                      <div className="content">
                        <div className="header"><a className="filechose">theme.config</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="item">
                <i className="file icon"></i>
                <div className="content">
                  <div className="header">semantic.json</div>
                </div>
              </div>
            </div> 
          
        )
    }
}

export default FileUpload
