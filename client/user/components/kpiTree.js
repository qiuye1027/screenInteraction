/** 
 * Created by Administrator on 2017/3/20 0020. 
 */  
import React,{Component} from "react"  
import { browserHistory } from 'react-router';
import styles from "../sass/kpiTree"; 
import ThisData from './ThisData' 
export default class KpiTree extends Component{  
    constructor(props){  
        super(props);  
        this.state={  
                data:[  
                  {"kid":"1","kname":"综合指标","hasChild":"1","pid":"-1"},  
                  {"kid":"2","kname":"分析类指标","hasChild":"1","pid":"-1"},  
                  {"kid":"3","kname":"组合指标","hasChild":"1","pid":"-1"},  
                  {"kid":"4","kname":"移动业务计费收入","hasChild":"1","pid":"-1"},  
                  {"kid":"5","kname":"2G业务","hasChild":"1","pid":"-1"},  
                ],
                data1:[  
                  {"kid":"01","kname":"综合指标1","hasChild":"1","pid":"-1"},  
                  {"kid":"02","kname":"分析类指标2","hasChild":"1","pid":"-1"},  
                  {"kid":"03","kname":"组合指标3","hasChild":"1","pid":"-1"},  
                  {"kid":"04","kname":"移动业务计费收入4","hasChild":"1","pid":"-1"},  
                  {"kid":"05","kname":"2G业务5","hasChild":"1","pid":"-1"}  
                ],
                data01:[  
                  {"kid":"011","kname":"综合指标01","hasChild":"1","pid":"01"},  
                  {"kid":"012","kname":"分析类指标02","hasChild":"1","pid":"01"},  
                  {"kid":"013","kname":"组合指标03","hasChild":"1","pid":"01"},  
                  {"kid":"014","kname":"移动业务计费收入04","hasChild":"1","pid":"01"},  
                  {"kid":"015","kname":"2G业务05","hasChild":"1","pid":"01"}  
                ],
                data011:[
                  {"kid":"0111","kname":"综合指标000","hasChild":"0","pid":"010"},  
                  {"kid":"0112","kname":"分析类指标000","hasChild":"0","pid":"010"},  
                  {"kid":"0113","kname":"组合指标000","hasChild":"0","pid":"010"},  
                  {"kid":"0114","kname":"移动业务计费收入000","hasChild":"0","pid":"010"},  
                  {"kid":"0115","kname":"2G业务000","hasChild":"0","pid":"010"}  
                ],
                thisData:{},
        }  
        this._handleSelect=this._handleSelect.bind(this);  
        this._handleSearch=this._handleSearch.bind(this);  
        this._handleReturn=this._handleReturn.bind(this);  
    }  
    _handleSearch=()=>{   
        var _self=this;  
        var _inputValue=this.refs.ksearchInput.value;//搜索框输入的关键字  
        var _main=this.refs.kpiTree;
         _self._renderTreeNode(_main,_self.state.data01,0);    
        // _main.innerHTML="";  
        // var searchListUrl = '../src/kpiTree/searchListData.json';  
        // fetch(searchListUrl,{  
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
        //         _self._renderTreeNode(_main,data,0);  
        //     })  
        //     .catch(function(e) {  
        //         console.log("fetch fail",e.toString());  
        //     });  
    }  
    _handleReturn=()=>{  
        this.refs.ksearchInput.value="";//清空搜索输入框  
        let _main=this.refs.kpiTree;  
        _main.innerHTML="";  
        this._fetchTreeNodeData("",_main,0);  
    }  
    _handleSelect=()=>{   
        let _select=[];  
        $(this.refs.kpiTree).find("input:checkbox").each(function() {//$('#kpiTree input:checkbox')  
            if ($(this)[0].pid!=undefined&&$(this)[0].checked ==true) {  
                let _selected_kpi={};  
                _selected_kpi.kid=$(this)[0].parentNode.id.substring(4);  
                _selected_kpi.kname=$(this)[0].parentNode.children[1].innerHTML  
                _selected_kpi.pid=$(this)[0].parentNode.pid.substring(4);  
                _select.push(_selected_kpi);
            }  
        });  
        this.props.callbackParent(_select);  
    }  
    componentDidMount=()=>{  
        let _main=this.refs.kpiTree;  
        this._fetchTreeNodeData("",_main,0); 
        // this._fetchTreeNodeData(nodeId,currentNode,20);
    }  
    _selectAllCheckBox=(parentNodeId,event)=>{  
        let _items=$("#" + parentNodeId+" input")  
        for(let i=0;i<_items.length;i++){  
            if (_items[i].pid!=undefined&&_items[i].pid==parentNodeId){  
                _items[i].checked=event.currentTarget.checked;  
            }  
        }  
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
                _i.onclick=_self._handleClick.bind(this,data.kid); 
                let _checkBox=document.createElement("input");  
                _checkBox.type="checkbox"  
                _checkBox.pid="node"+data.pid;  
                let _span=document.createElement("span");  
                _span.innerHTML=_kname;  
                let allCheckBoxDiv=null;  
                if(data.pid!="-1"&&index==0&&hasAllSelectBox==true){  
                    allCheckBoxDiv=document.createElement("div");  
                    allCheckBoxDiv.pid="node"+data.pid;  
                    allCheckBoxDiv.style.paddingLeft=paddingLeft+"px";  
                    let _allCheckBox=document.createElement("input");  
                    _allCheckBox.type="checkbox";  
                    _allCheckBox.onchange=_self._selectAllCheckBox.bind(this,nodeObj.id);  
                    let _allCheckBoxLabel=document.createElement("span");  
                    _allCheckBoxLabel.innerHTML="全选";  
                    allCheckBoxDiv.appendChild(_allCheckBox);  
                    allCheckBoxDiv.appendChild(_allCheckBoxLabel);  
                }  
                if(data.hasChild=="1"){  
                    _div.appendChild(_i);  
                }  
                else if(data.hasChild=="0"){  
                    _div.appendChild(_checkBox);  
                }  
                _div.appendChild(_span);  
                if(allCheckBoxDiv){  
                    nodeObj.appendChild(allCheckBoxDiv)  
                }  
                nodeObj.appendChild(_div);  
            })  
  
        }  
    }  
    _fetchTreeNodeData=(nodeId,nodeObj,paddingLeft)=>{   
        let _self=this,cData;
        if( nodeId=='' ){
            cData = _self.state.data;
        }else if( nodeId=='1' ){
            cData = _self.state.data1
        }else if( nodeId=='01' ){
            cData = _self.state.data01
        }else if( nodeId=='011' ){
            cData = _self.state.data011
        }
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
        let cData;
        let _clickImg=event.currentTarget  
        let currentNode=event.currentTarget.parentNode;
        if( nodeId=='1' ){
            cData = this.state.data
        }else if( nodeId=='01' ){
            cData = this.state.data1
        }else if( nodeId=='011' ){
            cData = this.state.data01
        }
        let index=currentNode.id.substr(currentNode.id.length-1,1)
        console.log(cData[index-1])
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