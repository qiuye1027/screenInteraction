import React, {Component} from 'react'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
    
      $('a#copy-apiKey').zclip({
        path:'javascript/ZeroClipboard.swf',
        copy:function(){return $('input#apiKey').val();}
      });
        
    }

    render() {
        return (
             
            <div className="container">
           
              <div className="pageHeader">
                <div className="segment">
                  <h3 className="ui dividing header">
                      <i className="large home icon"></i>
                      <div className="content">
                        管理首页
                      <div className="sub header">快速查看和编辑</div>
                      </div>
                  </h3>
                </div>
              </div>
              
               <div className="ui small message" id="showApiKey">
                   <div className="ui form segment">
                        <div className="inline field"> 
                            <div className="ui text menu left"> 
                              <div className="ui left dropdown item">筛选 <i className="dropdown icon"></i> <div className="menu">
                                  <div className="item">Applications</div>
                                  <div className="item">International Students</div>
                                  <div className="item">Scholarships</div>
                                </div>
                              </div>
                            </div>
                            


                            <a className="ui small green right icon button" href="./devices_list.html"> 刷新终端 </a> 
                            <a className="ui small blue icon right button" href="./devices_list.html"> 播放日志 </a>
                            <a className="ui small yellow icon right button" href="./devices_list.html"> 监控终端 </a>
                            
                        </div>
                  </div>
              </div>
            
            <div className="ui three column grid" id="indexList">
              <div className="row">
                <div className="column">
                  <div className="ui blue segment">
                    <a href="./device.html" className="content">
                      <h4 className="deviceName">设备名01</h4>
                      <p className="deviceId">设备ID：234</p>
                      <p className="deviceDescription">这里是设备描述。</p>
                      <p className="sensorStatus">传感器状态：
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui red error label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                      </p>
                    </a>
                  </div>
                </div>
                <div className="column">
                  <div className="ui blue segment">
                    <a className="content" href="#">
                      <h4 className="deviceName">设备名02</h4>
                      <p className="deviceId">设备ID：4354</p>
                      <p className="deviceDescription">这里是设备描述。</p>
                      <p className="sensorStatus">传感器状态：
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                      </p>
                    </a>
                  </div>
                </div>
                <div className="column">
                  <div className="ui blue segment">
                    <a className="content" href="#">
                      <h4 className="deviceName">设备名03</h4>
                      <p className="deviceId">设备ID：344</p>
                      <p className="deviceDescription">这里是设备描述。</p>
                      <p className="sensorStatus">传感器状态：
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                          <span className="ui green ok label" ></span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <div className="ui blue segment">
                    <a className="content" href="./add.html">
                      <h4 className="newDevice"><i className="huge add icon"></i>
                      添加新设备</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default SectionMain
