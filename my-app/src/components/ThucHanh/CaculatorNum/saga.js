import { isEmpty } from 'lodash';
import {takeEvery, put, call, takeLatest} from 'redux-saga/effects';
import {calMunute} from 'action';

function* incrementSaga(){
    yield put(calMunute());
}
export default function* reduxTutSaga(){
    yield takeEvery(incrementSaga,incrementSaga);
}