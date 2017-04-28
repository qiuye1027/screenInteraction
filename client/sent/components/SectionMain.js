import React, {Component} from 'react'

import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        $('.newareacent.modal').modal('attach events','.newarea','show');

        
    }

 




    render() {
        

        return (
            <div className="container">
              
               
                <div className={styles.clientArea}>
                    <div className="ui form">
                      <div className="grouped fields">
                        <label>当前工作中的终端</label>


                        <div className="ui grid">
                          <div className="four wide column">
                            <div className="ui checkbox">
                                <input type="checkbox" name="example1"  />
                                <label>Once a week</label>
                              </div>
                          </div>
                          <div className="four wide column">
                            <div className="ui checkbox">
                                <input type="checkbox" name="example1"  />
                                <label>Once a week</label>
                              </div>
                          </div>
                          <div className="four wide column">
                            <div className="ui checkbox">
                                <input type="checkbox" name="example1"  />
                                <label>Once a week</label>
                              </div>
                          </div>
                          <div className="four wide column">
                            <div className="ui checkbox">
                                <input type="checkbox" name="example1"  />
                                <label>Once a week</label>
                              </div>
                          </div>
                         <div className="four wide column">
                            <div className="ui checkbox">
                                <input type="checkbox" name="example1"  />
                                <label>Once a week</label>
                              </div>
                          </div>
                         
                        </div>

                    
                        





                      </div>
                    </div>
                </div>

                 <div className={styles.programBtn}>
                    <div className="ui vertical basic buttons">
                      <button className="ui button">发送任务</button>
                      <button className="ui button newarea">发送命令</button>
                      <button className="ui button">发送插播</button>
                      <button className="ui button">发送配置</button>
                    </div>
                </div>



                <div className="ui fullscreen newareacent modal transition hidden">
                    <i className="close icon"></i>
                    <div className="header">区域设置</div>
                    <div className="content">
                      <div className="ui form">
                        
                        <div className="field">
                          <label>区域属性</label> 
                          <div className="ui grid">
                              <div className=" four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div>
                              <div className=" four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div>
                              <div className=" four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div> 
                              <div className="four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div> 
                            </div>

                            <label>交互属性</label> 
                            <div className="ui grid">
                              <div className=" four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div>
                              <div className=" four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div>
                              <div className=" four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div> 
                              <div className="four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div> 
                            </div> 

                        </div>
                        
                      </div>
                    </div>
                    <div className="actions">
                      <div className="ui button">Cancel</div>
                      <div className="ui green button">Send</div>
                    </div>
                  </div>


                
            </div>
        )
    }
}

export default App

 