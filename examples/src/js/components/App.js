import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'awesome-bootstrap-checkbox';

import React from 'react';
import Checkbox from 'react-bootstrap-checkbox';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h2>Checkboxes</h2>
        <form role="form">
          <div className="row">
            <div className="col-md-4">
              <fieldset>
                <legend>
                  Basic
                </legend>
                <p>
                  Supports bootstrap brand colors: <code>.checkbox-primary</code>, <code>.checkbox-info</code> etc.
                </p>
                <div className="checkbox">
                  <input id="checkbox1" className="styled" type="checkbox"/>
                  <label htmlFor="checkbox1">
                    Default
                  </label>
                </div>
                <div className="checkbox checkbox-primary">
                  <input id="checkbox2" className="styled" type="checkbox" defaultChecked/>
                  <label htmlFor="checkbox2">
                    Primary
                  </label>
                </div>
                <div className="checkbox checkbox-success">
                  <input id="checkbox3" className="styled" type="checkbox"/>
                  <label htmlFor="checkbox3">
                    Success
                  </label>
                </div>
                <div className="checkbox checkbox-info">
                  <input id="checkbox4" className="styled" type="checkbox"/>
                  <label htmlFor="checkbox4">
                    Info
                  </label>
                </div>
                <div className="checkbox checkbox-warning">
                  <input id="checkbox5" type="checkbox" className="styled" defaultChecked/>
                  <label htmlFor="checkbox5">
                    Warning
                  </label>
                </div>
                <div className="checkbox checkbox-danger">
                  <input id="checkbox6" type="checkbox" className="styled" defaultChecked/>
                  <label htmlFor="checkbox6">
                    Check me out
                  </label>
                </div>
                <p>Checkboxes without label text</p>
                <div className="checkbox">
                  <input type="checkbox" className="styled" id="singleCheckbox1" defaultValue="option1"
                         aria-label="Single checkbox One"/>
                  <label />
                </div>
                <div className="checkbox checkbox-primary">
                  <input type="checkbox" className="styled styled-primary" id="singleCheckbox2" defaultValue="option2"
                         defaultChecked aria-label="Single checkbox Two"/>
                  <label />
                </div>
                <p>Inline checkboxes</p>
                <div className="checkbox checkbox-inline">
                  <input type="checkbox" className="styled" id="inlineCheckbox1" defaultValue="option1"/>
                  <label htmlFor="inlineCheckbox1"> Inline One </label>
                </div>
                <div className="checkbox checkbox-success checkbox-inline">
                  <input type="checkbox" className="styled" id="inlineCheckbox2" defaultValue="option1" defaultChecked/>
                  <label htmlFor="inlineCheckbox2"> Inline Two </label>
                </div>
                <div className="checkbox checkbox-inline">
                  <input type="checkbox" className="styled" id="inlineCheckbox3" defaultValue="option1"/>
                  <label htmlFor="inlineCheckbox3"> Inline Three </label>
                </div>
              </fieldset>
            </div>
            <div className="col-md-4">
              <fieldset>
                <legend>
                  Circled
                </legend>
                <p>
                  <code>.checkbox-circle</code> for roundness.
                </p>
                <div className="checkbox checkbox-circle">
                  <input id="checkbox7" className="styled" type="checkbox"/>
                  <label htmlFor="checkbox7">
                    Simply Rounded
                  </label>
                </div>
                <div className="checkbox checkbox-info checkbox-circle">
                  <input id="checkbox8" className="styled" type="checkbox" defaultChecked/>
                  <label htmlFor="checkbox8">
                    Me too
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="col-md-4">
              <fieldset>
                <legend>
                  Disabled
                </legend>
                <p>
                  Disabled state also supported.
                </p>
                <div className="checkbox">
                  <input className="styled" id="checkbox9" type="checkbox" disabled/>
                  <label htmlFor="checkbox9">
                    Can't check this
                  </label>
                </div>
                <div className="checkbox checkbox-success">
                  <input className="styled styled" id="checkbox10" type="checkbox" disabled defaultChecked/>
                  <label htmlFor="checkbox10">
                    This too
                  </label>
                </div>
                <div className="checkbox checkbox-warning checkbox-circle">
                  <input className="styled" id="checkbox11" type="checkbox" disabled defaultChecked/>
                  <label htmlFor="checkbox11">
                    And this
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </form>
        <h2>Radios</h2>
        <form role="form">
          <div className="row">
            <div className="col-md-4">
              <fieldset>
                <legend>
                  Basic
                </legend>
                <p>
                  Supports bootstrap brand colors: <code>.radio-primary</code>, <code>.radio-danger</code> etc.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="radio">
                      <input type="radio" name="radio1" id="radio1" defaultValue="option1" defaultChecked/>
                      <label htmlFor="radio1">
                        Small
                      </label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="radio1" id="radio2" defaultValue="option2"/>
                      <label htmlFor="radio2">
                        Big
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="radio radio-danger">
                      <input type="radio" name="radio2" id="radio3" defaultValue="option1"/>
                      <label htmlFor="radio3">
                        Next
                      </label>
                    </div>
                    <div className="radio radio-danger">
                      <input type="radio" name="radio2" id="radio4" defaultValue="option2" defaultChecked/>
                      <label htmlFor="radio4">
                        One
                      </label>
                    </div>
                  </div>
                </div>
                <p>Radios without label text</p>
                <div className="radio">
                  <input type="radio" id="singleRadio1" defaultValue="option1" name="radioSingle1"
                         aria-label="Single radio One"/>
                  <label />
                </div>
                <div className="radio radio-success">
                  <input type="radio" id="singleRadio2" defaultValue="option2" name="radioSingle1" defaultChecked
                         aria-label="Single radio Two"/>
                  <label />
                </div>
                <p>Inline radios</p>
                <div className="radio radio-info radio-inline">
                  <input type="radio" id="inlineRadio1" defaultValue="option1" name="radioInline" defaultChecked/>
                  <label htmlFor="inlineRadio1"> Inline One </label>
                </div>
                <div className="radio radio-inline">
                  <input type="radio" id="inlineRadio2" defaultValue="option2" name="radioInline"/>
                  <label htmlFor="inlineRadio2"> Inline Two </label>
                </div>
              </fieldset>
            </div>
            <div className="col-md-4">
              <fieldset>
                <legend>
                  Disabled
                </legend>
                <p>
                  Disabled state also supported.
                </p>
                <div className="radio radio-danger">
                  <input type="radio" name="radio3" id="radio5" defaultValue="option1" disabled/>
                  <label htmlFor="radio5">
                    Next
                  </label>
                </div>
                <div className="radio">
                  <input type="radio" name="radio3" id="radio6" defaultValue="option2" defaultChecked disabled/>
                  <label htmlFor="radio6">
                    One
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="col-md-4">
              <fieldset>
                <legend>
                  As Checkboxes
                </legend>
                <p>
                  Radios can be made to look like checkboxes.
                </p>
                <div className="checkbox checkbox">
                  <input type="radio" name="radio4" id="radio7" defaultValue="option1" defaultChecked/>
                  <label htmlFor="radio7">
                    Defeault
                  </label>
                </div>
                <div className="checkbox checkbox-success">
                  <input type="radio" name="radio4" id="radio8" defaultValue="option2"/>
                  <label htmlFor="radio8">
                    Success
                  </label>
                </div>
                <div className="checkbox checkbox-danger">
                  <input type="radio" name="radio4" id="radio9" defaultValue="option3"/>
                  <label htmlFor="radio9">
                    Danger
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default App;
