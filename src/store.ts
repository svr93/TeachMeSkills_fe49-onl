import { signUpFormReducer } from '#features/sign-up-form/sign-up-form.slice';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { registrationReducer } from '#features/auth/registration.slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    signUpForm: signUpFormReducer,
  },
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware(), sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
