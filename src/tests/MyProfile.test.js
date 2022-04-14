import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile/MyProfile';

it('Test profile', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
