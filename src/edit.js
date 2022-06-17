import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote } from "./note";

const lastEdit = document.getElementById("lastEdit");
const noteTitle = document.getElementById("note-title");
const noteBody = document.getElementById("note-body");
const removeNoteEdit = document.getElementById("remove-note-edit");
const noteId = location.hash.substring(1);
initializeEditPage(noteId);

noteTitle.addEventListener("input", (e) => {
  const note = updateNote(noteId, {
    title: e.target.value,
  });
  lastEdit.textContent = generateLastEdited(note.updateDate);
});
noteBody.addEventListener("input", (e) => {
  const note = updateNote(noteId, {
    body: e.target.value,
  });
  lastEdit.textContent = generateLastEdited(note.updateDate);
});

removeNoteEdit.addEventListener("click", (e) => {
  removeNote(noteId);
  location.assign("./index.html");
});

window.addEventListener("storage", (e) => {
  if (e.key === "dataNotes") {
    initializeEditPage(noteId);
  }
});
