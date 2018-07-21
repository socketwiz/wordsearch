/* global describe, expect, it */

import '../../../setup';

import {shallow} from 'enzyme';
import React from 'react';
import HelloWorld from './index';

describe('HelloWorld main page', () => {
    it('renders HelloWorld without crashing', () => {
        const wrapper = shallow(<HelloWorld />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders a list without crashing', () => {
        const hellos = [
            {'id': 0, 'message': 'foo'},
            {'id': 1, 'message': 'bar'},
            {'id': 2, 'message': 'baz'}
        ];
        const wrapper = shallow(<HelloWorld hellos={hellos} />);

        expect(wrapper).toMatchSnapshot();
    });
});
