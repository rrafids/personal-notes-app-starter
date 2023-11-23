function Header({ querySearch }) {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <input placeholder="Cari catatan..." onChange={querySearch} />
    </header>
  )
}

export default Header;