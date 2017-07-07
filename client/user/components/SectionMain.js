import React, {Component} from 'react'
import styles from '../sass/SectionMain'

class SectionMain extends Component {
    constructor() {
        super()
        this.state = {
          data:[
                  {id:"1", name:"张三", remark:"李四死敌", password:"123456", ExpDate:["2008","2015"], ExpTime:["2008-01-11","2015-06-18"],power:["素材管理","节目管理","节目审核"],tlmg:""},
                  {id:"2", title: "基本信息", open: true, children:[
                    {id:"21", title: "名称", field: "name", candidate: true},
                    {id:"22", title: "年龄", field: "age", candidate: true},
                    {id:"23", title: "性别", field: "sex", candidate: true},
                    {id:"24", title: '教育相关1', open: true, children:[
                      {id:"241", title: "最高学历1", field: "education", candidate: true},
                      {id:"242", title: "毕业学校1", field: "college", candidate: true},
                      {id:"243", title: "所学技术1", open:true, children: [
                        {id:"2431", title: "Java编程1", field: 'java', candidate: true},
                        {id:"2432", title: "Oracle数据操作1", field: 'oracle', candidate: true},
                        {id:"2433", title: "网页设计1", field: 'html', candidate: true}
                      ]}
                    ]},
                    {id:"25", title: '教育相关2', open: true, children:[
                      {id:"251", title: "最高学历2", field: "education", candidate: true},
                      {id:"252", title: "毕业学校2", field: "college", candidate: true},
                      {id:"253", title: "所学技术2", open:true, children: [
                        {id:"2531", title: "Java编程2", field: 'java', candidate: true},
                        {id:"2532", title: "Oracle数据操作2", field: 'oracle', candidate: true},
                        {id:"2533", title: "网页设计2", field: 'html', candidate: true}
                      ]}
                    ]}
                  ]},
                  {id:"3", title: '工作信息', open: true, children:[
                    {id:"31", title: "职位", field: "office", candidate: true},
                    {id:"32", title: "职称", field: "call", candidate: true},
                    {id:"33", title: "所在楼层", field: "place", candidate: true}
                  ]}
                ],
          editArr:{
            id:'用户ID',
            name:'姓名',
            remark:'备注',
            password:'密码设置',
            ExpDate:'有效期',
            ExpTime:'有效时间',
            power:'权限设置',
            tlmg:'终端管理'
          }
        }
    }
    componentDidMount() {
      let _this = this;
      $('#default_tree').append(this.loadTree(_this.state.data));
      this.nodeClick($('#default_tree'));
    }


    //为模态对话框添加拖拽
    // $('#modalDialog').draggable({cursor: 'move',handle: '.modal-header'});
      
    /**
     * 使用递归遍历json字符串，生成树结构
     * @param  {[type]} tData json字符串
     * @return {[type]}       返回树结构
     */
    loadTree(tData) {
      let _this = this;
      var ul = $('<ul>');
      for(var i=0; i<tData.length; i++){
        var li = $('<li>').appendTo(ul);
        var node = $('<a>').appendTo(li);
        var icon = $('<i>').css('margin-right','5').appendTo(node);
        var aTree = $('<span>').html(tData[i].title).appendTo(node);
        var input = $('<input>').addClass('field').val(tData[i].field).css({'display':'none'}).appendTo(node);
        // 监听用户点击事件
        li.click(function(e){
          var index=$(this).index()
           e.stopPropagation(); 
               $('#tree_data div').html(_this.editTreeData(tData[index]))
        })
        // 处理有子节点的
        if(tData[i].children != undefined){
          // 添加图标样式
          icon.addClass('fa fa-minus-square-o');
          var ic = $('<i>').addClass('fa fa-folder-open-o');
          icon.after(ic).addClass('status');
          node.addClass('tree-node');
          
          // 添加标记节点是否打开
          $('<input>').addClass('open').val(tData[i].open).css('display','none').appendTo(node);

          // 递归遍历子节点
          this.loadTree(tData[i].children).appendTo(li);
        } else{
          icon.addClass('fa fa-file-text-o');
          // 叶子节点新增是否可选
          $('<input>').addClass('candidate').val(tData[i].candidate).css('display','none').appendTo(li);
        }
      }
      return ul;
    }
    // 修改用户权限
    editTreeData(tData) {
      var formStr = "";
      for(var o in tData){
        if((o == 'ExpDate') || (o == 'ExpTime')){
          formStr+='<div class="dataInfo"><lable>'+ this.state.editArr[o] +':</lable><input type="text" disabled value='+ tData[o][0] +'>-<input type="text" disabled value='+ tData[o][1] +'></div>'
        }else if(o == 'power'){
          var text = '';
          var ulList='';
          for(var i=0;i<tData[o].length;i++){
            ulList+='<li>'+tData[o][i]+'<div class="close">X</div></li>'
          }
          text+='<div class="ulList">'+ulList+'</div>';
          formStr+='<div class="dataInfo"><lable>'+ this.state.editArr[o] +':</lable>'+ text +'</div>'
        }else{
          formStr+='<div class="dataInfo"><lable>'+ this.state.editArr[o] +':</lable><input type="text" value='+ tData[o] +'></div>'
        }
      }
      formStr+='<button>确定修改</button>'
      return formStr;
    }
    // $("#tree_data").delegate(".close","click",function(){
    //   $(this).parent("li").remove()
    // })
    /**
     * 节点点击事件
     * @param  {[type]} box 存在菜单树的盒子
     */
    nodeClick(box) {
      box.find('.tree-node').click(function(){
        // console.log($('.tree-node').index(this))
        // 判断该节点是否开启
        if($.trim($(this).find('.open').val()) == 'true'){
          // 已开启，则关闭节点
          $(this).next().slideUp(500);
          $(this).find('.open').val('false');
          $(this).find('.status').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
        } else{
          // 开启前关闭节点下的所有节点
          $(this).next().find('.tree-node').each(function(){
            $(this).next().css('display','none');
            $(this).find('.open').val('false');
            $(this).find('.status').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
          })

          // 已关闭，则开启节点
          $(this).find('.open').val('true');
          $(this).find('.status').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
          // 开启节点下的节点
          
          $(this).next().slideDown(500);
        }
      })
    }

    render() {
        return (
            <div className="container">
              <div id="default_tree" className={styles.colsm4}><h3>原始树结构</h3></div>
              <div id="tree_data" className={styles.tree_data}><h3>选中的数据</h3><div></div></div>
            </div>
        )
    }
}

export default SectionMain
