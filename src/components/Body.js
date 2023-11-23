function Body({ titleCounter, titleValue, title, description, submit }) {
  return (
    <div className="note-app__body">
      <div className="note-input">
        <form onSubmit={submit}>
          <h2>Buat Catatan</h2>
          <p className="note-input__title__char-limit">Sisa Karakter: {titleCounter}</p>
          <input placeholder="Ini adalah judul..." onChange={title} value={titleValue} required />
          <textarea className="note-input__body" placeholder="Tuliskan catatanmu disini..." onChange={description} required></textarea>
          <button>Buat</button>
        </form>
      </div>
    </div>
  )
}

export default Body