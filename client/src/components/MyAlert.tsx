import { Alert } from 'react-native';

interface props {
  title?: string;
  message: any;
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
  return Alert.alert(
    title || 'Thông báo!',
    message || 'Có lỗi xảy ra! Vui lòng thử lại sau!',
    [
      {
        text: cancelText,
        onPress: handleCancel,
        style: 'cancel',
      },
      { text: okText, onPress: handleOk },
    ]
  );
}

export default MyAlert;
