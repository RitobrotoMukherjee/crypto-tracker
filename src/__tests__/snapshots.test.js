import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import HomePage from '../components/Home';
import Loading from '../components/Loading';
import NoDataFound from '../components/NoDataFound';

describe('Main components snapshot testing', () => {
  it('Test if The Home Page renders correctly', () => {
    const TREE = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );
    expect(TREE).toMatchSnapshot();
  });

  it('Test if The Home Page renders correctly', () => {
    const TREE = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Loading />
        </BrowserRouter>
      </Provider>,
    );
    expect(TREE).toMatchSnapshot();
  });

  it('Test if The Home Page renders correctly', () => {
    const TREE = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <NoDataFound text="Test Snapshot No Data Found" />
        </BrowserRouter>
      </Provider>,
    );
    expect(TREE).toMatchSnapshot();
  });
});
