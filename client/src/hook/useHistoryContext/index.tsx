import { HistoryContext } from '../../store/HistoryContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';

function useHistoryContext() {
  const nav = useNavigate();
  const [historyNav, dispatch]: any = useContext(HistoryContext);

  const nextHistory = (route: string) => {
    dispatch({
      type: 'PUSH',
      payload: route,
    });
    nav(route);
  };

  const backHistory = () => {
    dispatch({
      type: 'POP',
    });
    nav(historyNav[historyNav.length - 2]);
  };

  return { nextHistory, backHistory };
}
export default useHistoryContext;
