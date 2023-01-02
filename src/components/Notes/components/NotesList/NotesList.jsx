import { deleteNote } from "../../../../utils/api/api"

import deleteIcon from '../../../../assets/icons/delete-icon.png'

export const NotesList = ({ notes, getNotesList }) => {
  const deleteItem = async (id) => {
    await deleteNote(id)
    await getNotesList()
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', columnGap: '25px', rowGap: '25px', margin: '30px 0' }}>
      {notes?.map(note => (
        <div
          key={note.id}
          style={{ position: 'relative', border: '1px solid black', padding: '20px', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', width: '150px', whiteSpace: 'pre-line', wordBreak: 'break-all' }}>
          <div
            onClick={() => deleteItem(note.id)}
            style={{ border: '1px solid black', borderRadius: '50%', padding: '5px', display: 'flex', justifyContent: 'center', cursor: 'pointer', backgroundColor: 'white', position: 'absolute', right: '-15px', top: '-15px' }}>
            <img src={deleteIcon} width='20' height='20' />
          </div>

          {note.content}
        </div>
      ))
      }
    </div>
  )
}