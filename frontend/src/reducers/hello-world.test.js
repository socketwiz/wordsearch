/* global afterEach, describe, expect, it */

import '../../setup';

import reducer from './hello-world';
import * as types from '../actions/hello-world';

describe('HelloWorld reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            'hellos': []
        });
    });

    it('should handle UPDATE_HELLO', () => {
        const testStr = 'hello-world';

        expect(
            reducer({'hellos': []}, {
                'type': types.UPDATE_HELLO,
                'hello': testStr
            })
        ).toEqual({
            'hellos': [testStr]
        });
    });

    it('should handle UPDATE_HELLOS', () => {
        const testStr = 'hello-world';

        expect(
            reducer({'hellos': []}, {
                'type': types.UPDATE_HELLOS,
                'hellos': testStr
            })
        ).toEqual({
            'hellos': testStr
        });
    });
});
