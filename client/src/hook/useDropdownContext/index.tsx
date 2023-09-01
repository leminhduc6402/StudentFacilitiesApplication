import { DropdownContext } from '../../store/DropdownContext';
import { useContext } from 'react';

function useDropdownContext() {
    const [currentValueTop, setCurrentValueTop, currentValueBottom, setCurrentValueBottom]: any = useContext(DropdownContext);
    return [currentValueTop, setCurrentValueTop, currentValueBottom, setCurrentValueBottom]
  }

export default useDropdownContext