import React from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';
function Loading() {
  return (
    <div className='spinner'>
      <ProgressSpinner />
    </div>
  )
}

export default Loading