/* global describe, expect, it */

import * as actions from './hello-world';
import {UPDATE_HELLO, UPDATE_HELLOS} from './hello-world';

describe('HelloWorld actions', () => {
    it('should create an action to update hello', () => {
        const text = 'hello world';
        const expectedAction = {
            'type': UPDATE_HELLO,
            'hello': text
        };

        expect(actions.updateHello(text)).toEqual(expectedAction);
    });
    it('should create an action to update hellos', () => {
        const text = 'hello world';
        const expectedAction = {
            'type': UPDATE_HELLOS,
            'hellos': text
        };

        expect(actions.updateHellos(text)).toEqual(expectedAction);
    });
});
