import React, {Component} from 'react' 
import styles from '../sass/App'
class SectionMain extends Component {
    constructor() {
        super()
    } 
  

     componentDidMount() {
       
        $('.test.newbatch.modal').modal('attach events','#upload','show');
        $('.delete.modal').modal('attach events','.button.delete','show');
        $('.newfile.modal').modal('attach events','#newfile','show');
        
    }

    render() {
    
        return (
            <div className="container"> 
                <div className="ui breadcrumb">
                  <a className="section"> 全部素材 </a>
                  <i className="right angle icon divider"></i>
                  <a className="section">图片</a>
                  <i className="right angle icon divider"></i>
                  <div className="active section">文件夹1</div>
                </div>
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
                    <tbody className={styles.app}>
                        <tr className=" ">
                            <td><a href=""><i className="folder icon"></i>图片</a></td>
                            <td>--</td>
                            <td>2009-09-09 12:20</td>
                            <td>
                                <a className="ui tiny basic button edit" href="./edit_action.html"><i className="edit icon"></i>重命名</a> 
                                <a className="ui tiny basic  button delete"><i className="delete icon"></i>删除</a>
                                <a className="ui tiny basic  button download"><i className="download icon"></i>下载</a>
                                <a className="ui tiny basic  button clone"><i className="clone icon"></i>复制到</a>
                                <a className="ui tiny basic  button move"><i className="move icon"></i>移动到</a> 
                            </td>
                        </tr>
                        <tr className=" ">
                            <td><a href=""><i className="folder icon"></i>图片</a></td>
                            <td>--</td>
                            <td>2009-09-09 12:20</td>
                           <td>
                                <a className="ui tiny basic button" href="./edit_action.html"><i className="edit icon"></i>重命名</a> 
                                <a className="ui tiny basic  button"><i className="delete icon"></i>删除</a>
                                <a className="ui tiny basic  button"><i className="download icon"></i>下载</a>
                               
                            </td>
                        </tr>
                         <tr className=" ">
                             <td><a href=""><i className="folder icon"></i>图片</a></td>
                            <td>--</td>
                            <td>2009-09-09 12:20</td>
                           <td>
                                <a className="ui tiny basic button" href="./edit_action.html"><i className="edit icon"></i>重命名</a> 
                                <a className="ui tiny basic  button"><i className="delete icon"></i>删除</a>
                                <a className="ui tiny basic  button"><i className="download icon"></i>下载</a>
                               
                            </td>
                        </tr>
                         <tr className=" ">
                             <td><a href=""><i className="folder icon"></i>图片</a></td>
                            <td>--</td>
                            <td>2009-09-09 12:20</td>
                            <td>
                                <a className="ui tiny basic button" href="./edit_action.html"><i className="edit icon"></i>重命名</a> 
                                <a className="ui tiny basic  button"><i className="delete icon"></i>删除</a>
                                <a className="ui tiny basic  button"><i className="download icon"></i>下载</a>
                               
                            </td>
                        </tr>
                    </tbody>
                </table>




            
                <div className="ui small   newbatch modal">
                    <i className="close icon"></i>
                    <div className="header">
                        上传文件
                    </div>
                    <div className="content">
                        <div className="ui form vertical segment">
                            <form name="form" method="post">
                                <input type="file"/>
                            </form>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui small black button">
                               取消
                        </div>
                        <div className="ui small positive right labeled icon button">
                            确定
                          <i className="checkmark icon"></i>
                        </div>
                    </div>
                </div>


 


                <div className="ui small modal transition hidden delete  " >
                     
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
                      <input type="text" placeholder="新建文件夹名称" />
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
