import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTranslation} from 'react-i18next';
import styles from '../../utils/styles';

//const languages = ['Portuguese', 'Francais', 'English'];
const languages = ['pt', 'fr', 'en'];

const Login = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('portuguese');
  const {t, i18n} = useTranslation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          alignItems: 'flex-end',
          marginTop: 20,
          marginRight: 10,
          marginBottom: 50,
        }}>
        <SelectDropdown
          data={languages}
          label
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedValue(selectedItem);
            i18n.changeLanguage(selectedItem);
          }}
          defaultButtonText={t('SelectLanguageText')}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#00AEEF'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={'right'}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={{width: 150, height: 150}}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <TextInput
            style={styles.input}
            placeholder={t('EnterUsernameText')}
          />
          <TextInput
            style={styles.input}
            placeholder={t('EnterPasswordText')}
          />
          <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
            <Text style={styles.button}>{t('LoginButtonText')}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 50}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.smallTextLink}>{t('ForgotPasswordText')}?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const stylesInput = StyleSheet.create({});

export default Login;
