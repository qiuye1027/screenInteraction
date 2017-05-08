import React, {Component} from 'react' 
import styles from '../sass/App' 
import FileUpload from './fileUpload'
//import Swipercont from './Swipercont'


 
class App extends Component {
    constructor() {
        super()
        this.state = { 
           programArr : []
        
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
   
          //  _this.setState({programAreas:_this.state.programAreas + '<div id="draggable" class="contents"><div class="testDiv" ><div class="innerNice" ><p >本特效由 收集于互联网，只为兴趣与学习交流，不作商业用途。</p></div></div></div>'})
           let programArrList = _this.state.programArr
            _this.setState({
                programArr:programArrList.concat(getSwiper(100,100))
                
              })
            //可拖拽
            $( ".App__swipercont__On3D7KLV" ).draggable({ 
              containment: ".App__programArea__1KiBa8n0", 
              scroll: false ,
              stack: ".App__swipercont__On3D7KLV"
            });


          }
        })
 
 
     



        //模板
        $('.newmodel.modal').modal('attach events','.newmodel','show');
        //页面列表
        $('.pagelist.modal').modal('attach events','.pagelist','show');

 
       $('.coupled.modal')
        .modal({
          allowMultiple: true
        })
      ;
      // open second modal on first modal buttons
      $('.fileList.modal')
        .modal('attach events', '.newPergram.modal .button.add')
      ;
       //创建新节目
        $('.newPergram.modal').modal('attach events', '.button.newPergram','show').modal({
          closable  : false, 
          onApprove : function() {

            let pergramHight = $(this).find(".hightq").val(),
                pergramWidth = $(this).find(".widthq").val(),
                programBg = $("#filepath").val()

   
            $("#container").css({
              'height':pergramHight,
              'width':pergramWidth,
              'backgroundImage':'url('+programBg+')',
              'background-repeat': 'no-repeat',
              'background-size': 'cover',
              'background-position': 'center center'

            })
    
       console.log(12)

          }
        })
 
      
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
        //<embed src="/fileupload/test.pdf" />
 

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
                    <button className="ui button newPergram">新建节目</button>
                      <button className="ui button pagelist">页面列表</button>
                      <button className="ui button newarea">新建交互区域</button>
                      <button className="ui button newmodel">创建模板</button>
                      <button className="ui button perview">预览</button>
                    </div>
                </div>
                <div className={styles.programArea}>
                  <div  id="container">
                   {   
                      this.state.programArr.map(function (item) {
                          return   item
                      })
                    }
                  </div>
                </div> 
                
             
                 

                

 

    
                {/*

                  新建交互区域弹出框
                    */}

                <div className="ui fullscreen newareacent coupled modal transition hidden">
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



                {/*
                  创建模板出框
                    */}

                <div className="ui    newmodel modal">
                    
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

                  {/*
                  节目列表弹出框
                    */}
                <div className="ui    pagelist modal">
                    
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


                  {/*
                      新建节目弹出框
                    */}
                  <div className="ui newPergram coupled modal">
                      <div className="header">新建节目</div>
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
                          <div className="ui primary button add">添加素材</div> 
                        </div>  
                      </div>
                      <div className="actions">
                          <div className="ui small negative button">
                                 不
                          </div> 
                            <input type="button" value="是" className="ui small positive button"/> 
                      </div>
                    </div>


                    {/*
                      文件上传弹出框
                    */}

                    <div className="ui small fileList coupled modal">
                      <div className="header">素材列表</div>
                      <div className="content">
                          <FileUpload /> 
                      </div>

                      <div className="actions"> 
                        <div className={styles.chosefile} id="chosefile">请选择文件</div>
                        <input type="button" value="确定" className="ui small positive button"/> 
                      </div> 
                    </div>

 
                
            </div>
        )
    }
}

export default App








function getSwiper (hei,wid){
  return // <Swipercont height={hei} width={wid}/>
  
} 