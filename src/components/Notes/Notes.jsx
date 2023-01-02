import { useEffect, useState } from "react"

import { NotesList, NewNote } from "./components"

import { getNotes, addNote } from "../../utils/api/api"

import refreshIcon from '../../assets/icons/refresh-icon.png'

export const Notes = () => {

  const [notes, setNotes] = useState([])

  const getNotesList = async () => {
    const notesList = await getNotes()
    if (notesList) {
      setNotes(notesList)
    }
  }

  useEffect(() => {
    getNotesList()
  }, [])

  const add = async () => {
    await addNote({
      "id": 0,
      "content": "То, что было введено в поле ввода"
    })

    // await deleteNote(1)

    const response = await getNotes()
    console.log(response)
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
        <h1>Notes</h1>
        <div style={{ border: '1px solid black', borderRadius: '50%', padding: '5px', display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={getNotesList}>
          <img src={refreshIcon} width='20' height='20' />
        </div>
      </div>

      <NotesList notes={notes} getNotesList={getNotesList} />
      <NewNote getNotesList={getNotesList} />
    </div>
  )
}