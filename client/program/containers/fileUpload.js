import React, {Component} from 'react'
import styles from '../sass/App'
import utils from '../../shared/utils'
import Test from './Test'
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

      let {name} = this.props
      if(this.props.name=='selectFileName1'){
        this.findFile('',_this,name)  
      }   
    }

    findFile(path,_this,name){
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
          // console.log($(".fileitem[dataType='floder']").length)
          $(".fileitem").each(function(){
            $(this).click(function(){
              if($(this).attr("data-type") == 'floder'){
                filePath = filePath + '/' + $(this).find(".header").html()
                $(".breadcrumb").append('<i class="right angle icon divider"></i><a class="section" data-path="'+filePath+'">'+$(this).find(".header").html()+'</a>')
                _this.findFile(filePath,_this)
              }else{
                $("#"+name).val('fileupload/'+filePath+'/'+$(this).find(".header").html())
                $(this).parents(".coupled").find(".chosefile").html('所选文件： '+ $(this).find(".header").html())
              }
            })
          })

          $(".section").unbind('click')
          $(".section").click(function(){
            $(this).nextAll().remove() 
            filePath = $(this).attr("data-path")

            _this.findFile(filePath,_this)
          })
            
       }) 

    }

    render() {

      let {name} = this.props
        return (
          <div>
            <input type="hidden" id={name} />
            <div className="ui breadcrumb">
              <a className="section" data-path="">全部素材</a>
            </div>
            <Test></Test>
            <div className="ui list" dangerouslySetInnerHTML={{__html:this.state.folderlists}}></div> 
          </div>        
        )
    }
}

export default FileUpload