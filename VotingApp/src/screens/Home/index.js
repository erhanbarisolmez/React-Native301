import {Modal, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import Questions from './Questions';
import AddButton from '../../components/AddButton';
import AddNewModal from './Questions/AddNewModal';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton onPress={() => setModalVisible((prev) => !prev)} />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.centerView}>
      <Questions />
      <View style={styles.modalView}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible((false))}
        >
          <AddNewModal closeModal={() => setModalVisible(false)}/>

       
      </Modal>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
});
