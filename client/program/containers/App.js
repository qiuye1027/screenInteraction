import React, {Component} from 'react'

import styles from '../sass/App'
import utils from '../../shared/utils' 
class App extends Component {
    constructor() {
        super()

        this.state = {
           folderlists:'<div class="item"> <div class="content"> <div class="header">没有文件</div> </div> </div>'　,
           bapic : ''
           
           
        }
    }
    componentDidMount() {
      let _this = this;
        $('.newareacent.modal').modal('attach events','.newarea','show');

        $( ".App__content__ZN0n6XZn" ).draggable({ 
            containment: ".App__programArea__1KiBa8n0", 
            scroll: false ,
            stack: ".App__content__ZN0n6XZn"
          });
      this.setState({bapic:'images/devicedomo01.jpg'}, ()=>{
        
        $(".App__programArea__1KiBa8n0").css('backgroundImage','url("'+_this.state.bapic+'")')
      })

 
      findFile('',_this)
      
      
    }

 




    render() {
        

        return (
            <div className="container">
                <div className="ui buttons teal small"> 
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
                    <div className="ui vertical teal buttons">
                      <button className="ui button newprogram">新建节目</button>
                      
                      <button className="ui button newarea">新建交互区域</button>
                      <button className="ui button  ">页面列表</button>
                      <button className="ui button perview">预览</button>
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

                     <div  className={styles.content}>
                        <div className={styles.testDiv} >
                          <div className={styles.innerNice} > 
                            <p >本特效由 收集于互联网，只为兴趣与学习交流，不作商业用途。</p> 
                          </div>
                        </div>
                    </div>
                    
                </div> 
                <div className="ui list" dangerouslySetInnerHTML={{__html:this.state.folderlists}}></div>

                <embed src="/fileupload/test.pdf" />



                <div className="ui fullscreen newareacent modal transition hidden">
                    <i className="close icon"></i>
                    <div className="header">区域设置</div>
                    <div className="contents">
                      <div className="ui form">
                        
                        <div className="field">
                          <label>区域属性</label> 
                          <div className="ui grid">
                              <div className=" four wide column">
                                <label>动作名</label>
                                <div className="ui small left labeled icon input">  
                                        
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



function findFile(path,_this){
   let datas = {}; 
  datas.path = "/"+path;
   utils.ajax({url: '/api/programFileList',data:datas}).then(re => {
    let str = ''
     for(let i of re){
       str += '<div class="item fileitem">';
       str += '<i class="file icon"></i>'
       str += '<div class="content">'
       str += '<div class="header">'+i.name+'</div>' 
       str += '</div>'
       str += '</div>'
     }

      _this.setState({folderlists:str})

      $(".fileitem").click(function(){
 
        findFile($(this).find(".header").html(),_this)
      })

   }) 


} 