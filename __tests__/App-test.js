/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Mock the API to avoid network requests and 404s
jest.mock('../src/apis/star-wars.api', () => ({
  getFilms: jest.fn(() => Promise.resolve({ data: [] })),
  getFilmById: jest.fn(() => Promise.resolve({ data: {} })),
}));

it('renders correctly', () => {
  renderer.create(<App />);
});
