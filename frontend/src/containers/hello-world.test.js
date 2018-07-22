/* global describe expect it */

import shallowWithStore from '../../setup';

import {createMockStore} from 'redux-test-utils';
import HelloWorldContainer from './hello-world';
import React from 'react';

describe('HelloWorld container', () => {
    it('should render successfully if string is not provided by store', () => {
        const testState = {
            'helloWorldReducer': {}
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<HelloWorldContainer />, store);

        expect(typeof component).toBe('object');
    });
});
