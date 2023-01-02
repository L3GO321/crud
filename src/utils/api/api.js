const apiURL = ('http://localhost:7777/notes')

export const getNotes = async () => {
  try {
    const response = await fetch(apiURL)

    const result = await response.json()

    return result
  } catch (error) {
    console.error('GET_NOTES: ', error)
  }
}

export const addNote = async (note) => {
  try {
    await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(note),
    })
  } catch (error) {
    console.error('ADD_NOTE: ', error)
  }
}

export const deleteNote = async (id) => {
  try {
    await fetch(apiURL + `/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('DELETE_NOTE: ', error)
  }
}
