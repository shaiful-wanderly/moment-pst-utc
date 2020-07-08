import React from 'react';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment-timezone';

const timeOptions = [
  { value: '00:00', label: '12:00 am', disabled: false },
  { value: '00:30', label: '12:30 am', disabled: false },
  { value: '01:00', label: '1:00 am', disabled: false },
  { value: '01:30', label: '1:30 am', disabled: false },
  { value: '02:00', label: '2:00 am', disabled: false },
  { value: '02:30', label: '2:30 am', disabled: false },
  { value: '03:00', label: '3:00 am', disabled: false },
  { value: '03:30', label: '3:30 am', disabled: false },
  { value: '04:00', label: '4:00 am', disabled: false },
  { value: '04:30', label: '4:30 am', disabled: false },
  { value: '05:00', label: '5:00 am', disabled: false },
  { value: '05:30', label: '5:30 am', disabled: false },
  { value: '06:00', label: '6:00 am', disabled: false },
  { value: '06:30', label: '6:30 am', disabled: false },
  { value: '07:00', label: '7:00 am', disabled: false },
  { value: '07:30', label: '7:30 am', disabled: false },
  { value: '08:00', label: '8:00 am', disabled: false },
  { value: '08:30', label: '8:30 am', disabled: false },
  { value: '09:00', label: '9:00 am', disabled: false },
  { value: '09:30', label: '09:30 am', disabled: false },
  { value: '10:00', label: '10:00 am', disabled: false },
  { value: '10:30', label: '10:30 am', disabled: false },
  { value: '11:00', label: '11:00 am', disabled: false },
  { value: '11:30', label: '11:30 am', disabled: false },
  { value: '12:00', label: '12:00 pm', disabled: false },
  { value: '12:30', label: '12:30 pm', disabled: false },
  { value: '13:00', label: '1:00 pm', disabled: false },
  { value: '13:30', label: '1:30 pm', disabled: false },
  { value: '14:00', label: '2:00 pm', disabled: false },
  { value: '14:30', label: '2:30 pm', disabled: false },
  { value: '15:00', label: '3:00 pm', disabled: false },
  { value: '15:30', label: '3:30 pm', disabled: false },
  { value: '16:00', label: '4:00 pm', disabled: false },
  { value: '16:30', label: '4:30 pm', disabled: false },
  { value: '17:00', label: '5:00 pm' , disabled: false},
  { value: '17:30', label: '5:30 pm', disabled: false },
  { value: '18:00', label: '6:00 pm', disabled: false },
  { value: '18:30', label: '6:30 pm', disabled: false },
  { value: '19:00', label: '7:00 pm', disabled: false },
  { value: '19:30', label: '7:30 pm', disabled: false },
  { value: '20:00', label: '8:00 pm', disabled: false},
  { value: '20:30', label: '8:30 pm', disabled: false },
  { value: '21:00', label: '9:00 pm', disabled: false },
  { value: '21:30', label: '9:30 pm', disabled: false },
  { value: '22:00', label: '10:00 pm', disabled: false },
  { value: '22:30', label: '10:30 pm', disabled: false },
  { value: '23:00', label: '11:00 pm', disabled: false },
  { value: '23:30', label: '11:30 pm', disabled: false }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTimeZone:'pst',
      selectedDate:'',
      selectedTime:'',
      selectedDateTime:'',
      selectedDateTimeAmPm:'',
      calculatedDateTimeInUTC:'',
    };
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.timeConvert = this.timeConvert.bind(this);
  }

  setTimeZone(event) {
    console.log(event.target.value);
    this.setState({selectedTimeZone:event.target.value});
  }
  onDateChange(date, dateString) {
    console.log(date);
    console.log(dateString);

    this.setState({selectedDate:dateString});
  }
  onTimeChange(event) {
    console.log(event.target.value);
    this.setState({selectedTime:event.target.value});
  }

  timeConvert(event) {
    let datetime=this.state.selectedDate+' '+this.state.selectedTime;
    this.setState({selectedDateTime:datetime});
    this.setState({selectedDateTimeAmPm:moment(datetime).format('YYYY-MM-DD hh:mm:ss A')});
    if(this.state.selectedTimeZone === 'est'){
      console.log(moment.tz(datetime, "America/New_York").utc().format('YYYY-MM-DD hh:mm:ss A zz')); //EST - UTC
      this.setState({calculatedDateTimeInUTC:moment.tz(datetime, "America/New_York").utc().format('YYYY-MM-DD HH:mm:ss')});
    }
    else if(this.state.selectedTimeZone === 'pst'){
      console.log(moment.tz(datetime, "America/Los_Angeles").utc().format('YYYY-MM-DD hh:mm:ss A zz')); //PST - UTC
      this.setState({calculatedDateTimeInUTC:moment.tz(datetime, "America/Los_Angeles").utc().format('YYYY-MM-DD HH:mm:ss')});
    }
    else if(this.state.selectedTimeZone === 'mst'){
      console.log(moment.tz(datetime, "America/Phoenix").utc().format('YYYY-MM-DD hh:mm:ss A zz')); //MST - UTC
      this.setState({calculatedDateTimeInUTC:moment.tz(datetime, "America/Phoenix").utc().format('YYYY-MM-DD HH:mm:ss')});
    }
    else if(this.state.selectedTimeZone === 'cst'){
      console.log(moment.tz(datetime, "America/Chicago").utc().format('YYYY-MM-DD hh:mm:ss A zz')); //CST - UTC
      this.setState({calculatedDateTimeInUTC:moment.tz(datetime, "America/Chicago").utc().format('YYYY-MM-DD HH:mm:ss')});
    }
    else if(this.state.selectedTimeZone === 'honolulu'){
      console.log(moment.tz(datetime, "Pacific/Honolulu").utc().format('YYYY-MM-DD hh:mm:ss A zz')); //CST - UTC
      this.setState({calculatedDateTimeInUTC:moment.tz(datetime, "Pacific/Honolulu").utc().format('YYYY-MM-DD HH:mm:ss')});
    }
    else{
      this.setState({calculatedDateTimeInUTC:''});
    }
  }

  render() {
    return(
      <>
        <div style={{width: 600, height: 300, border: '5px solid CRIMSON', marginBottom: '50px', margin: '0 auto', fontSize: '18px'}}>
          <h1>User preference page :</h1>
          <h3>Select your time zone :</h3>
          <div onChange={this.setTimeZone.bind(this)}>
            <input type="radio" value="pst" name="time_zone" checked={this.state.selectedTimeZone==='pst'}/> PST <br/>
            <input type="radio" value="est" name="time_zone" checked={this.state.selectedTimeZone==='est'}/> EST <br/>
            <input type="radio" value="cst" name="time_zone" checked={this.state.selectedTimeZone==='cst'}/> CST <br/>
            <input type="radio" value="mst" name="time_zone" checked={this.state.selectedTimeZone==='mst'}/> MST <br/>
            <input type="radio" value="honolulu" name="time_zone" checked={this.state.selectedTimeZone==='mst'}/> Honolulu Hawaii <br/>
          </div>
        </div>
        <br/><br/>
        <div style={{width: 600, height: 500, border: '5px solid green', margin: '0 auto', fontSize: '18px'}}>
          <h1>Date time select page :</h1>
          Select date: &nbsp;&nbsp;&nbsp; <DatePicker onChange={this.onDateChange}/><br/><br/>
          Select time: &nbsp;&nbsp;&nbsp;
          <select onChange={this.onTimeChange}>{timeOptions.map((timeop) =>
            <option key={timeop.value} value={timeop.value}>{timeop.label}</option>
          )}</select>

          <br/><br/>
          <button type="" onClick={this.timeConvert}>Calculate UTC</button>
          <br/><br/>
          <h3>Output :</h3>
          Your local Time :{this.state.selectedDateTimeAmPm}<br/><br/>
          <b>Time in UTC (24 hours format): {this.state.calculatedDateTimeInUTC}</b><br/>
          <p>This 24 hour format UTC time will send to backend for save</p><br/>
          <p style={{ color:"green"}}> * Tested with
            <a href="https://www.worldtimebuddy.com/?pl=1&lid=8,5,6,100&h=8" target="_blank"> worldtimebuddy.com</a></p>
        </div>

      </>
    )
  };
}

export default App;
