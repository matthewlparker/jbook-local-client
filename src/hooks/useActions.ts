import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

// Bind dispatch and actions to useActions
// Example use:
// const { updateCell } = useActions();
// updateCell(contentHere);
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
