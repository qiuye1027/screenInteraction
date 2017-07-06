import React, {Component} from 'react'
import styles from '../sass/App'
import utils from '../../shared/utils'

class SectionMain extends Component {
    constructor() {
        super()
        this.state = {
            eventArr : []
        }
    }
     componentDidMount() {

        let _this = this;
 
        shoeMession()


 





    
      

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button className="positive ui button">下载单机任务</button>
                </div>
                <div id='calendar'></div>
 
                 <div className="ui small  newMession modal">
                    
                    <div className="header">
                        添加任务
                    </div>
                        <div className="ui form "> 
                            <div className="two fields">
                                <div className="field">
                                    <label>任务名称</label>
                                    <input type="text" name="messionName" id="messionName"  />
                                </div>  
                            </div>  

                            <div className="two fields">
                                <div className="field">
                                  <label>起始时间</label>
                                  <input type="datetime-local" name="startTime" id="startTime" />
                                </div>
                                <div className="field">
                                  <label>结束时间</label>
                                  <input type="datetime-local" name="endTime" id="endTime" />
                                </div>
                            </div>  
                        </div>
                    
                    <div className="actions">
                        <div className="ui small negative button">
                               不
                        </div> 
                          <input type="button" value="是" className="ui small positive button"/> 
                    </div>
                </div>



            </div>
        )
    }
}

export default SectionMain




function shoeMession (){


        let eventData = [];

        utils.ajax({url: '/api/messionList'}).then(re => {
           for(let i of re){

                let da = {},messionName = i.name,isAllow = i.is_allow
                da.messionId = i.id
     

                 utils.ajax({url: '/api/messionDetail',data:da}).then(res => {
               
                    for(let o of res){
                         eventData.push({
                            title: messionName,
                            start: o.execute_start_time.split('.')[0],
                            end: o.execute_end_time.split('.')[0],
                            id : i.id
                        })     
                    }
    
                })
            }  

        })

        setTimeout(function(){
            
            $('#calendar').fullCalendar({
          

                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: ''
                },  
                editable: false,
                eventLimit: true, // allow "more" link when too many events
                navLinks: false,
                defaultView : 'agendaWeek',
                locale: 'zh-cn',  
                events: eventData

                
                ,
                dayClick: function(date, jsEvent, view) { //点击日历
                    // 日期点击
                    // console.log('Clicked on: ' + date.format());

                    // console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

                    // console.log('Current view: ' + view.name);

                    document.getElementById('startTime').value = date.format()
                   
                    // change the day's background color just for fun
                    //$(this).css('background-color', 'red');
                    $('.newMession.modal').modal('show').modal({
                      closable  : false, 
                      onHidden : function(){
                        $(".ui.small.modal").modal("hide")
                      },
                      onApprove : function() {
                        
                        
                        let datas = {}
                        datas.messionName = document.getElementById('messionName').value
                        datas.startTime = document.getElementById('startTime').value
                        datas.endTime = document.getElementById('endTime').value
                         utils.ajax({url: '/api/messionAdd',data:datas}).then(re => {
                            shoeMession()

                        })
                        


                      }
                    })


                },
                 eventClick: function(calEvent, jsEvent, view) {  //点击任务
                    // 事件点击
                    //console.log(  calEvent );
                    // console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                    // console.log('View: ' + view.name);
                    
                    
                    document.getElementById('messionName').value = calEvent.title
                    document.getElementById('startTime').value = calEvent.start._i
                    document.getElementById('endTime').value = calEvent.end._i
                    document.getElementById('messionName').disabled=false
 

                     $('.newMession.modal').modal('show').modal({
                      closable  : false, 
                      onHidden : function(){
                        $(".ui.small.modal").modal("hide")
                      },
                      onApprove : function() {
                        
                        let datas = {}
                        datas.messionId = calEvent.id 
                        datas.startTime = document.getElementById('startTime').value
                        datas.endTime = document.getElementById('endTime').value


                         utils.ajax({url: '/api/messionUpdate',data:datas}).then(re => {
                            shoeMession()

                        })



                      }
                    })

                }

            });


        },100)
             

  



}
