import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Dragons, { Dragon } from '../components/Dragons/Dragons';

describe('Dragon tests', () => {
  it('render test', () => {
    const dragon = {
      id: 1,
      image: 'https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png',
      name: 'dragon1',
      type: 'capsule',
      description: 'description for dragon1',
      reserved: false,
    };

    const tree = renderer.create(
      <Provider store={store}>
        <Dragon
          id={dragon.id}
          image={dragon.image}
          name={dragon.name}
          type={dragon.type}
          description={dragon.description}
          reserved={dragon.reserved}
        />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Test the whole functionality of dragons page', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

it('Test the whole functionality of dragons page', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
