import React from "react";
import ArchivesList from "./ArchivesList";
import Body from "./Body";
import Header from "./Header";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/index"

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      querySearch: "",
      titleCounter: 50,
      title: "",
      description: "",
      notes: getInitialData()
    }

    this.onQuerySearchEventHandler = this.onQuerySearchEventHandler.bind(this);
    this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this);
    this.onChangeDescriptionEventHandler = this.onChangeDescriptionEventHandler.bind(this);
    this.onSubmitNote = this.onSubmitNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onUnarchiveNote = this.onUnarchiveNote.bind(this);
  }

  onQuerySearchEventHandler(e) {
    this.setState(() => {
      return {
        querySearch: e.target.value
      };
    });
  }

  onChangeTitleEventHandler(e) {
    this.setState((previousValue) => {
      if (e.target.value.length <= 50) {
        return {
          titleCounter: 50 - e.target.value.length,
          title: e.target.value,
        };
      } else {
        return {
          titleCounter: previousValue.titleCounter,
          title: previousValue.title
        }
      }
    });
  }

  onChangeDescriptionEventHandler(e) {
    this.setState(() => {
      return {
        description: e.target.value
      };
    });
  }

  onSubmitNote(e) {
    e.preventDefault();

    const newNote = {
      id: this.state.notes.length ? this.state.notes[this.state.notes.length - 1].id + 1 : 1,
      title: this.state.title,
      body: this.state.description,
      createdAt: +new Date(),
      archived: false,
    };

    this.setState((previousValue) => {
      console.log("notes", previousValue.notes);
      return {
        notes: [...previousValue.notes, newNote]
      };
    });
  }

  onDeleteNote(e, id) {
    e.preventDefault();

    this.setState((previousValue) => {
      return {
        notes: previousValue.notes.filter(note => note.id !== id)
      };
    });
  }

  onArchiveNote(e, id) {
    e.preventDefault();

    this.setState((previousValue) => {
      return {
        notes: previousValue.notes.map(note => {
          if (note.id === id) note.archived = true;

          return note;
        })
      };
    });
  }

  onUnarchiveNote(e, id) {
    e.preventDefault();

    this.setState((previousValue) => {
      return {
        notes: previousValue.notes.map(note => {
          if (note.id === id) note.archived = false;

          return note;
        })
      };
    });
  }

  render() {
    return (
      <>
        <Header querySearch={this.onQuerySearchEventHandler} />
        <Body titleCounter={this.state.titleCounter} title={this.onChangeTitleEventHandler} titleValue={this.state.title} description={this.onChangeDescriptionEventHandler} submit={this.onSubmitNote} />
        <NotesList deleteEvent={this.onDeleteNote} archiveEvent={this.onArchiveNote} querySearch={this.state.querySearch} notes={this.state.notes} />
        <ArchivesList deleteEvent={this.onDeleteNote} unnarchiveEvent={this.onUnarchiveNote} querySearch={this.state.querySearch} notes={this.state.notes} />
      </>
    )
  }
}

export default NotesApp;