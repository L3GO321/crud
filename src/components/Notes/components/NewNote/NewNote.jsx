import { useState } from "react"

import { addNote } from "../../../../utils/api/api"

import addIcon from '../../../../assets/icons/add-icon.png'

export const NewNote = ({ getNotesList }) => {
  const [value, setValue] = useState('')

  const addItem = async () => {
    if (!value) return
    await addNote({ content: value })
    await getNotesList()
  }

  return (
    <div style={{ position: 'relative', width: 'min-content' }}>
      <h3 style={{ margin: '0 0 10px 10px' }}>
        New Note
      </h3>

      <textarea
        style={{ position: 'relative', paddingRight: '50px' }}
        rows='10'
        cols='40'
        value={value}
        onChange={(e) => setValue(e.target.value)} />

      <div
        onClick={addItem}
        style={{ border: '1px solid black', borderRadius: '50%', padding: '5px', display: 'flex', justifyContent: 'center', cursor: value ? 'pointer' : 'not-allowed', backgroundColor: 'white', position: 'absolute', right: '15px', bottom: '15px' }}>
        <img src={addIcon} width='20' height='20' />
      </div>
    </div>
  )
}