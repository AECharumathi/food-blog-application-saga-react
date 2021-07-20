import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('http://localhost:3111/foodList')
        .then(response => response.json(), );    
  yield put({ type: "FOODLIST_RECEIVED", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_FOODLIST', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}