import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from '../../utils/styles';

const PasswordRecover = ({navigation}) => {
  const {t, i18n} = useTranslation();
  return (
    <View style={{alignItems: 'center', marginTop: 40}}>
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
        <TextInput style={styles.input} placeholder={t('EnterUsernameText')} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPasswordResult');
          }}>
          <Text style={styles.button}>{t('Send')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordRecover;
