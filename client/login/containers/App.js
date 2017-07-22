import React, {Component} from 'react'  
import styles from '../sass/App'
import utils from '../../shared/utils'

class App extends Component {
    constructor() {
        super()
    }

   

    submit(){
        if($("#name").val() == ''){
            alert('请填写用户名，谢谢')
            return false
        }else if($("#password").val() == ''){
            alert('请填写密码，谢谢')
            return false
        }

        let datas = {}; 
        datas.name =$("#name").val();
        datas.password =$("#password").val();

        utils.ajax({url: '/api/doLogin',data:datas}).then(re => {
  
           if(re.length != 0){
            location.href='/'
           }else{
            alert('用户名或密码不对，请重试')
            return false
           }
        })

    }

    render() { 
        return (
            <div className={"ui middle aligned center aligned "+ styles.grid}>
              <div className={styles.column}>
                <h2 className={styles.image + " ui teal header"} > 
                  <div className={styles.content}>
                    多屏互动系统
                  </div>
                </h2>
                <form className="ui large form">
                  <div className="ui stacked segment">
                    <div className="field">
                      <div className="ui left icon input " >
                        <i className="user icon"></i>
                        <input type="text" name="email" placeholder="用户名" className={styles.put} id="name"/>
                      </div>
                    </div>
                    <div className="field">
                       <div className="ui left icon input " >
                        <i className="lock icon"></i>
                        <input type="password" name="password" placeholder="密码" className={styles.put} id="password"/>
                      </div>
                    </div>
                    <div className="ui fluid large teal submit button" onClick={this.submit.bind(this)}  >登录</div>
                  </div>

                  <div className="ui error message"></div>

                </form> 
              </div>
            </div>
        )
    }
}

export default App
