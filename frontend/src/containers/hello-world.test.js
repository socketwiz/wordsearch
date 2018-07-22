/* global beforeEach describe expect jest it */

import shallowWithStore from '../../setup';

import configureMockStore from 'redux-mock-store';
import HelloWorldContainer from './hello-world';
import React from 'react';

const mockStore = configureMockStore();

describe('HelloWorld container', () => {
    describe('message functions', () => {
        const data = {
            'id': 0,
            'message': 'hello-from-me'
        };

        let store, wrapper;

        beforeEach(() => {
            const initialState = {
                'helloWorldReducer': {
                    'hellos': [data]
                }
            };

            store = mockStore(initialState);
            wrapper = shallowWithStore(<HelloWorldContainer />, store);
        });

        it('should render successfully', () => {
            expect(typeof wrapper).toBe('object');
        });


        it('should contain store contents on initial render', () => {
            // override global fetch
            window.fetch = jest.fn().mockImplementation(() => Promise.resolve({'status': 200, 'json': () => []}));

            expect(wrapper.props().hellos).toHaveLength(1);
            expect(wrapper.props().hellos[0]).toEqual(data);
        });

        it.skip('should dispatch putMessage', () => {
            const data = {'value': 'hello-world'};
            const changeEvent = {'currentTarget': data};
            const submitEvent = {'preventDefault': () => {}};

            wrapper.dive().find('input').simulate('change', changeEvent);
            wrapper.setState(data);
            wrapper = wrapper.update();
            wrapper.dive().find('form').simulate('submit', submitEvent);
        });
    });
});
