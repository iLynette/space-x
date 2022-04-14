import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Rockets, { Rocket } from '../components/Dragons/Dragons';

describe('Dragon tests', () => {
    it('render test', () => {
      const rocket = {
        id: 1,
        image: 'https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png',
        name: 'dragon1',
        description: 'description for dragon1',
        reserved: false,
      };
    });
  });