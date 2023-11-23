import NoteItem from "./NoteItem"

function NotesList({ deleteEvent, archiveEvent, querySearch, notes }) {

  return (
    <div className="note-app__body">
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {
          querySearch ? notes
            .filter(note => !note.archived && note.title.toLowerCase().includes(querySearch.toLowerCase())).length ?
            notes
              .filter(note => !note.archived && note.title.toLowerCase().includes(querySearch.toLowerCase()))
              .map((note) =>
                <NoteItem deleteEvent={deleteEvent} archiveEvent={archiveEvent} note={note} key={note.id} />
              ) : <p>Tidak ada catatan</p>
            : notes.filter(note => !note.archived).length ?
              notes
                .filter(note => !note.archived)
                .map((note) =>
                  <NoteItem deleteEvent={deleteEvent} archiveEvent={archiveEvent} note={note} key={note.id} />
                ) : <p>Tidak ada catatan</p>
        }
      </div >
    </div >
  )
}

<p>Tidak ada catatan</p>

export default NotesList