import { useState } from "react";
import NoteInput from "./note/NoteInput";
import NoteList from "./note/NoteList";
import ViewNote from "./note/ViewNote";

function Main() {
	let existingNotes = JSON.parse(localStorage.getItem("sticky-notes"));
	if (!existingNotes) existingNotes = [];
	const [notes, setNotes] = useState(existingNotes),
		[currentNote, setCurrentNote] = useState();

	function addNote(note) {
		setNotes((previousNotes) => {
			const newNotes = [...previousNotes, note];
			localStorage.setItem("sticky-notes", JSON.stringify(newNotes));

			return newNotes;
		});
	}

	function deleteNote(index) {
		setNotes((previousNotes) => {
			const newNotes = previousNotes.filter((note, i) => {
				return index !== i;
			});
			localStorage.setItem("sticky-notes", JSON.stringify(newNotes));
			return newNotes;
		});
	}

	function viewNote(index) {
		setCurrentNote(notes[index]);
	}

	return (
		<div className="">
			<NoteInput onAdd={addNote} />
			<NoteList
				noteList={notes}
				showNote={viewNote}
				removeNote={deleteNote}
			/>
			<ViewNote
				close={() => {
					setCurrentNote(null);
				}}
				note={currentNote}
			/>
		</div>
	);
}

export default Main;
