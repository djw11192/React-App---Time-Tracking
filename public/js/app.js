class GameDashboard extends React.Component {

  state = {
    moleLocation: Math.floor(Math.random() * 9).toString(),
    id: uuid.v4(),
    moleVisible: true,
    score: 0,
  }
  handleMoleChange = () =>{
    console.log(this.props.boxNum)
    this.setState({
      moleVisible: !this.state.moleVisible,
      score: this.state.score +=1,
    })
    this.moveMole()
  }

  moveMole = () =>{
    var miliseconds = Math.random()*2000;
    console.log(miliseconds)
    setTimeout(function(){this.setState({moleVisible: !this.state.moleVisible, moleLocation: Math.floor(Math.random() * 9).toString()})}.bind(this), miliseconds)
  }


  render(){
    const boxStyle = {
      width: '200px',
      height: '200px',
      background: 'green',
      display: 'inline-block',
      margin: '2px'
    }
    return(
        <div className="board">
        <Score
          myscore={this.state.score}
        />
        <Boxes
          className="boxes"
          boxNum="0"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="1"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="2"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="3"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="4"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="5"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="6"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="7"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="8"
          moleSpot={this.state.moleLocation}
          moleShown={this.state.moleVisible}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />

      </div>
    );
  }
}

class Boxes extends React.Component {

  handleMoleClick = (box) =>{
    this.props.onMoleClick(box);
  }

  render(){
    if(this.props.moleSpot == this.props.boxNum && this.props.moleShown){
      return(
        <div className="boxes">
          <img className="moleBox" onClick={this.handleMoleClick} src="https://studio.code.org/media?u=https%3A%2F%2Flh3.ggpht.com%2FHhQVHSiOobcjNWrWTRFVDtbZ9N1wXqh_Fm5M_l_1Xqr1YLlw_ZCjAdlf1IzZR0WqsB8v%3Dw170"></img>
        </div>
      );
    }
    return(
      <div className="boxes"></div>
    );
  }
}

class Score extends React.Component{
  render(){
    return(
      <div className="text-center">
        {this.props.myscore}
      </div>
    )
  }
}

ReactDOM.render(
  <GameDashboard />,
  document.getElementById('content')
)
