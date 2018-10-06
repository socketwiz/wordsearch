/* global afterEach describe expect jest it */

import '../../../setup';

import {mount, shallow} from 'enzyme';
import React from 'react';
import HelloWorld from './index';

describe('HelloWorld component', () => {
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

    it('should call onSubmit', () => {
        const putMessageMock = (msgObj) => {
            expect(msgObj).toEqual({'message': ''});

            return {
                'catch': (error) => {}
            };
        };
        const component = mount(<HelloWorld putMessage={putMessageMock} />);

        component.find('form').simulate('submit');
    });

    describe('Internal methods', () => {
        let spy;

        afterEach(() => {
            if (spy) {
                spy.mockClear();
            }
        });

        it('should call onSubmit and catch error', () => {
            const putMessageMock = (message) => {
                const promise = new Promise((resolve, reject) => {
                    reject('test-error');
                });
                spy = jest.spyOn(promise, 'catch');

                return promise;
            };
            const component = mount(<HelloWorld putMessage={putMessageMock} />);

            component.find('form').simulate('submit');
            expect(spy).toHaveBeenCalled();
        });

        it('should call getMessage and pass', () => {
            const getMessage = (message) => {
                const promise = new Promise((resolve, reject) => {
                    resolve('test-succeed');
                });
                spy = jest.spyOn(promise, 'catch');

                return promise;
            };
            const component = mount(<HelloWorld getMessage={getMessage} />);

            component.find('form').simulate('submit');
        });

        it('should call getMessage and fail', () => {
            const getMessage = (message) => {
                const promise = new Promise((resolve, reject) => {
                    reject('test-error');
                });
                spy = jest.spyOn(promise, 'catch');

                return promise;
            };
            const component = mount(<HelloWorld getMessage={getMessage} />);

            component.find('form').simulate('submit');
        });

        it('should pass a selected value to the onChange function', () => {
            const component = shallow(<HelloWorld />);

            component.find('input').simulate('change', {
                'currentTarget': {
                    'value': 'some-change'
                }
            });

            expect(component).toMatchSnapshot();
        });
    });
});
