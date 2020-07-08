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
      selectedDateTime:'',
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
    this.setState({selectedTime:event.target.value+':00'});
  }

  timeConvert(event) {
    let datetime=this.state.selectedDate+' '+this.state.selectedTime;
    this.setState({selectedDateTime:datetime});
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
    else if(this.state.selectedTimeZone === 'utc'){
      this.setState({calculatedDateTimeInUTC:moment.tz(datetime).utc().format('YYYY-MM-DD HH:mm:ss')});
    }
    else{
      this.setState({calculatedDateTimeInUTC:''});
    }
  }

  render() {
    return(
      <>
        <div style={{width: 400, height: 300, border: '5px solid green', marginBottom: '50px', margin: '0 auto', fontSize: '18px'}}>
          <h1>User preference page :</h1>
          <h3>Select your time zone :</h3>
          <div onChange={this.setTimeZone.bind(this)}>
            <input type="radio" value="pst" name="time_zone" checked={this.state.selectedTimeZone==='pst'}/> PST <br/>
            <input type="radio" value="est" name="time_zone" checked={this.state.selectedTimeZone==='est'}/> EST <br/>
            <input type="radio" value="cst" name="time_zone" checked={this.state.selectedTimeZone==='cst'}/> CST <br/>
            <input type="radio" value="mst" name="time_zone" checked={this.state.selectedTimeZone==='mst'}/> MST <br/>
            <input type="radio" value="utc" name="time_zone" checked={this.state.selectedTimeZone==='utc'}/> UTC <br/>
          </div>
        </div>
        <br/><br/>
        <div style={{width: 400, height: 450, border: '5px solid green', margin: '0 auto', fontSize: '18px'}}>
          <h1>Date time select page :</h1>
          Select date: &nbsp;&nbsp;&nbsp; <DatePicker onChange={this.onDateChange}/><br/><br/>
          Select time: &nbsp;&nbsp;&nbsp;
          <select name="time"  onChange={this.onTimeChange}>
            <option value="00:00">00:00</option>
            <option value="01:00">01:00</option>
            <option value="02:00">02:00</option>
            <option value="03:00">03:00</option>
            <option value="04:00">04:00</option>
            <option value="05:00">05:00</option>
            <option value="06:00">06:00</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
          <br/><br/>
          <button type="" onClick={this.timeConvert}>Submit</button>
          <br/><br/>
          Your local Time :{this.state.selectedDateTime}<br/><br/>
          Time in UTC :{this.state.calculatedDateTimeInUTC}<br/><br/>
          <p style={{ color:"green"}}> * Tested with worldtimebuddy.com</p>
        </div>

      </>
    )
  };
}

export default App;
