import React from 'react'

import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generateImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        className='aipicker-textarea'
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap'>

      </div>
    </div>
  )
}

export default AIPicker