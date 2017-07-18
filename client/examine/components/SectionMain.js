import React, {Component} from 'react'
import styles from '../sass/SectionMain'
import Tlist from './Tlist'
import Review from './Review'
class SectionMain extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        $('.maintenance.modal').modal('attach events','.maintenance','show').modal({
          onApprove:function(){
            alert("创建模板成功")
          }
        }); 
        $('.review.modal').modal('attach events','.review','show').modal({
          onApprove:function(){
            alert("创建模板成功")
          }
        });
        $('.newmodel2.modal').modal('attach events','.newmodel2','show').modal({
          blurring: true,
          onHide:function(){
            $(this).find("textarea").val('');
          },
          onApprove:function(data){
            if($(this).find("textarea").val() == ''){
                $(this).find("textarea").focus();
                return false;
            }
            console.log($(this).find("textarea").val())
          }
        }); 
    }
    render() {
        // const {userInfo} = this.props

        return (
            <section className={styles.sectionMain} className="container">
                <div className={styles.dropdown}>
                    <div className="ui selection dropdown" tabIndex="0">
                        <input type="hidden" name="selection" />
                        <i className="dropdown icon"></i>
                        <div className="default text">待审核节目</div>
                        <div className="menu transition hidden" tabIndex="-1">
                        <div className="item" data-value="icheck">待审核节目</div>
                        <div className="item" data-value="aCheck">已审核节目</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                      <h1 className="ui header">审核</h1>
                      <div className="ui divider"></div>
                      <div className="ui vertical menu">
                        <div className="item">
                          <span>节目名称：</span>
                          <span>XXXX</span>
                          <button className="ui label button maintenance">维护日志</button>
                        </div>
                        <div className="item">
                          <span>创建者：</span>
                          <span>XXXX</span>
                          <button className="ui label button review">审核日志</button>
                        </div>
                        <div className="item">
                          <span>创建时间：</span>
                          <span>XXXX</span>
                          <button className="ui label button newmodel2">审核</button>
                        </div>
                      </div>
                      <div className="ui vertical menu">
                        <div className="item">
                          <span>节目名称：</span>
                          <span>XXXX</span>
                          <button className="ui label button maintenance">维护日志</button>
                        </div>
                        <div className="item">
                          <span>创建者：</span>
                          <span>XXXX</span>
                          <button className="ui label button review">审核日志</button>
                        </div>
                        <div className="item">
                          <span>创建时间：</span>
                          <span>XXXX</span>
                          <button className="ui label button newmodel2">审核</button>
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="ui maintenance modal"> 
                    <div className="ui text container">
                      <table className="ui bottom attached table">
                        <thead>
                          <tr>
                            <th>维护者</th>
                            <th>维护操作</th>
                            <th>维护时间</th>
                          </tr>
                        </thead>
                        <Tlist></Tlist>
                      </table>
                    </div>
                </div>
                <div className="ui review modal"> 
                    <div className="ui text container">
                      <table className="ui bottom attached table">
                        <thead>
                          <tr>
                              <th>审核者</th>
                              <th>审核操作</th>
                              <th>审核时间</th>
                          </tr>
                        </thead>
                        <Review></Review>
                      </table>
                    </div>
                </div>
                <div className="ui fullscreen newmodel2 modal">
                    <i className="close icon"></i>
                    <div className="header">审核结果</div>
                    <div className="content">
                      <div className="ui form">
                        <div className="field">
                          <textarea></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="actions">
                      <div className="ui button cancel">取消</div>
                      <div className="ui primary button ok">确定</div>
                    </div>
                  </div>
            </section> 
        )
    }
}

export default SectionMain
