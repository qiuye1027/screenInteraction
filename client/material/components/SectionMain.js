import React, {Component} from 'react' 
import styles from '../sass/App'
import utils from '../../shared/utils' 
class SectionMain extends Component {
    constructor() {
        super()

        this.state = {
           folderlist:'<tr><td colspan="4"> 暂无文件 </td> </tr>',
           breadcrumb : '<a class="section" data-id="0">全部素材</a>'
        }


    } 
  
    componentDidMount() {
      var _this = this;


      // 绑定上传文件窗口 
      $('.newbatch.modal').modal('attach events','#upload','show').modal({
          closable  : false, 
          onApprove : function() {
   

            $('#fileupload').ajaxSubmit({
                type: 'post', // 提交方式 get/post
                url: '/api/fileupload', // 需要提交的 url
                data:$('#fileupload').serialize(),
                success: function(data) { // data 保存提交后返回的数据，一般为 json 数据
                    // 此处可对 data 作相关处理
                  getFile($("#fatherId").val(),_this)
 
                } 
            });


          }
        })
         



      //绑定新建文件夹窗口
      $('.newfile.modal').modal('attach events','#newfile','show').modal({
          closable  : false, 
          onApprove : function() {

            let datas = {};
            datas.floderName = $("#newFloderName").val();
            datas.fatherId = $("#fatherId").val();
            datas.path = $("#path").val();

            if(datas.floderName == '') return false;

             utils.ajax({url: '/api/newFloder',data:datas}).then(re => {
              if(re.affectedRows == 1){
                
                getFolder(datas.fatherId,_this,function(id,_this){
                   getFile($("#fatherId").val(),_this)
                })
              }

             }) 
          }
        })

      //init
      getFolder(0,_this,function(id,_this){
         getFile(id,_this)
      })
       

 

      
    }

    render() {

      // breadcrumb
      // <a className="section"> 全部素材 </a>
      // <i className="right angle icon divider"></i>
      // <a className="section">图片</a>
      // <i className="right angle icon divider"></i>
      // <div className="active section">文件夹1</div>



      //folderlist
      // <tr className=" ">
      //     <td><a href=""><i className="folder icon"></i>图片</a></td>
      //     <td>--</td>
      //     <td>2009-09-09 12:20</td>
      //     <td>
      //         <a className="ui tiny basic button edit" href="./edit_action.html"><i className="edit icon"></i>重命名</a> 
      //         <a className="ui tiny basic  button delete"><i className="delete icon"></i>删除</a>
      //         <a className="ui tiny basic  button download"><i className="download icon"></i>下载</a>
      //         <a className="ui tiny basic  button clone"><i className="clone icon"></i>复制到</a>
      //         <a className="ui tiny basic  button move"><i className="move icon"></i>移动到</a> 
      //     </td>
      // </tr>


    
        return (
            <div className="container"> 
                <div className="ui breadcrumb" dangerouslySetInnerHTML={{__html:this.state.breadcrumb}}></div>
                <div className="ui">
                    <div className="small ui buttons">
                      <button className="ui button blue" id="upload">上传</button>
                      <a className="ui button green" id="newfile">新建文件夹</a> 
                    </div>
                </div> 

                <table className="ui basic table">
                    <thead>
                        <tr>
                        <th>文件名</th>
                        <th>大小</th>
                        <th>修改时间</th>
                        <th>操作</th>
                        </tr>
                    </thead>
                    <tbody dangerouslySetInnerHTML={{__html:this.state.folderlist}}></tbody>
                </table>




            
                <div className="ui small  newbatch modal">
                    
                    <div className="header">
                        上传文件
                    </div>
                    <form action="" className="content" method="post" id="fileupload" encType="multipart/form-data">
                    
                        <div className="ui form ">
                            <input type="hidden"   name="scpath" id="path"/>
                            <input type="hidden"   id="fatherId" name="folderid"/>
                            
                              <div className="field">
                                <label>素材名称</label>
                                <div className="two fields">
                                 
                                  <div className="field">
                                    <input type="file" name="scfile"  multiple/>
                                  </div>
                                </div>
                              </div> 

                              <div className="  inline field">
                                <div className="ui checkbox">
                                  <input type="checkbox" tabindex="0" name="scshare" value="1"/>
                                  <label>共享此素材</label>
                                </div>
                              </div> 
                            
                        </div>
                    
                    <div className="actions">
                        <div className="ui small negative button">
                               不
                        </div> 
                          <input type="button" value="是" className="ui small positive button"/> 
                    </div>
                    </form>
                </div>


 


                <div className="ui small modal transition hidden delete " >
                     
                    <div className="content">
                      <p>确定删除该文件?</p>
                    </div>
                    <div className="actions">
                      <div className="ui negative button">不 </div>
                      <div className="ui positive right labeled icon button">是 <i className="checkmark icon"></i> </div>
                    </div>
                  </div>

                  <div className="ui small  modal transition hidden newfile  " >
                    
                    
                    <div className="content">
                      
                      <div className="ui input focus">
                      <input type="text" placeholder="新建文件夹名称" id="newFloderName"/>
                    </div>
                    </div>
                    <div className="actions">
                      <div className="ui negative button">不 </div>
                      <div className="ui positive right labeled icon button">是 <i className="checkmark icon"></i> </div>
                    </div>
                  </div> 
            </div>
        )
    }
}

export default SectionMain


// 获取文件夹方法
function getFolder(id,_this,fn){
  let datas = {};
  datas.fatherId = id;
  $("#fatherId").val(id)
   utils.ajax({url: '/api/getFloder',data:datas}).then(re => {
      if(re.length != 0){ 
        let str ='' 
        for(var i of re){
          str += '<tr data-id="'+i.id+'" >'
          str += '<td><a class="folders" style="cursor: pointer;"><i class="folder icon"></i><span>'+i.name+'</span></a></td>'
          str += '<td>--</td>'
          str += '<td>'+utils.parseDate(i.create_time)+'</td>'
          str += '<td>'
          str += '<a class="ui tiny basic button edit" ><i class="edit icon"></i>重命名</a> '
          str += '<a class="ui tiny basic  button delete delfloder"><i class="delete icon"></i>删除</a>'
          str += '<a class="ui tiny basic  button download"><i class="download icon"></i>下载</a>'
          str += '</td>'
          str += '</tr>'
        }
        _this.setState({folderlist:str})

        


        $(".folders").unbind('click') 
        $(".folders").click(function(){
          let id = $(this).parents("tr").attr("data-id") 

          let name = $(this).find("span").html()
          let breadStr = '<i class="right angle icon divider"></i><a class="section" data-id="'+id+'">'+name+'</a>' 
         
          _this.setState({breadcrumb:_this.state.breadcrumb + breadStr})
           
 
           $("#path").val($("#path").val()+'/'+name)
           getFolder(id,_this,function(id,_this){
            getFile(id,_this)
          })
        })
        $(".section").unbind('click')

     
 
        
      }else{
        $(".folders").unbind('click')
         
        _this.setState({folderlist:'<tr><td colspan="4"> 暂无文件 </td> </tr>'})
        
      } 

      $(".section").click(function(){
 

          // 面包屑
           let name = $(this).html(),
            id = $(this).attr("data-id"),  
            breadStr = '<i class="right angle icon divider"></i><a class="section" data-id="'+id+'">'+name+'</a>'  
         
          if(name == '全部素材' ){

            _this.setState({breadcrumb: '<a class="section" data-id="0">全部素材</a>'})
            $("#path").val('')

          }else if(_this.state.breadcrumb.indexOf(breadStr) > 0){

              let arrstr =  _this.state.breadcrumb.split(breadStr)[0]

              _this.setState({breadcrumb: arrstr + breadStr})

            

              $("#path").val($("#path").val().split(name)[1]+'/'+name)
           }
 
          
          getFolder(id,_this,function(id,_this){
            getFile(id,_this)
          })
       
        })


    })

   fn(id,_this) 

}



// 选择文件
function getFile(id,_this){
  let datas = {};
  datas.folderId = id;
  utils.ajax({url: '/api/getFile',data:datas}).then(re => {
    if(re.length != 0){ 
      let str ='' 
      for(var i of re){
        str += '<tr data-id="'+i.id+'" >'
        str += '<td><i class="file icon"></i><span>'+i.name+'</span></td>'
        str += '<td>'+i.size+'</td>'
        str += '<td>'+utils.parseDate(i.create_time)+'</td>'
        str += '<td>'
        str += '<a class="ui tiny basic button edit" ><i class="edit icon"></i>重命名</a> '
        str += '<a class="ui tiny basic  button delete delfile"><i class="delete icon "></i>删除</a>'
        str += '<a class="ui tiny basic  button download"><i class="download icon"></i>下载</a>'
        str += '</td>'
        str += '</tr>'
      }

      if(_this.state.folderlist == '暂无文件'){
        _this.setState({folderlist:str})
      }else{
        _this.setState({folderlist:_this.state.folderlist+str})
      }
      
      $('.button.delfile').click(function(){
        let _tr = $(this).parents("tr"),
          id = _tr.attr("data-id"),
          datas = {}

        $('.delete.modal').modal('show').modal({
            closable  : false, 
            onApprove : function() {
           
              datas.id = id;
             
              utils.ajax({url: '/api/delFile',data:datas}).then(re => {
                _tr.remove();
              })
 
            }
          })
      })


       $('.button.delfloder').click(function(){
        console.log(1)
        let _tr = $(this).parents("tr"),
          id = _tr.attr("data-id"),
          datas = {}

        $('.delete.modal').modal('show').modal({
            closable  : false, 
            onApprove : function() {
           
              datas.id = id;
             
              utils.ajax({url: '/api/delFloder',data:datas}).then(re => {
                _tr.remove();
              })
 
            }
          })
      })


      


    }
  })


}




