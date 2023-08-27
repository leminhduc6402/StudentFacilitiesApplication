import { Alert } from 'react-native';

interface props {
  title: string;
  message: string;
  cancelText?: string;
  okText?: string;
  handleCancel?: () => void;
  handleOk?: () => void;
}

function MyAlert({
  title,
  message,
  cancelText,
  okText,
  handleCancel,
  handleOk,
}: props) {
  return Alert.alert(title, message, [
    {
      text: cancelText,
      onPress: handleCancel,
      style: 'cancel',
    },
    { text: okText, onPress: handleOk },
  ]);
}

export default MyAlert;
