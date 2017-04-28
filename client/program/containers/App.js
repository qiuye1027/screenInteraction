import React, {Component} from 'react'

import styles from '../sass/App'

class App extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        $('.newareacent.modal').modal('attach events','.newarea','show');

        $( "#draggable" ).draggable({ containment: ".App__programArea__1KiBa8n0", scroll: false });
    }

 




    render() {
        

        return (
            <div className="container">
                <div className="ui buttons small">
                  <a className="ui button">新建节目</a>
                  <a className="ui button">打开节目</a>
                  <a className="ui button ">修改节目</a>
                  <a className="ui button ">删除节目</a>
                  <a className="ui button ">保存节目</a>
                  <a className="ui button ">另存节目</a>
                  <a className="ui button ">保存模板</a>
                  <a className="ui button ">加载模板</a>
                  <a className="ui button ">模板管理</a>
                  <a className="ui button ">下载单机节目</a> 
                </div>
                <div className={styles.programBtn}>
                    <div className="ui vertical basic buttons">
                      <button className="ui button">页面列表</button>
                      <button className="ui button newarea">新建交互区域</button>
                      <button className="ui button">预览</button>
                    </div>
                </div>
                <div className={styles.programArea}>
                    <div id="draggable" className={styles.content}>
                        <div className={styles.testDiv} >
                          <div className={styles.innerNice} > 
                            <p >本特效由 收集于互联网，只为兴趣与学习交流，不作商业用途。</p> 
                          </div>
                        </div>
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

 