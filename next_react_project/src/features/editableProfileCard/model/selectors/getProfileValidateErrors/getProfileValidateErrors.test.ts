import { ValidateProfileError } from '../../types/editableProfileCardSchema';

import { getProfileValidateErrors } from './getProfileValidateErrors';

import { StateSchema } from '@/app/providers/StoreProvider';

const errorsList = [
    ValidateProfileError.SERVER_ERROR,
    ValidateProfileError.INCORRECT_AGE,
];
describe('getProfileValidateErrors', () => {
    const state: DeepPartial<StateSchema> = {
        profile: {
            validateErrors: errorsList,
        },
    };

    test('should return errors', () => {
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            errorsList,
        );
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
