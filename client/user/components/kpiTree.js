/** 
 * Created by Administrator on 2017/3/20 0020. 
 */  
import React,{Component} from "react"  
import { browserHistory } from 'react-router';
import styles from "../sass/kpiTree"; 
import ThisData from './ThisData' 


import utils from '../../shared/utils' 


export default class KpiTree extends Component{  
    constructor(props){  
        super(props);  
        this.state={  
                data:[  
                  {
                    "kid":"1",
                    "kname":"综合指标",
                    "hasChild":"1",
                    "pid":"-1",
                    "id":'1',
                    "username":'张三1',
                    "password":'123456',
                    "remark":'李四死敌1',
                    "create_time":"2017-01-01",
                    "effective_time":1,
                    "power":'权限设置1',
                    "tlmg":'终端管理1'
                  },  
                  {"kid":"2","kname":"分析类指标","hasChild":"1","pid":"-1"},  
                  {"kid":"3","kname":"组合指标","hasChild":"1","pid":"-1"},  
                  {"kid":"4","kname":"移动业务计费收入","hasChild":"1","pid":"-1"},  
                  {"kid":"5","kname":"2G业务","hasChild":"1","pid":"-1"},  
                ],
                data1:[  
                  {
                    "kid":"01",
                    "kname":"综合指标",
                    "hasChild":"1",
                    "pid":"-1",
                    "id":'01',
                    "username":'张三01',
                    "password":'123456',
                    "remark":'李四死敌01',
                    "create_time":"2017-01-011",
                    "effective_time":11,
                    "power":'权限设置01',
                    "tlmg":'终端管理01'
                  },  
                  {"kid":"02","kname":"分析类指标2","hasChild":"1","pid":"-1"},  
                  {"kid":"03","kname":"组合指标3","hasChild":"1","pid":"-1"},  
                  {"kid":"04","kname":"移动业务计费收入4","hasChild":"1","pid":"-1"},  
                  {"kid":"05","kname":"2G业务5","hasChild":"1","pid":"-1"}  
                ],
                data01:[  
                  {
                    "kid":"001",
                    "kname":"综合指标",
                    "hasChild":"1",
                    "pid":"-1",
                    "id":'011',
                    "username":'张三011',
                    "password":'123456',
                    "remark":'李四死敌011',
                    "create_time":"2017-01-0111",
                    "effective_time":111,
                    "power":'权限设置011',
                    "tlmg":'终端管理011'
                  },  
                  {"kid":"002","kname":"分析类指标02","hasChild":"1","pid":"01"},  
                  {"kid":"003","kname":"组合指标03","hasChild":"1","pid":"01"},  
                  {"kid":"004","kname":"移动业务计费收入04","hasChild":"1","pid":"01"},  
                  {"kid":"005","kname":"2G业务05","hasChild":"1","pid":"01"}  
                ],
                data001:[
                  {
                    "kid":"0001",
                    "kname":"综合指标last",
                    "hasChild":"0",
                    "pid":"-1",
                    "id":'011',
                    "username":'张三last',
                    "password":'123456last',
                    "remark":'李四死敌last',
                    "create_time":"2017-01-01last",
                    "effective_time":111000,
                    "power":'权限设置last',
                    "tlmg":'终端管理last'
                  }
                ],
                thisData:{},
        }  
    }
    componentDidMount=()=>{  
        let _main=this.refs.kpiTree;  
        this._fetchTreeNodeData("",_main,0); 
        // this._fetchTreeNodeData(nodeId,currentNode,20);
    }
    _renderTreeNode=(nodeObj,treeData,paddingLeft)=>{  
        let _self=this;  
        let hasAllSelectBox=false; 
        if(treeData.length>0){  
            for(let i=0;i<treeData.length;i++){  
                if(treeData[i].hasChild=="0"){  
                    hasAllSelectBox=true  
                }  
            }
            let _node=treeData.map((data,index)=>{
                let _kname=data.kname;  
                let _div=document.createElement("div");  
                _div.pid="node"+data.pid;
                _div.id="node"+data.kid;  
                _div.style.paddingLeft=paddingLeft+"px";  
                let _i=document.createElement("i");    
                _i.className="add square icon";  
                // _i.onclick=_self._handleClick.bind(this,data.kid); 
                // let _checkBox=document.createElement("input");  
                // _checkBox.type="checkbox"  
                // _checkBox.pid="node"+data.pid;  
                let _span=document.createElement("span");  
                _span.onclick=_self._handleClick.bind(this,data.kid); 
                _span.innerHTML=_kname;  
                // let allCheckBoxDiv=null;  
                // if(data.pid!="-1"&&index==0&&hasAllSelectBox==true){  
                //     allCheckBoxDiv=document.createElement("div");  
                //     allCheckBoxDiv.pid="node"+data.pid;  
                //     allCheckBoxDiv.style.paddingLeft=paddingLeft+"px";  
                //     let _allCheckBox=document.createElement("input");  
                //     _allCheckBox.type="checkbox";  
                //     _allCheckBox.onchange=_self._selectAllCheckBox.bind(this,nodeObj.id);  
                //     let _allCheckBoxLabel=document.createElement("span");  
                //     _allCheckBoxLabel.innerHTML="全选";  
                //     allCheckBoxDiv.appendChild(_allCheckBox);  
                //     allCheckBoxDiv.appendChild(_allCheckBoxLabel);  
                // }  
                if(data.hasChild=="1"){
                    _div.appendChild(_i);  
                }  
                else if(data.hasChild=="0"){  
                    _div.appendChild(_span);
                }  
                _div.appendChild(_span); 
                nodeObj.appendChild(_div);  
            })  
  
        }  
    }  
    _fetchTreeNodeData=(nodeId,nodeObj,paddingLeft)=>{   
        let _self=this,cData;
        let datas = 'data' + nodeId;
        cData = _self.state[datas];
        // if( nodeId=='' ){
        //     cData = _self.state.data;
        // }else if( nodeId=='1' ){
        //     cData = _self.state.data1
        // }else if( nodeId=='01' ){
        //     cData = _self.state.data01
        // }else if( nodeId=='011' ){
        //     cData = _self.state.data011
        // }
        _self._renderTreeNode(nodeObj,cData,paddingLeft);  
        // var treeListUrl = '../src/kpiTree/treeListData'+nodeId+'.json';  
        // fetch(treeListUrl,{  
        //     credentials:'same-origin',  
        //     async:false,  
        //     //method: 'POST',  
        //     method: 'GET',  
        //     mode:'cors',//跨域请求  
        //     headers: {  
        //         "Content-type": "application/x-www-form-urlencoded",  
        //         "User-Agent": "  Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"  
        //     },  
        // })  
        //     .then(function(res) {  
        //         console.log("Response succeeded?", JSON.stringify(res.ok));  
        //         return res.json();  
        //     })  
  
        //     .then(function(data) {  
        //         debugger  
        //         _self._renderTreeNode(nodeObj,data,paddingLeft);  
        //     })  
        //     .catch(function(e) {  
        //         console.log("fetch fail",e.toString());  
        //     });  
  
    }  
    _handleClick=(nodeId,event)=>{
        console.log(nodeId)
        let cData;
        let _clickImg=event.currentTarget.previousElementSibling;  
        let currentNode=event.currentTarget.parentNode;
        let datas='data' + nodeId.substr(1,(nodeId.length-1))
        // if( nodeId=='1' ){
        //     cData = this.state.data
        // }else if( nodeId=='01' ){
        //     cData = this.state.data1
        // }else if( nodeId=='011' ){
        //     cData = this.state.data01
        // }
        cData = this.state[datas];

        let index=currentNode.id.substr(currentNode.id.length-1,1)
        // console.log(cData[index-1])
        this.setState({thisData:cData[index-1]});
        if(_clickImg.className.indexOf("square")!=-1){  
            _clickImg.className="minus icon";
            if(currentNode.childNodes[3]!=null&currentNode.childNodes[3]!=undefined){  
                this._showOrHideNode(currentNode,1); 
            }  
            else {  
                this._fetchTreeNodeData(nodeId,currentNode,20);  
            }  
        }else if(_clickImg.className.indexOf("minus icon")!=-1){  
            _clickImg.className="add square icon";  
            this._showOrHideNode(currentNode,0);  
        }  
    }
    _showOrHideNode=(pNode,isShow)=>{  
        let _sub_nodes=pNode.childNodes;
        for(let i=0;i<_sub_nodes.length;i++){
            if((_sub_nodes[i].nodeName == 'DIV') || (_sub_nodes[i].pid==pNode.id)){
                // console.log(_sub_nodes[i].pid +'---'+ pNode.id)
                if(isShow==1){  
                    _sub_nodes[i].style.display="block";  
                }  
                else if(isShow==0){  
                    _sub_nodes[i].style.display="none";  
                }  
            }  
        }  
    }  
    render=()=> { 
        let _self=this; 
        let tabId=this.props.tabId;  
        let _kpiTreePanelHeight=tabId=="tab01"?"kpitree_panel_height_01":"kpitree_panel_height_02";  
        let _bottomContentHeight=tabId=="tab01"?"kbottom-content_height_01":"kbottom-content_height_02";  
        return (  
            <div className={styles.kidBox}>
            <div className={"kpitree_panel "+_kpiTreePanelHeight} className={styles.kpiLeft}>  
                <div className={"kbottom-content "+_bottomContentHeight} ref="kpiTree">  
                </div>  
            </div>  
            <div className={styles.editBox}>
                <ThisData data={_self.state.thisData}></ThisData>
            </div>
            </div>
        );  
    }  
};  