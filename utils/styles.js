import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dropdownsRow: {flexDirection: 'row', width: '100%', paddingHorizontal: '5%'},

  dropdown1BtnStyle: {
    height: 30,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00AEEF',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left', color: '#00AEEF'},
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#00AEEF',
    borderRadius: 50,
    padding: 10,
    width: 300,
    fontFamily: 'Roboto-Italic',
    fontSize: 15,
  },
  button: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#00AEEF',
    backgroundColor: '#00AEEF',
    borderRadius: 50,
    padding: 10,
    width: 300,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
  },
  smallTextLink: {
    color: '#00AEEF',
    textDecorationLine: 'underline',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
