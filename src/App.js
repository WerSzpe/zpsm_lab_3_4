import { directive, tsImportEqualsDeclaration } from "@babel/types";
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import InputNumberButton from "./inputNumberButton";

const math = require("mathjs");

const buttons = [
  ['AC', 'DEL'],
  ['7','8','9','/'],
  ['4','5','6', '*'],
  ['1','2','3','-'],
  ['0', '.', '=', '+']
];

const buttonsLand = [
  ['x!','AC', 'DEL'],
  ['10^x','7','8','9','/'],
  ['log10','4','5','6', '*'],
  ['x^2','1','2','3','-'],
  ['x^3','0', '.', '=', '+']
];

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};




class App extends Component {

  constructor() {
    super()

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape',
  	  displayString:  ''
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape'
      });
    });
  }


  renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputNumberButton
                  value={buttonItems}
                  handleOnPress={this.handleInput.bind(this, buttonItems)}
                  key={'btn-' + buttonIndex} />
      });
      return <View style={styles.inputRow} key={'row-'+index}>{rowItem}</View>
    });
    return layouts
  }

  renderButtonsLandscape() {
    let layouts = buttonsLand.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputNumberButton
                  value={buttonItems}
                  handleOnPress={this.handleInput.bind(this, buttonItems)}
                  key={'btn-' + buttonIndex} />
      });
      return <View style={styles.inputRow} key={'row-'+index}>{rowItem}</View>
    });
    return layouts
  }

  handleInput = (input) =>{
    const { displayString } = this.state;

	if(this.state.displayString=="Error")
        this.setState({
          displayString:  ""
        })
    switch (input) {

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '+':
      case '-':
      case '*':
      case '/':
      case '.' :

        this.setState({
          displayString:  (displayString + input)
        })
        break;
      case '=' :
		try{
			let result = math.evaluate(this.state.displayString);
			if(!isNaN(result) && result != Infinity)
				this.setState({displayString: math.round(result, 4).toString()});
			else
				this.setState({displayString: 'Error'});
		}
		catch(error){
			this.setState({displayString: 'Error'});
		}

        break;

      case 'AC' :
        this.setState({
          displayString:  ""
        })
        break;
      case 'DEL' :
      	if(this.state.displayString.length>0)
	        this.setState({
	          displayString:  this.state.displayString.substring(0, displayString.length-1)
	        })
        break;
      case 'x!':
        this.setState({
          displayString: "("+displayString+")!"
        })
        break;
      case 'x^2':
        this.setState({
          displayString: "("+displayString+")^2"
        })
        break;
      case 'x^3':
        this.setState({
          displayString: "("+displayString+")^3"
        })
        break;
      case '10^x':
        this.setState({
          displayString: "10^("+displayString+")"
        })
        break;
      case 'log10':
        this.setState({
          displayString: "log10("+displayString+")"
        })
        break;

    }
  }

  render() {
    if(this.state.orientation === 'portrait') {
      return (
        <View style={styles.container}>

          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {this.state.displayString}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            {this.renderButtons()}
          </View>

        </View>
      );
    } else {
      return (
        <View style={styles.container}>

          <View style={styles.resultContainer}>
            <Text style={styles.resultTextLand}>
              {this.state.displayString}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            {this.renderButtonsLandscape()}
          </View>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultContainer: {
    flex: 2,
    justifyContent:'center',
    backgroundColor: '#06081c'
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#06081c'
  },
  resultText: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
  resultTextLand: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
  inputRow: {
    flex:1,
    flexDirection: 'row'
  }
});

export default App;