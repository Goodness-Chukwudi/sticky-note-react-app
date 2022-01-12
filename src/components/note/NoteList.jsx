import Note from "./Note";

function NoteList(props) {
	return (
		<div className="d-flex flex-wrap flex-row mt-5">
			{props.noteList.map((note, i) => {
				return (
					<Note
						key={i}
						index={i}
						note={note}
						onDelete={props.removeNote}
						onView={props.showNote}
					/>
				);
			})}
		</div>
	);
}

export default NoteList;
