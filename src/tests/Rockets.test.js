import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Rockets from '../components/Dragons/Dragons';
import RocketList from '../components/Rockets/RocketList';

describe('Rocket tests', () => {
  it('render test', () => {
    const rocket = {
      id: 1,
      image: 'https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png',
      name: 'falcon1',
      description: 'description for dragon1',
      reserved: false,
    };

    const tree = renderer.create(
      <Provider store={store}>
        <RocketList
          id={rocket.id}
          image={rocket.image}
          name={rocket.name}
          type={rocket.type}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Test if rockets render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
