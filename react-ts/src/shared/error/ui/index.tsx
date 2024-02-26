import {createEffect, createStore} from 'effector';

interface IError {
    code?: number | null,
    message: string,
}
export const $errorStore = createStore<IError | null>(null);

export const throwErrorFx = createEffect<IError, IError, Error>( {
    handler: (e) => e
});

$errorStore.on(throwErrorFx.doneData, (_, result) => result)
