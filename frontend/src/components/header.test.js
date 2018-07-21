/* global describe, expect, it */

import '../../setup';

import {shallow} from 'enzyme';
import React from 'react';
import Header from './header';

describe('Header', () => {
    it('should render Header without crashing', () => {
        const wrapper = shallow(<Header />);

        expect(wrapper).toMatchSnapshot();
    });
});
