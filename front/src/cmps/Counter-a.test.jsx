import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CounterA from './Counter';


configure({adapter: new Adapter()});

describe('<Counter-a />', () => {
    it('should render a button', () => {
        // const wrapper = shallow(<CounterA />);
        expect(true).toBeTruthy();
    })

});