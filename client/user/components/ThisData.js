import React, {Component} from 'react' 
class ThisData extends Component {
    constructor() {
        super()
        this.state = {
          thisData:{}
        }
    }
    componentDidMount() {
    }

    componentWillReceiveProps(nextProps){
      let _self = this;
      // console.log(nextProps)
      this.setState({thisData : nextProps.data});
    }


    render() {
      let _self = this;
      // console.log(_self.state.thisData);
      
      return (
             <form className="ui form">
              <div className="field">
                <label>kid</label>
                <input type="text" name="kid" value={_self.state.thisData.kid} placeholder="kid" />
              </div>
              <div className="field">
                <label>kname</label>
                <input type="text" name="kname" value={_self.state.thisData.kname} placeholder="kname" />
              </div>
              <div className="field">
                <label>hasChild</label>
                <input type="text" name="hasChild" value={_self.state.thisData.hasChild} placeholder="hasChild" />
              </div>
              <div className="field">
                <label>pid</label>
                <input type="text" name="pid" value={_self.state.thisData.pid} placeholder="pid" />
              </div>
              <button className="ui button" type="button">确定修改</button>
            </form>
      )
    }
}

export default ThisData