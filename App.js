import React, { Component } from 'react';
import Board from './Components/Board';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: 1,
      tempo: 60,

      keySig: "C",
      timeSig: 4,

      clef: ["G", "F"],


      alphabet: ["A", "B", "C", "D", "E", "F", "G"],
      solfeggio: ["do", "re", "mi", "fa", "so", "la", "ti"],
      places: [
        {alp: 0, sol: "", place: 0, accidentals: 0,},
        {alp: 0, sol: "", place: 1, accidentals: 0,}, 
        {alp: 0, sol: "", place: 2, accidentals: 0,}, 
        {alp: 0, sol: "", place: 3, accidentals: 0,}, 
        {alp: 0, sol: "", place: 4, accidentals: 0,}, 
        {alp: 0, sol: "", place: 5, accidentals: 0,}, 
        {alp: 0, sol: "", place: 6, accidentals: 0,},
        {alp: 0, sol: "", place: 7, accidentals: 0,},
        {alp: 0, sol: "", place: 8, accidentals: 0,},
        {alp: 0, sol: "", place: 9, accidentals: 0,},
        {alp: 0, sol: "", place: 10, accidentals: 0,},
        {alp: 0, sol: "", place: 11, accidentals: 0,},
      ],

      handle: 0,
    }
  }

selectHandle() {
  this.setState({
    note: 0,
    handle: 0,
  })
}

wholeNote(){
  this.setState({
    note: 1,
    handle: 1,
  })
}

halfNote(){
  this.setState({
    note: 2,
    handle: 1,
  })
}

quarterNote(){
  this.setState({
    note: 4,
    handle: 1,
  })
}

handleChange = event => {
  this.setState({
    keySig: event.target.value
  
  })
  
}

timeSignature() {
  this.setState({
    timeSig: 4,
    handle: 1,
  })
}

renderMe(){

  let places = this.state.places;
  let alphabet = this.state.alphabet;
  let KeySig = this.state.keySig;

  let b = alphabet.findIndex( alphabet => {
    if (alphabet === KeySig) {
      return true;
    }
    else {
      return false;
    }
});

  let i = 0;
  let j = 0;
  let d  = 0;


  while(i < 12) {
    let c = b + d; 
    
      if (i === 0 || i === 2 || i === 4 || i === 5 || i === 7 || i === 9 || i === 11 ){
            if(c < 7) {
              places[i].alp = c
              d++;
            }
            else {
              c = 0; 
              places[i].alp = j 
              j++;
            }
          i++;
        }
      else {
        places[i].alp = "none"
        i++;
      }
  
    }
    
    this.setState({
      places: places
    })
    console.log(this.state.places)
}


  render() {
    return (
      
      <div>



        <div className="container"> 
          <p className="container-header">Notes</p> 
            <input  type="radio" name="tools" value="1" onClick={() => this.selectHandle()} defaultChecked="checked"/>Select |
            <input  type="radio" name="tools" value="1" onClick={() => this.wholeNote()}/>Whole
            <input  type="radio" name="tools" value="2" onClick={() => this.halfNote()}/>Half
            <input  type="radio" name="tools" value="2" onClick={() => this.quarterNote()}/>Quarter
        </div>

        <div className="container"> 
        <p className="container-header">Measurments</p>
          <div>
            Time Signature
              <button onClick={() => this.timeSignature()}>4/4</button>
              <button onClick={() => console.log("3/4 wala pa")}>3/4</button>
              <button onClick={() => console.log("2/4 wala pa")}>2/4</button>
          </div>

          <div>
            Key Signature
              <select value ={this.state.keySig} onChange={this.handleChange}> key
                <option value = "C">C</option>
                <option value = "D">D</option>
                <option value = "E">E</option>
                <option value = "F">F</option>  
                <option value = "G">G</option>
                <option value = "A">A</option>
                <option value = "B">B</option>
              </select>
          </div>

          <div>
                Clef
                  <button onClick={() => this.wholeNote()}>G clef</button>
                  <button onClick={() => console.log("3/4 wala pa")}>F Clef</button>
          </div>

          <div>
          note = {this.state.note} handle {this.state.handle}

          <div > console
            <button onClick={() => this.renderMe()}>click</button>
            <textarea className="textarea" readOnly ></textarea>
          </div>
        
        </div>
      </div>

        
        <div className= "area">
          <Board
            note={this.state.note} 
            tempo={this.state.tempo}
            timeSig= {this.state.timeSig}
            keySig={this.state.keySig}
            places={this.state.places}
            handle={this.state.handle}
          />
        </div>

    </div>
    
    );
  }
};

export default App;


