import React, {Component} from 'react' 
import styles from '../sass/App' 
import utils from '../../shared/utils'
import FileUpload from './fileUpload'
import Swipercont from './Swipercont'
import Btn from './btn'
import Cont from './cont'



 
class App extends Component {
    constructor() {
        super()
        this.state = { 
           programArr : [],
           ID : '',
           swiperList:[],
           NPcont:[],
           sourceType:[],
           programList : []
        
        } 

        this.showProgram = this.showProgram.bind(this)
        

    }
    
    componentDidMount() {
      let _this = this
//下拉框效果
      $('.menu .item').tab()

//创建新交互区
      $(".ptcont").hide()
      $(".swiperList").show()
      $('.selection.nac.dropdown')
        .dropdown({
          allowReselection: true,//即使用户选择的值与当前所选值匹配，也会触发onChange。
          onChange: function(value) {  
            $("#nac").val(value)
            if(value == 'swiper'){
              $(".addSwiper").show()
              $(".swiperList").show().html('')
              $(".addbtnBg").hide()
              $(".addCont").hide()
              $(".btncont").hide()
              $(".cont").hide()

            }else if(value == 'button'){
              $(".addSwiper").hide()
              $(".swiperList").show().html('')
              $(".addbtnBg").show()
              $(".addCont").hide()
              $(".btncont").show()
              $(".cont").hide()

            }else if(value == 'cont'){
              $(".addSwiper").hide()
              $(".swiperList").show().html('')
              $(".addbtnBg").hide()
              $(".addCont").show()
              $(".btncont").hide()
              $(".cont").show()

            }
          }
        })
        // 初始化新建交互区域，清空数据
        $('.newareacent.modal').modal({
          onShow : function(){
            $(".swiperList").html('');
            $("#areaWidth").val('');
            $("#areaHeight").val('');
            $("#btnName").val('');
            $("#conts").val('');
            $("#nac").val('swiper')
            _this.setState({swiperList : []});
          },
        });

        $('.newareacent.modal').modal('attach events','.newarea').modal({
          closable  : false, 
          onShow : function(){
            alert(1)
            // $(".swiperList").html('')
            // _this.setState({swiperList : []})
          },
          onApprove : function() {
            
   
           let programArrList = _this.state.programArr , 
               type = $("#nac").val(),
               width = $("#areaWidth").val(),
               height = $("#areaHeight").val()
            if(type == 'swiper'){ 

              _this.setState({
                programArr:programArrList.concat(getSwiper(height,width,_this.state.swiperList))
              
                
              })

            }else if(type == 'button'){
              let name = $("#btnName").val(),
                  link = $("#btnLink").val()
               _this.setState({
                  programArr:programArrList.concat(getBtn (height,width,_this.state.swiperList,link,_this.state.ID))
              })
            }else if(type == 'cont'){
           
               _this.setState({
                 programArr:programArrList.concat(getCont(height,width,$("#conts").val(),_this.state.swiperList,_this.state.sourceType,_this.state.ID))
              
                
              })
            }
            

             $( ".Plugin" ).draggable({ 
              containment: ".App__programArea__1KiBa8n0", 
              scroll: false ,
              stack: ".Plugin",

              
              stop: function(e,ui) { 
                console.log(ui.position)
              }


            });


            //可拖拽
            $( ".App__swipercont__On3D7KLV" ).draggable({ 
              containment: ".App__programArea__1KiBa8n0", 
              scroll: false ,
              stack: ".App__swipercont__On3D7KLV",

              
              stop: function(e,ui) { 
                console.log(ui.position)
              }


            });



          }
        })
 
 
     



//模板
        $('.newmodel.modal').modal('attach events','.newmodel','show');
//页面列表

       utils.ajax({url: '/api/programList'}).then(re => {
              
          _this.setState({programList:re})
        })

        $('.pagelist.modal').modal('attach events','.pagelist','show');

 
       $('.coupled.modal')
        .modal({
          allowMultiple: true
        })
      ;
      // open second modal on first modal buttons
      $('.fileList1.modal').modal('attach events', '.newPergram.modal .button.add').modal({
          onHidden: function(){
            $(".newPergramCont").html('').append('你选择的图片为：'+$("#selectFileName1").val())
            _this.setState({
              NPcont : [].concat($("#selectFileName").val())
            })
          }
        })
      
//创建新节目
// 初始化新建节目弹出窗，清空数据
        $('.newPergram.modal').modal({
          onShow : function(){
            $(".newPergramCont").html("");
            $(this).find(".hightq").val("");
            $(this).find(".widthq").val("");
            $("#programName").val("");
            $("#selectFileName1").val("");
            $(".App__chosefile__2wOvry4v").html("") 
          },
        });
        $('.newPergram.modal').modal('attach events', '.button.newPergram','show').modal({
          closable  : false, 
          onApprove : function() {
            let pergramHight = $(this).find(".hightq").val(),
                pergramWidth = $(this).find(".widthq").val(),
                pergramName = $("#programName").val(),
                programBg = $("#selectFileName1").val(),
                datas = {}; 


                datas.height =pergramHight;
                datas.width =pergramWidth;
                datas.name =pergramName;

                utils.ajax({url: '/api/creatProgram',data:datas}).then(re => {
                   
                  _this.setState({ID:re.ID})
                })

   
            $("#container").css({
              'height':pergramHight,
              'width':pergramWidth,
              'backgroundImage':'url('+programBg+')',
              'background-repeat': 'no-repeat',
              'background-size': 'cover',
              'background-position': 'center center'

            })
    
       

          }
        })

// 保存节目
        $('.saveProgram.modal').modal('attach events', '.button.saveProgram','show').modal({
          closable  : false, 
          onApprove : function() {

            let obj = $("#container .ui-draggable")

            obj.each(function(i){
              
              let datas = {}
              datas.style = obj.eq(i).attr("style")
              //把这个style直接存放进db中
               utils.ajax({url: '/api/saveProgram',data:datas}).then(re => {})
            })
          }
        })

        

        $('.fileList.modal').modal('attach events', '.button#newswiper').modal({
          onHidden: function(){
            $(".swiperList").append('<a class="item">'+$("#selectFileName0").val()+'<div class="ui horizontal label">删除</div></a>')
            _this.setState({
              swiperList : _this.state.swiperList.concat($("#selectFileName0").val())
            })

          }
        })

        // [A-Za-z0-9_\-\u4e00-\u9fa5]+.(mp4)?(mpeg)?(avi)?(rmvb)?(ra)?(ram)?(mov)?(wmv)?
         $('.fileList2.modal').modal('attach events', '.button#newcont').modal({
          onHidden: function(){
            $(".swiperList").html('<a class="item">'+$("#selectFileName2").val()+'<div class="ui horizontal label">删除</div></a>')
            let regVideo = /[A-Za-z0-9_\-\u4e00-\u9fa5]+.(mp4)?(mpeg)?(avi)?(rmvb)?(ra)?(ram)?(mov)?(wmv)?/,//需要匹配的内容
                regImg = /[A-Za-z0-9_\-\u4e00-\u9fa5]+.(gif|jpg|jpeg|bmp|png)/,
                sourceVal=$("#selectFileName2").val();
                if(regImg.test(sourceVal)){
                  _this.setState({
                    sourceType : [].concat(1)
                  })      
                }else if(regVideo.test(sourceVal)){
                  _this.setState({
                    sourceType : [].concat(2)
                  })
                }
            _this.setState({
              swiperList : [].concat($("#selectFileName2").val())
            })
            console.log(_this.state.sourceType+"--"+_this.state.swiperList)
          }
        })

         $('.fileList3.modal').modal('attach events', '.button#newbtnBg').modal({
          onHidden: function(){
            $(".swiperList").html('<a class="item">'+$("#selectFileName3").val()+'<div class="ui horizontal label">删除</div></a>')
            _this.setState({
              swiperList : [].concat($("#selectFileName3").val())
            })
          }
        })
      
 
      
    }
 
    showProgram(id){
      //展示对应节目

      $('.pagelist.modal').modal('hide')

      let datas = {}
      datas.id = id
 
      utils.ajax({url: '/api/componentList',data:datas}).then(re => {
            
 

      })
    }

     delProgram(id){

       $('.pagelist.modal').modal('hide')
 
      let datas = {}
      datas.id = id 
      utils.ajax({url: '/api/componentListDel',data:datas}).then(re => { })

     }




    render() {
 
        //<embed src="/fileupload/test.pdf" />

        let proList ,_this = this

        proList = this.state.programList.map(function(item){

          return (
            <div className="item" key={item.id}>
              <div className="right floated content">
                <div className="ui button tiny" onClick={_this.delProgram.bind(this,item.id)}  >删除</div>
              </div> 
              <a className="header" onClick={_this.showProgram.bind(this,item.id)} data-id={item.id}>{item.name}</a>
            </div>
            )  
          
        })

 

        return (
            <div className="container">
                <div className="ui buttons teal small">  
                  <a className="ui button saveProgram">保存节目</a>
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
保存节目 弹出框
  */}

               <div className="ui small saveProgram modal transition  " >
                <div className="header">保存节目</div>
                <div className="content">
                  <p>你的节目将被保存，以便日后查看</p>
                </div>
                <div className="actions">
                  <div className="ui negative button">取消 </div>
                  <div className="ui positive right labeled icon button">确定 <i className="checkmark icon"></i> </div>
                </div>
              </div>
                

 

    
{/*

  新建交互区域弹出框
    */}

                <div className="ui fullscreen newareacent modal transition hidden">
                    <i className="close icon"></i>
                    <div className="header">区域设置</div>
                    <div className="contents">
                      <div className="ui form">
                        
                        <div className="field">
                          <label>区域属性</label> 
                          <div className="ui grid">
                              <div className=" three wide column">
                                <label>交互类型</label>
                               
                                <div className="ui dropdown selection nac"> 
                                  <div className="default text">幻灯区</div>
                                  <span><i className="dropdown icon"></i></span>
                                  
                                  <div className="menu">
                                    <div className="item active" data-value="swiper">幻灯区</div>
                                    <div className="item" data-value="button">按钮</div>
                                    <div className="item" data-value="cont">内容区</div>
                                  </div>
                                  <input type="hidden" id="nac"/>
                                </div>


                              </div>
                              <div className=" three wide column">
                                <label>宽</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="number" id="areaWidth" name="areaWidth" /> 
                                </div>
                              </div>
                              <div className=" three wide column">
                                <label>高</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="number" id="areaHeight" name="areaHeight" /> 
                                </div>
                              </div> 

                              <div className=" three wide column">
                                <input type="button" value="添加新幻灯片" id="newswiper" className=" ui small blue button addSwiper"/>
                                <input type="button" value="添加按钮背景" id="newbtnBg" className="ui small ptcont blue button addbtnBg"/>  
                                <input type="button" value="添加内容" id="newcont" className="ui small ptcont blue button addCont"/> 
                              </div> 
                               
                            </div>

                            <div className="ui grid btncont ptcont" >
                              
                              <div className=" three wide column">
                                <label>链接地址</label>
                                <div className="ui small left labeled icon input">  
                                    <input type="text" id="btnLink" name="btnLink" /> 
                                </div>
                              </div>

                            </div>


                            <div className="ui grid cont ptcont" >
                              <div className=" three wide column">
                                <label>文字内容</label>
                                <div className="ui small left labeled icon input">  
                                    <textarea id="conts" ></textarea>
                                </div>
                              </div> 
                            </div>




                            <div className={"ui ptcont divided selection list swiperList "+styles.swiperList}></div>


 
                            
                            

                        </div>
                        
                      </div>
                    </div>
                    <div className="actions">
                        <div className="ui small negative button">
                               取消
                        </div> 
                          <input type="button" value="创建"  className="ui small positive button"/> 
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
                <div className="ui pagelist modal"> 
                    <div className="header">
                        节目列表
                    </div>
                     <div className="ui form "> 
                        <div className="ui middle aligned divided list">
                          {proList}
                        </div>
                    </div> 
                </div>


{/*
    新建节目弹出框
  */}
                    
                  <div className="ui newPergram coupled modal transition hidden">
                      <div className="header">新建节目</div>
                      <div className="ui form "> 
                          
                        <div className="field">
                           
                          <div className="two inline fields">
                           <div className="field">
                              节目名称
                              <input type="text" id="programName" />
                            </div>
                            <div className="field">
                              高(px)
                              <input type="number" id="programHight" className="hightq"/>
                            </div>
                            <div className="inline field">
                              宽(px)
                              <input type="number" id="programWidth" className="widthq" />
                            </div>
                          </div>
                        </div> 
                        <div className="field">
                          <label>背景图片</label>
                          <div className="ui primary button add">添加素材</div> 
                        </div>  
                      </div>
                      <div className="actions">
                        <div className={"newPergramCont "+styles.NPcont}></div>
                          <div className="ui small negative button">
                                 不
                          </div> 
                            <input type="button" value="是" className="ui small positive button"/> 
                      </div>
                    </div>


                    {/*
                      文件上传弹出框 单个文件
                    */}

                    <div className="ui small fileList coupled modal">
                      <div className="header">素材列表</div>
                      <div className="content">
                          <FileUpload name='selectFileName0'/> 
                      </div>

                      <div className="actions"> 
                        <div className={styles.chosefile +' chosefile'}>请选择文件</div>
                        <input type="button" value="确定" className="ui small positive button"/> 
                      </div> 
                    </div>


                     <div className="ui small fileList1 coupled modal">
                      <div className="header">素材列表</div>
                      <div className="content">
                          <FileUpload name='selectFileName1'/> 
                      </div>

                      <div className="actions"> 
                        <div className={styles.chosefile +' chosefile'}>请选择文件</div>
                        <input type="button" value="确定" className="ui small positive button"/> 
                      </div> 
                    </div>


                    <div className="ui small fileList2 coupled modal">
                      <div className="header">素材列表</div>
                      <div className="content">
                          <FileUpload name='selectFileName2'/> 
                      </div>

                      <div className="actions"> 
                        <div className={styles.chosefile +' chosefile'}>请选择文件</div>
                        <input type="button" value="确定" className="ui small positive button"/> 
                      </div> 
                    </div>


                    <div className="ui small fileList3 coupled modal">
                      <div className="header">素材列表</div>
                      <div className="content">
                          <FileUpload name='selectFileName3'/> 
                      </div>

                      <div className="actions"> 
                        <div className={styles.chosefile +' chosefile'}>请选择文件</div>
                        <input type="button" value="确定" className="ui small positive button"/> 
                      </div> 
                    </div>






 
                
            </div>
        )
    }
}

export default App








function getSwiper (hei,wid,datalist){
  return  <Swipercont height={hei} width={wid} datalist={datalist} type="1"/>
  
} 

function getBtn (hei,wid,bg,href,ID){

  return  <Btn height={hei} width={wid} bg={bg} href={href} ID={ID} type="2"/>
  
} 

function getCont (hei,wid,cont,path,type,ID){
  return  <Cont height={hei} width={wid} cont={cont} path={path} type={type} ID={ID}/>
  
} 











