/* global describe, expect, it */

import '../../setup';

import {shallow} from 'enzyme';
import React from 'react';
import Footer from './footer';

describe('Footer', () => {
    it('should render Footer without crashing', () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper).toMatchSnapshot();
    });
});
