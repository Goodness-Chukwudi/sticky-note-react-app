const styles = {
	notes: { height: 120, width: 250 },
	noteDetails: {
		height: 85,
		overflow: "hidden",
	},
};

function Note(props) {
	return (
		<div style={styles.notes} className="bg-light rounded p-2 m-2">
			<div style={styles.noteDetails}>
				<h5>{props.note.title}</h5>
				<p>{props.note.content}</p>
			</div>
			<div className="text-center d-flex justify-content-between">
				<button
					onClick={() => props.onView(props.index)}
					className="border-0 bg-light text-warning"
					data-bs-toggle="modal"
					data-bs-target="#staticBackdrop"
				>
					view
				</button>

				<button
					onClick={() => props.onDelete(props.index)}
					className="border-0 bg-light text-danger"
				>
					delete
				</button>
			</div>
		</div>
	);
}

export default Note;
