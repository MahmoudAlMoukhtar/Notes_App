import { createNote, saveNote, loadNotes } from "./note";
import { setFilters } from "./filters";
import { renderNote } from "./views";

let addTitleNewNote = document.getElementById("addTitleNewNote");

renderNote();
/* 
document.getElementById("btnRemovAll").addEventListener("click", removeAll); */

document.querySelector("#serch-text").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderNote();
});

document.getElementById("selectors").addEventListener("change", (e) => {
  setFilters({
    sortBy: e.target.value,
  });
  renderNote();
});

document.querySelector("#creat-notes").addEventListener("click", () => {
  const id = createNote();
  location.assign(`./edit.html#${id}`);
});

window.addEventListener("storage", (e) => {
  if (e.key === "dataNotes") {
    loadNotes();
    renderNote();
  }
});
