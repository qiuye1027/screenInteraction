import React, {Component} from 'react' 
class DataList extends Component {
    constructor() {
        super()
         this.state = { 
           tData:{},
           editArr:{
            id:'用户ID',
            name:'姓名',
            remark:'备注',
            password:'密码设置',
            ExpDate:'有效期',
            ExpTime:'有效时间',
            power:'权限设置',
            tlmg:'终端管理'
          },
        }
    }
    componentDidMount() {
        // console.log(this.props.data)
    }

    componentWillReceiveProps(nextProps){
      this.setState({tDate : nextProps.data});
    }


    render() {
      let proList,_this = this;
      proList = _this.state.tDate;
      const createDOMFromString = (domString) => {
        const div = document.createElement('div')
        div.innerHTML = domString
        return div
      };
      var formStr = "";
      for(var o in proList){
        if((o == 'ExpDate') || (o == 'ExpTime')){
          formStr+='<div class="dataInfo"><lable>'+ this.state.editArr[o] +':</lable><input type="text" disabled value='+ proList[o][0] +'>-<input type="text" disabled value='+ tData[o][1] +'></div>'
        }else if(o == 'power'){
          var text = '';
          var ulList='';
          for(var i=0;i<proList[o].length;i++){
            ulList+='<li>'+proList[o][i]+'<div class="close">X</div></li>'
          }
          text+='<div class="ulList">'+ulList+'</div>';
          formStr+='<div class="dataInfo"><lable>'+ this.state.editArr[o] +':</lable>'+ text +'</div>'
        }else{
          formStr+='<div class="dataInfo"><lable>'+ this.state.editArr[o] +':</lable><input type="text" value='+ proList[o] +'></div>'
        }
      }
      formStr+='<button>确定修改</button>';
      let doms = createDOMFromString(formStr);
      console.log(doms)
      return (
          <div>doms</div>
      )
    }
}

export default DataList