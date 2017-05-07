import React, {Component} from 'react'
 
import styles from '../sass/App'
 
import FileUpload from './fileUpload'
import Swiper from './Swiper'
 
class App extends Component {
    constructor() {
        super()
        this.state = {
           programAreas:''  
        
        } 

    }
    
    componentDidMount() {
      let _this = this
      //下拉框效果
      $('.menu .item').tab()

      //创建新交互区
        $('.newareacent.modal').modal('attach events','.newarea','show').modal({
          closable  : false, 
          onApprove : function() {
   
            _this.setState({programAreas:_this.state.programAreas + '<div id="draggable" class="contents"><div class="testDiv" ><div class="innerNice" ><p >本特效由 收集于互联网，只为兴趣与学习交流，不作商业用途。</p></div></div></div>'})
            
            //可拖拽
            $( ".contents" ).draggable({ 
              containment: ".App__programArea__1KiBa8n0", 
              scroll: false ,
              stack: ".contents"
            });


          }
        })
 
 
      //创建新节目
        $('.newPergram.modal').modal('attach events', '.newPergram','show').modal({
          closable  : false, 
          onApprove : function() {

            let pergramHight = $(this).find(".hightq").val(),
                pergramWidth = $(this).find(".widthq").val()
   
            $("#container").css({
              'height':pergramHight,
              'width':pergramWidth,
              'backgroundImage':'url(images/devicedomo01.jpg)',
              'background-repeat': 'no-repeat',
              'background-size': 'cover',
              'background-position': 'center center'

            })
    
       

          }
        })
 
        $('.newmodel.modal').modal('attach events','.newmodel','show');

        $('.pagelist.modal').modal('attach events','.pagelist','show');




       


       

 
      findFile('',_this)
      
      
    }
 





    render() {
        // 可移动区域块
        // <div id="draggable" className={styles.content}>
        //                 <div className={styles.testDiv} >
        //                   <div className={styles.innerNice} > 
        //                     <p >本特效由 收集于互联网，只为兴趣与学习交流，不作商业用途。</p> 
        //                   </div>
        //                 </div>
        //             </div>

        //              <div  className={styles.content}>
        //                 <div className={styles.testDiv} >
        //                   <div className={styles.innerNice} > 
        //                     <p >本特效由 收集于互联网，只为兴趣与学习交流，不作商业用途。</p> 
        //                   </div>
        //                 </div>
        //             </div>


    

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
                      <button className="ui button pagelist">页面列表</button>
                      <button className="ui button newarea">新建交互区域</button>
                      <button className="ui button newmodel">创建模板</button>
                      <button className="ui button perview">预览</button>
                    </div>
                </div>
                <div className={styles.programArea}>
                  <div  dangerouslySetInnerHTML={{__html:this.state.programAreas}} id="container"></div>
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
                                <label>交互类型</label>
                               
                                <div className="ui dropdown selection"> 
                                  <div className="default text">幻灯区</div>
                                  <span><i className="dropdown icon"></i></span>
                                  
                                  <div className="menu">
                                    <div className="item active" data-value="IP">幻灯区</div>
                                    <div className="item" data-value="室外">按钮</div>
                                    <div className="item" data-value="室外">内容区</div>
                                  </div>
                                </div>


                              </div>
                              <div className=" four wide column">
                                <label>宽</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div>
                              <div className=" four wide column">
                                <label>高</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="actName" name="actName" /> 
                                </div>
                              </div> 
                              <div className="four wide column">
                                <label>素材</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="file" id="actName" name="actName" /> 
                                </div>
                              </div> 
                            </div>

                            <label>交互属性</label> 
                            <div className="ui grid">
                              <div className=" four wide column">
                                <label></label>
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
                        <div className="ui small negative button">
                               不
                        </div> 
                          <input type="button" value="是"  className="ui small positive button"/> 
                    </div>
                  </div>






                   <div className="ui small  newPergram modal">
                    
                      <div className="header">
                          新建节目
                      </div>
                      <div className="ui form "> 
                          
                        <div className="field">
                          <label>素材名称</label>
                          <div className="two inline fields">
                           
                            <div className="field">
                              高(px)
                              <input type="number" name="hight" className="hightq"/>
                            </div>
                            <div className="inline field">
                              宽(px)
                              <input type="number" name="width" className="widthq" />
                            </div>
                          </div>
                        </div> 
                        <div className="field">
                          <label>背景图片</label>
                         
                           
                            <FileUpload /> 
                           
                        </div>  
                      </div>
                      
                      <div className="actions">
                          <div className="ui small negative button">
                                 不
                          </div> 
                            <input type="button" value="是" className="ui small positive button"/> 
                      </div>
                  </div>




                <div className="ui small  newmodel modal">
                    
                    <div className="header">
                        模板创建
                    </div>
                        <div className="ui form "> 
                         <div className="field">
                            <label>模板类型</label>
                             
                              <div className="ui dropdown selection"> 
                                <div className="default text">按钮交互区</div>
                                <span><i className="dropdown icon"></i></span>
                                
                                <div className="menu">
                                  <div className="item active" data-value="IP">按钮交互区</div>
                                  <div className="item" data-value="室外">左右交互区</div>
                                  <div className="item" data-value="室外">上下三联</div>
                                </div>
                              </div>



                        
                          </div> 
                            
                          <div className="field">
                            <label>模板属性</label>
                            <div className="two inline fields">
                             
                              <div className="field">
                                高
                                <input type="text" name="hight" />
                              </div>
                              <div className="inline field">
                                宽
                                <input type="text" name="weight" />
                              </div>
                            </div>
                          </div> 
                          
                        </div>
                    
                    <div className="actions">
                        <div className="ui small negative button">
                               不
                        </div> 
                          <input type="button" value="是" className="ui small positive button"/> 
                    </div>
                </div>


                <div className="ui small  pagelist modal">
                    
                    <div className="header">
                        节目列表
                    </div>
                        <div className="ui form "> 
                          <div className="ui middle aligned divided list">
                             
                               
                            <div className="item">
                              <div className="right floated content">
                                <div className="ui button tiny">删除</div>
                              </div>
                               
                              <a className="header">Daniel Louise1</a>
                            </div>

                            <div className="item">
                              <div className="right floated content">
                                <div className="ui button tiny">删除</div>
                              </div>
                               
                              <a className="header">Daniel Louise2</a>
                            </div>

                            <div className="item">
                              <div className="right floated content">
                                <div className="ui button tiny">删除</div>
                              </div>
                               
                              <a className="header">Daniel Louise3</a>
                            </div>
                           
                          </div>  
                             
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