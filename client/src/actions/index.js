import { TEST_ACTION} from './types'

export function getData(){
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: TEST_ACTION, 
        payload: "This is some payload"
      });
  }, 500);
  };
}