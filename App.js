import React, {useState} from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [urii, setUrii] = useState(DiceSix);

  const playButton1 = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;
      default:
        setUri(DiceOne);
        break;
    }
  };

  const playButton2 = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUrii(DiceOne);
        break;
      case 2:
        setUrii(DiceTwo);
        break;
      case 3:
        setUrii(DiceThree);
        break;
      case 4:
        setUrii(DiceFour);
        break;
      case 5:
        setUrii(DiceFive);
        break;
      case 6:
        setUrii(DiceSix);
        break;
      default:
        setUrii(DiceOne);
        break;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="black" />
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />

        <TouchableOpacity onPress={playButton1}>
          <Text style={styles.button}>Play Game</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={playButton2}>
          <Text style={styles.button}>Play Game</Text>
          <Image style={styles.image} source={urii} />
        </TouchableOpacity> */}
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 200,
    width: 200,
    marginBottom: 40,
  },

  button: {
    fontSize: 20,
    color: 'white',
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: '#30475e',
    borderWidth: 3,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});
