import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BasicDateRangePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="form-control"
                placeholderText="Select start date"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="form-control"
                placeholderText="Select end date"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
