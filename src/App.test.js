import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { render, fireEvent } from 'react-testing-library'; 
import 'jest-dom/extend-expect';

import App from './App';

describe('<App />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree 
    // this is all JEST
    expect(tree.toJSON()).toMatchSnapshot();
  }); 
});


describe('mocking', () => {
  it('is mocking me', () => {
    const mock = jest.fn() 
    const result= mock()
    expect(result).toBeUndefined() 
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
  }) 

  it('controls the mock', () => {
    const mock = jest.fn(() => 'hello')
  

  const result = mock('smile');

  expect(result).toBe('hello');
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledTimes(1) 
  expect(mock).toHaveBeenCalledWith('smile')
})
})
 

describe('speak()', () => {
  it('update message when speak button is clicked', () => {
    const { getByText, queryByText } = render(<App />) 

    expect(queryByText(/you are not mocking me/i)).toBeFalsy();

    const button = getByText(/speak/i)
    fireEvent.click(button) 

    expect(queryByText(/you are mocking me/i)).toBeTruthy(); 
    
  })
})