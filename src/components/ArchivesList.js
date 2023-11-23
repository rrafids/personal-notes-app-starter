import NoteItem from "./NoteItem"

function ArchivesList({ deleteEvent, unnarchiveEvent, querySearch, notes }) {

  return (
    <div className="note-app__body">
      <h2>Arsip</h2>
      <div className="notes-list">
        {
          querySearch ? notes
            .filter(note => note.archived && note.title.toLowerCase().includes(querySearch.toLowerCase())).length ?
            notes
              .filter(note => note.archived && note.title.toLowerCase().includes(querySearch.toLowerCase()))
              .map((note) =>
                <NoteItem deleteEvent={deleteEvent} unnarchiveEvent={unnarchiveEvent} note={note} key={note.id} />
              ) : <p>Tidak ada arsip</p> : notes.filter(note => note.archived).length ? notes.filter(note => note.archived).map((note) =>
                <NoteItem deleteEvent={deleteEvent} unnarchiveEvent={unnarchiveEvent} note={note} key={note.id} />
              ) : <p>Tidak ada arsip</p>
        }
      </div >
    </div >
  )
}

export default ArchivesList