import { View, ActivityIndicator, BackHandler, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import useLoadingContext from '../hook/useLoadingContext';

function Loading() {
  const [loading] = useLoadingContext();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={[styles.wrapper, !loading && styles.hide]}>
      <ActivityIndicator size='large' color='#00ff00' />
    </View>
  );
}

const styles = StyleSheet.create({
  hide: {
    display: 'none',
  },
  wrapper: {
    elevation: 1000000,
    zIndex: 1000000,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default Loading;
