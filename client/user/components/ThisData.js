import React, {Component} from 'react' 
import styles from '../sass/ThisData'
class ThisData extends Component {
    constructor() {
        super()
        this.state = {
          thisData:{},
          editArr:{
            id:'用户ID',
            username:'姓名',
            remark:'备注',
            password:'密码设置',
            create_time:'有效期',
            effective_time:'有效时间（天）',
            ExpTime:'有效时间',
            power:'权限设置',
            tlmg:'终端管理'
          }
        }
    }
    handleChange(word,event) {
      console.log(word)
      let name = event.target.name;
      let data = this.state.thisData;
      data[name] = event.target.value;
      this.setState({thisData: data});
      // 在此获取 修改后数据  this.state.thisData
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps){
      this.setState({thisData:nextProps.data});
    }

    shouldcomponentupdate(){
      return true;
    }

    render() {
      let _self = this;
      let formDom1 = [<div className="field">
                <label>用户ID</label>
                <input type="text" name="id" disabled placeholder="请输入用户ID" />
              </div>,
              <div className="field">
                <label>用户名</label>
                <div className="ui icon input">
                  <input type="text" name="username" disabled className={styles.input} placeholder="请输入姓名" />
                  <i className="user icon"></i>
                </div>
              </div>,
              <div className="field">
                <label>密码设置</label>
                <div className="ui icon input">
                  <input type="password" name="password" disabled className={styles.input} placeholder="请输入密码" />
                  <i className="lock icon"></i>
                </div>
              </div>,
              <div className="field">
                <label>备注</label>
                <input type="text" name="remark" disabled placeholder="请输入备注" />
              </div>,
              <div className="two fields">
                <div className="field">
                  <label>有效期</label>
                  <input type="text" name="create_time" disabled placeholder="有效期" />
                </div>
                <div className="field">
                  <label>有效时间（天）</label>
                  <input type="text" name="effective_time" disabled placeholder="有效时间（天）" />
                </div>
              </div>,
              <div className="field">
                <label>权限设置</label>
                <input type="text" name="power" disabled placeholder="权限设置" />
              </div>,
              <div className="field">
                <label>终端管理</label>
                <input type="text" name="tlmg" disabled placeholder="终端管理" />
              </div>];
      let formDom = [];
      for(var o in this.state.thisData){
        if(o == 'id'){
          formDom.push(
            <div className="field">
                  <label htmlFor={o}>{_self.state.editArr[o]}</label>
                  <input type="text" name={o} id={o} disabled value={_self.state.thisData[o]} placeholder={o} onChange={this.handleChange.bind(this)} />
            </div>
          )
        }else if(o == 'username'){
          formDom.push(
            <div className="field">
              <label htmlFor={o}>{_self.state.editArr[o]}</label>
              <div className="ui icon input">
                <input type="text" name={o} id={o} className={styles.input} value={_self.state.thisData[o]} placeholder={o} onChange={this.handleChange.bind(this)} />
                <i className="user icon"></i>
              </div>
            </div>
          )
        }else if(o == 'password'){
          formDom.push(  
            <div className="field">
              <label htmlFor={o}>{_self.state.editArr[o]}</label>
              <div className="ui icon input">
                <input type="password" name={o} id={o} className={styles.input} value={_self.state.thisData[o]} placeholder={o} onChange={this.handleChange.bind(this)} />
                <i className="lock icon"></i>
              </div>
            </div>
          )
        }else if(o == 'create_time'){
          formDom.push(
            <div className={styles.fields}>
                  <label htmlFor={o}>{_self.state.editArr[o]}</label>
                  <input type="text" name={o} id={o} value={_self.state.thisData[o]} placeholder={o} onChange={this.handleChange.bind(this)} />
            </div>
          )
        }else if(o == 'effective_time'){
          formDom.push(
            <div className={styles.fields}>
                  <label htmlFor={o}>{_self.state.editArr[o]}</label>
                  <input type="text" name={o} id={o} value={_self.state.thisData[o]} placeholder={o} onChange={this.handleChange.bind(this)} />
            </div>
          )
        }else{
          formDom.push(
            <div className="field">
                  <label htmlFor={o}>{_self.state.editArr[o]}</label>
                  <input type="text" name={o} id={o} value={_self.state.thisData[o]} placeholder={o} onChange={this.handleChange.bind(this)} />
            </div>
          )  
        }
      }
      return (
             <form className="ui form">
              {formDom}
              <button className="ui button" type="button">确定修改</button>
             </form>
      )
    }
}

export default ThisData
              // <div className="field">
              //   <label>{_self.state.editArr.id}</label>
              //   <input type="text" name="id" value={_self.state.thisData.id} disabled placeholder="id" onChange={this.handleChange.bind(this)} />
              // </div>
              // <div className="field">
              //   <label>{_self.state.editArr.username}</label>
              //   <div className="ui icon input">
              //     <input type="text" name="username" className={styles.input} value={_self.state.thisData.username} placeholder="username" onChange={this.handleChange.bind(this)} />
              //     <i className="user icon"></i>
              //   </div>
              // </div>
              // <div className="field">
              //   <label>{_self.state.editArr.password}</label>
              //   <div className="ui icon input">
              //     <input type="password" name="password" className={styles.input} value={_self.state.thisData.password} placeholder="password" onChange={this.handleChange.bind(this)} />
              //     <i className="lock icon"></i>
              //   </div>
              // </div>
              // <div className="field">
              //   <label>{_self.state.editArr.remark}</label>
              //   <input type="text" name="remark" value={_self.state.thisData.remark} placeholder="remark" onChange={this.handleChange.bind(this)} />
              // </div>
              // <div className="two fields">
              //   <div className="field">
              //     <label>{_self.state.editArr.create_time}</label>
              //     <input type="text" name="create_time" value={_self.state.thisData.create_time} placeholder="create_time" onChange={this.handleChange.bind(this)} />
              //   </div>
              //   <div className="field">
              //     <label>{_self.state.editArr.effective_time}</label>
              //     <input type="text" name="effective_time" value={_self.state.thisData.effective_time} placeholder="effective_time" onChange={this.handleChange.bind(this)} />
              //   </div>
              // </div>
              // <div className="field">
              //   <label>{_self.state.editArr.power}</label>
              //   <input type="text" name="power" value={_self.state.thisData.power} placeholder="power" onChange={this.handleChange.bind(this)} />
              // </div>,
              // <div className="field">
              //   <label>{_self.state.editArr.tlmg}</label>
              //   <input type="text" name="tlmg" value={_self.state.thisData.tlmg} placeholder="tlmg" onChange={this.handleChange.bind(this)} />
              // </div>