import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

test('App changes background color after click', () => {
    const app = shallow(<App />);
    
    // app.find('button').simulate('click');
    
    const containerStyle = app.find('.App-header').prop('style');

    expect(containerStyle).toHaveProperty('backgroundColor', '#eb5202');
});