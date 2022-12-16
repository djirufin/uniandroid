import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from '../../utils/styles';

const PasswordRecoverResult = ({navigation}) => {
  const {t, i18n} = useTranslation();
  return (
    <View style={{alignItems: 'center', marginTop: 40}}>
      <Image
        source={require('../../assets/img/child.jpg')}
        style={{width: 200, height: 150}}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Text>
          Vous avez recu un email pour reinitiliaser votre compte. Veuillez vous
          y rendre et reactiver votre compte
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.smallTextLink}>{t('BackLogin')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordRecoverResult;
