/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import SubmissionTerminActions from '../Redux/SubmissionTerminRedux'

export function * getSubmissionTermins (api, { id }) {
  const response = yield call(api.getSubmissionTermins, id)

  if (response.ok) {
    yield put(SubmissionTerminActions.getSubmissionTerminsSuccess(response.data))
  } else {
    yield put(SubmissionTerminActions.submissionTerminFailure())
  }
}

export function * submitSubmissionTermin (api, { submissionId, id }) {
  const response = yield call(api.submitSubmissionTermin, submissionId, id)

  if (response.ok) {
    if (response.data.success) {
      yield put(SubmissionTerminActions.submitSubmissionTerminSuccess(response.data))
      yield put(SubmissionTerminActions.getSubmissionTermins(submissionId))
    } else {
      yield put(SubmissionTerminActions.postSubmissionTerminFailure())
    }
    alert(response.data.message)
  } else {
    yield put(SubmissionTerminActions.postSubmissionTerminFailure())
    alert('Realisasi termin gagal diajukan')
  }
}
