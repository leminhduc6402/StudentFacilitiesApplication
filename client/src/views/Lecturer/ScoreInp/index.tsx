import useHistoryContext from '../../../hook/useHistoryContext';
import useUserContext from '../../../hook/useUserContext';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Header from '../../../components/header';
import { styles } from './ScoreInp';
import { routes } from '../../../configs/routes';

function ScoreInp() {
  return (
    <View>
      <Header />
      <Text>score input</Text>
    </View>
  );
}
export default ScoreInp;
