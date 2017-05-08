import React, {Component} from 'react'
import styles from '../sass/App'
import utils from '../../shared/utils'

let filePath = ''

class FileUpload extends Component {
    constructor() {
        super()
        this.state = { 
           folderlists:'<div class="item"> <div class="content"> <div class="header">没有文件</div> </div> </div>'　,
           breadcrumb : '<a class="section" data-path="">全部素材</a>'
           
        
        } 
    }
    componentDidMount() {
      let _this = this
      $(".filechose").click(function(){
        $(".chosepath").html("你选择的素材为："+$(this).html())
        $("#chosepath").val($(this).html())
        
      })


      findFile('',_this)
         
    }

    render() {
        return (
          <div>
            <input type="hidden" id="filepath" />
            <div className="ui breadcrumb">
              <a className="section" data-path="">全部素材</a>
            </div>
          
             
            <div className="ui list" dangerouslySetInnerHTML={{__html:this.state.folderlists}}></div> 
          </div>        
        )
    }
}

export default FileUpload



function findFile(path,_this){
   let datas = {}; 
  datas.path =path;
   utils.ajax({url: '/api/programFileList',data:datas}).then(re => {
    let str = ''
     for(let i of re){
      let fileicon = i.fileType == 'floder' ? 'folder' : 'file'
       str += '<div class="item fileitem" data-type="'+i.fileType+'">';
       str += '<i class="'+fileicon+' icon"></i>'
       str += '<div class="content">'
       str += '<div class="header">'+i.name+'</div>' 
       str += '</div>'
       str += '</div>'
     }

      _this.setState({folderlists:str})

      $(".fileitem").click(function(){
        if($(this).attr("data-type") == 'floder'){
          filePath = filePath + '/' + $(this).find(".header").html()
        
          $(".breadcrumb").append('<i class="right angle icon divider"></i><a class="section" data-path="'+filePath+'">'+$(this).find(".header").html()+'</a>')
          findFile(filePath,_this)
        }else{
          $("#filepath").val('fileupload/'+filePath+'/'+$(this).find(".header").html())
          $("#chosefile").html('所选文件： '+ $(this).find(".header").html())
        }
          
      })

      $(".section").unbind('click')
      $(".section").click(function(){
        $(this).nextAll().remove() 
        filePath = $(this).attr("data-path")

        findFile(filePath,_this)
      })
        

   }) 





}
