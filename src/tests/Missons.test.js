import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Missions from '../components/Missions/Missions';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
