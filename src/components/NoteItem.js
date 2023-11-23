import { showFormattedDate } from "../utils/index"

export default function NoteItem({ deleteEvent, archiveEvent, unnarchiveEvent, note }) {
  const { id, title, body, createdAt } = note;

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h1 className="note-item__title">{title}</h1>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={(e) => deleteEvent(e, id)}>Delete</button>
        <button className="note-item__archive-button" onClick={(e) => note.archived ? unnarchiveEvent(e, id) : archiveEvent(e, id)}>{note.archived ? "Pindahkan" : "Arsipkan"}</button>
      </div>
    </div>
  )
}
