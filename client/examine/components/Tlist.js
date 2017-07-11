import React, {Component} from 'react'
class Tlist extends Component {
    constructor() {
        super()
        this.state = { 
           MainLog : [{
            name:"张三",
            make:43,
            time:"2017-09-09"
           },{
            name:"李四",
            make:11,
            time:"2017-10-18"
           },{
            name:"王五",
            make:88,
            time:"2017-10-26"
           },{
            name:"赵六",
            make:0,
            time:"2017-11-11"
           }]
        }
    }
    componentDidMount() {

    }
    render() {
        return (
          <tbody>
            {this.state.MainLog.map((MainLog) => {
              return (
                <tr>
                  <td>{MainLog.name}</td>
                  <td>{MainLog.make}</td>
                  <td>{MainLog.time}</td>
                </tr>
              )
            })}
          </tbody>
        )
    }
}

export default Tlist
