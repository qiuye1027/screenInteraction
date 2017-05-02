import React, {Component} from 'react'
import styles from '../sass/App'

class SectionMain extends Component {
    constructor() {
        super()
    }
     componentDidMount() {

        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');



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
            events: [
                {
                    title: 'All Day Event',
                    start: YM + '-01'
                },
                {
                    title: 'Long Event',
                    start: YM + '-07',
                    end: YM + '-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: YM + '-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: YM + '-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: YESTERDAY,
                    end: TOMORROW
                },
                {
                    title: 'Meeting',
                    start: TODAY + 'T10:30:00',
                    end: TODAY + 'T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: TODAY + 'T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: TODAY + 'T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: TODAY + 'T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: TODAY + 'T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: TOMORROW + 'T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: TOMORROW + 'T09:00:00'
                }
            ],
            dayClick: function(date, jsEvent, view) {
                // 日期点击
                console.log('Clicked on: ' + date.format());

                console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

                console.log('Current view: ' + view.name);

                // change the day's background color just for fun
                //$(this).css('background-color', 'red');
                $('.newMession.modal').modal('show') ;

            },
             eventClick: function(calEvent, jsEvent, view) {
                // 事件点击
                console.log('Event: ' + calEvent.title);
                console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                console.log('View: ' + view.name);

                // change the border color just for fun
                $(this).css('border-color', 'red');
                $('.newMession.modal').modal('show') ;

            }

        });


    
      

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
                            
                              <div className="field">
                                <label>素材名称</label>
                                <div className="two fields">
                                 
                                  <div className="field">
                                    <input type="time"  />
                                  </div>
                                </div>
                              </div> 

                              <div className="  inline field">
                                <div className="ui checkbox">
                                  <input type="checkbox" tabindex="0" name="scshare" value="1"/>
                                  <label>共享此素材</label>
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
