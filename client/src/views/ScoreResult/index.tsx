import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/header';
import { useNavigate } from 'react-router';
import useHistoryContext from '../../hook/useHistoryContext';
import { routes } from '../../configs/routes';

function ScoreResult() {
  const { nextHistory, backHistory } = useHistoryContext();
  const nav = useNavigate();

  const handleOnPress = () => {
    nextHistory(routes.TUITION);
  };

  return (
    <>
      <Header />
      <View>
        <TouchableOpacity onPress={handleOnPress}>
          <Text>ScoreResult</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default ScoreResult;
