import React, {Component} from 'react'
import styles from '../sass/App' 

class SectionMain extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
    
      $('.menu .item').tab()
  
        
    }

    render() {
        return (
             
            <div className="container"> 
              <div className="ui top attached tabular menu">
                <a className="item active" data-tab="first">终端</a>
                <a className="item" data-tab="second">分组</a> 
              </div>
              <div className="ui bottom attached tab segment active" data-tab="first"> 
                <div className="field">
                  <label className={styles.shaixuan}>筛选</label>
                  <div className="ui dropdown selection"> 
                    <div className="default text">IP</div>
                    <span><i className="dropdown icon"></i></span>
                    
                    <div className="menu">
                      <div className="item active" data-value="IP">IP</div>
                      <div className="item" data-value="室外">室外</div>
                    </div>
                  </div>

                   <div className="ui buttons right">
                    <a className="ui button red" href="clientList">监控终端</a>
                    <a className="ui button blue" href="javascript:history.go(0)">播放日志</a>
                    <a className="ui button green" href="javascript:history.go(0)">刷新终端</a>
                  </div> 
                </div> 
               


                <div className="ui three column grid" id="indexList">
                 
                    <div className="column">
                      <div className="ui blue segment">
                        <a href="singleClient" className="content">
                          <h4 className="deviceName">设备名01</h4>
                          <p className="deviceId">设备ID：234</p>
                          <p className="deviceDescription">这里是设备描述。</p>
                         <div className="ui mini statistics">
                            <div className="statistic">
                              <div className="value">
                                2,206M
                              </div>
                              <div className="label">已用空间</div>
                            </div> 
                            <div className="statistic">
                              <div className="value">
                                2G
                              </div>
                              <div className="label">可用空间</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column">
                      <div className="ui blue segment">
                        <a className="content" href="#">
                          <h4 className="deviceName">设备名02</h4>
                          <p className="deviceId">设备ID：4354</p>
                          <p className="deviceDescription">这里是设备描述。</p>
                          <div className="ui mini statistics">
                            <div className="statistic">
                              <div className="value">
                                2,206M
                              </div>
                              <div className="label">已用空间</div>
                            </div> 
                            <div className="statistic">
                              <div className="value">
                                2G
                              </div>
                              <div className="label">可用空间</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column">
                      <div className="ui blue segment">
                        <a className="content" href="#">
                          <h4 className="deviceName">设备名03</h4>
                          <p className="deviceId">设备ID：344</p>
                          <p className="deviceDescription">这里是设备描述。</p>
                         <div className="ui mini statistics">
                            <div className="statistic">
                              <div className="value">
                                2,206M
                              </div>
                              <div className="label">已用空间</div>
                            </div> 
                            <div className="statistic">
                              <div className="value">
                                2G
                              </div>
                              <div className="label">可用空间</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column">
                      <div className="ui blue segment">
                        <a className="content" href="#">
                          <h4 className="deviceName">设备名03</h4>
                          <p className="deviceId">设备ID：344</p>
                          <p className="deviceDescription">这里是设备描述。</p>
                         <div className="ui mini statistics">
                            <div className="statistic">
                              <div className="value">
                                2,206M
                              </div>
                              <div className="label">已用空间</div>
                            </div> 
                            <div className="statistic">
                              <div className="value">
                                2G
                              </div>
                              <div className="label">可用空间</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div> 
                   <div className="column">
                    <div className="ui    ">
                      <a className="content" href="./add.html">
                        <h4 className="newDevice"><i className="huge add icon"></i>
                        添加新设备</h4>
                      </a>
                    </div>
                  </div>
              
                </div>




              </div>
              <div className="ui bottom attached tab segment" data-tab="second">
                 <div className="ui three column grid"  id="indexList">
                  <div className="column">
                      <div className="ui blue segment ">
                        <a className="content"  >
                          <h4 className="deviceName">组名03</h4> 
                          <p className=" ">这里是设备描述。</p>
                          <p className=" ">电源规则</p>
                          <h4 className="deviceName">包含终端：<a className="right button ui mini">操作</a></h4> 
                         <div className="ui mini statistics">
                            <div className="statistic">
                               <div className="ui compact menu">
                                  <a className="item">
                                     终端1 <i className="icon delete"></i>
                                  </a>
                                </div>
                            </div> 
                            <div className="statistic">
                               <div className="ui compact menu">
                                  <a className="item">
                                     终端2 <i className="icon delete"></i>
                                  </a>
                                </div>
                            </div>

                            <div className="statistic">
                               <div className="ui compact menu">
                                  <a className="item">
                                     终端2 <i className="icon "></i>
                                  </a>
                                </div>
                            </div> 

                            <div className="statistic"><a className="ui button"><i className="icon plus"></i></a></div> 


                          </div>
                        </a>
                      </div>
                    </div> 

                     <div className="column">
                      <div className="ui    ">
                        <a className="content" href="./add.html">
                          <h4 className="newDevice"><i className="huge add icon"></i>
                          添加分组</h4>
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
