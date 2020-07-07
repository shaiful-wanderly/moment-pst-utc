import React from 'react';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment-timezone';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTimeZone:'pst',
      selectedDate:'',
      selectedTime:'',
      calculatedDateTimeInUTC:'',
      time: ''
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
    console.log(moment.tz(dateString, "America/Toronto"));

    moment.tz([2012, 0], 'America/New_York').format('zz');    // Eastern Standard Time
    moment.tz([2012, 5], 'America/New_York').format('zz');    // Eastern Daylight Time
    moment.tz([2012, 0], 'America/Los_Angeles').format('zz'); // Pacific Standard Time
    moment.tz([2012, 5], 'America/Los_Angeles').format('zz'); // Pacific Daylight Time
    console.log( moment.tz([dateString, 0], 'America/New_York').format('zz'));
    console.log( moment.tz([dateString, 5], 'America/New_York').format('zz'));
    console.log( moment.tz([dateString, 5], 'America/Los_Angeles').format('zz'));
    console.log( moment.tz([dateString, 5], 'America/Los_Angeles').format('zz'));





    //const dateToValid = dateString + ' 23:00';
    this.setState({selectedDate:dateString});
  }
  onTimeChange(event) {
    console.log(event.target.value);
    this.setState({selectedTime:event.target.value});
  }

  timeConvert(event) {
    let v=this.state.selectedDate+' '+this.state.selectedTime;
    this.setState({calculatedDateTimeInUTC:v});
    console.log(event.target.value);
  }

  render() {
    return(
      <>
        <div style={{
          width: 400,
          height: 300,
          border: '5px solid green',
          marginBottom: '50px',
          margin: '0 auto',
          fontSize: '18px'
        }}>
          <h1>User preference page :</h1>
          <h3>Select your preferred time zone :</h3>

          <div onChange={this.setTimeZone.bind(this)}>
            <input type="radio" value="pst" name="time_zone" checked={this.state.selectedTimeZone==='pst'}/> PST <br/>
            <input type="radio" value="pdt" name="time_zone" checked={this.state.selectedTimeZone==='pdt'}/> PDT <br/>
            <input type="radio" value="est" name="time_zone" checked={this.state.selectedTimeZone==='est'}/> EST <br/>
            <input type="radio" value="utc" name="time_zone" checked={this.state.selectedTimeZone==='utc'}/> UTC <br/>
          </div>
        </div>
        <br/><br/>
        <div style={{width: 400, height: 400, border: '5px solid green', margin: '0 auto', fontSize: '18px'}}>
          <h1>Date time select page :</h1>
          Select date: &nbsp;&nbsp;&nbsp; <DatePicker onChange={this.onDateChange}/><br/><br/>
          Select time: &nbsp;&nbsp;&nbsp;
          <select name="time"  onChange={this.onTimeChange}>
            <option value="00:00">00:00</option>
            <option value="00:30">00:30</option>
            <option value="01:00">01:00</option>
            <option value="01:30">01:30</option>
            <option value="02:00">02:00</option>
            <option value="02:30">02:30</option>
            <option value="03:00">03:00</option>
            <option value="03:30">03:30</option>
            <option value="23:00">23:00</option>
          </select>
          <br/><br/>
          <button type="" onClick={this.timeConvert}>Submit</button>
          <br/><br/>

          Time in {this.state.selectedTimeZone} :{}<br/><br/>
          Time in UTC :{}<br/><br/>
        </div>

      </>
    )
  };
}

export default App;
