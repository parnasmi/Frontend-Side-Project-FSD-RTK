import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { User } from 'entities/User';
import { userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
// import { userActions } from '../../../../../entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
    onClose: () => void;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                { username: authData.username, password: authData.password },
            );

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            authData.onClose();

            return response.data;
        } catch (e) {
            console.log('error loginBy', e);
            return thunkAPI.rejectWithValue('error');
            // return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
        }
    },
);
