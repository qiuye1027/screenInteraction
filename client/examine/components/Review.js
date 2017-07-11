import React, {Component} from 'react'
class Review extends Component {
    constructor() {
        super()
        this.state = { 
           MainLogs : [{
            name:"张三111",
            make:43,
            time:"2017-09-09"
           },{
            name:"李四222",
            make:11,
            time:"2017-10-18"
           },{
            name:"王五333",
            make:88,
            time:"2017-10-26"
           },{
            name:"赵六444",
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
            {this.state.MainLogs.map((MainLogs) => {
              return (
                <tr>
                  <td>{MainLogs.name}</td>
                  <td>{MainLogs.make}</td>
                  <td>{MainLogs.time}</td>
                </tr>
              )
            })}
          </tbody>
        )
    }
}

export default Review
