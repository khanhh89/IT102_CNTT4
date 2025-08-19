import React from 'react'
import Control from './Control'
import Student from './Student'
import StudentForm from './StudentForm'

export default function Ap() {
  return (
    <div>
      <div className='row'>
        <div className='col-lg-7 grid-margin stretch-card'>
            <div className="card">
                <Control></Control>
                <Student></Student>
            </div>
        </div>
        <div className='col-5 grid-margin'>
            <StudentForm></StudentForm>
        </div>
      </div>
    </div>
  )
}
