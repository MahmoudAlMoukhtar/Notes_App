import uuidv4 from "uuid/v4";
import moment from "moment";
import { renderNote } from "./views";
let notes = [];

let addTitleNewNote = document.getElementById("addTitleNewNote");
//Read existing notes from localStorage
const loadNotes = () => {
  const notesJSON = localStorage.getItem("dataNotes");
  try {
    notes = notesJSON ? JSON.parse(localStorage.dataNotes) : [];
  } catch (e) {
    notes = [];
  }
};
//save the note to localStorage
const saveNote = () => localStorage.setItem("dataNotes", JSON.stringify(notes));
//Expose motes from module
const getNotes = () => notes;

const createNote = () => {
  const id = uuidv4();
  const DATE = moment().valueOf();
  notes.push({
    date: DATE,
    updateDate: DATE,
    id: id,
    title: addTitleNewNote.value,
    body: "",
  });
  saveNote();
  return id;
};

const removeNote = (id) => {
  const indexNote = notes.findIndex((note) => note.id === id);

  if (indexNote > -1) {
    notes.splice(indexNote, 1);
    saveNote();
    renderNote();
  }
};

const sortNotes = (sortBy) => {
  if (sortBy === "byEdit") {
    return notes.sort((a, b) => {
      if (a.updateDate > b.updateDate) {
        return -1;
      } else if (a.updateDate < b.updateDate) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byAlpha") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return undefined;
  }
  if (typeof updates.title === "string") {
    note.title = updates.title;
    note.updateDate = moment().valueOf();
  }
  if (typeof updates.body === "string") {
    note.body = updates.body;
    note.updateDate = moment().valueOf();
  }
  saveNote();
  return note;
};
loadNotes();

export {
  getNotes,
  createNote,
  saveNote,
  removeNote,
  sortNotes,
  updateNote,
  loadNotes,
};
