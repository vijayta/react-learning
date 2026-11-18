import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './access';

export default function ReduxApp() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
