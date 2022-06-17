import moment from "moment";
import { getFilters } from "./filters";
import { sortNotes, removeNote, getNotes } from "./note";
//creat new paragraph for new notes
const creatNewParagraph = (note) => {
  const noteEl = document.createElement("a");
  const textEl = document.createElement("p");
  const statusEl = document.createElement("p");
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  textEl.classList.add("list-item__title");
  noteEl.appendChild(textEl);

  //setup the link
  noteEl.setAttribute("href", `./edit.html#${note.id}`);
  noteEl.classList.add("list-item");

  //setup the status message
  statusEl.textContent = generateLastEdited(note.updateDate);
  statusEl.classList.add("list-item__subtitle");
  noteEl.appendChild(statusEl);
  return noteEl;
};
//
const renderNote = () => {
  const notesEl = document.querySelector("#NOTES-PLACE");
  const filters = getFilters();
  const notes = sortNotes(filters.sortBy);
  const filterNote = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );
  // console.log(filterNote)

  notesEl.innerHTML = "";

  if (filterNote.length > 0) {
    filterNote.forEach((note) => {
      const noteEl = creatNewParagraph(note);
      notesEl.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    emptyMessage.classList.add("empty-message");
    notesEl.appendChild(emptyMessage);
  }
};
const initializeEditPage = (noteId) => {
  const lastEdit = document.getElementById("lastEdit");
  const noteTitle = document.getElementById("note-title");
  const noteBody = document.getElementById("note-body");

  const notes = getNotes();
  const findNote = notes.find((note) => note.id === noteId);
  if (!findNote) {
    location.assign("./index.html");
  }

  noteTitle.value = findNote.title;
  noteBody.value = findNote.body;
  lastEdit.textContent = generateLastEdited(findNote.updateDate);
};

const generateLastEdited = (timeStamp) => {
  return `Last edit: ${moment(timeStamp).fromNow()}`;
};

export { creatNewParagraph, renderNote, initializeEditPage };
