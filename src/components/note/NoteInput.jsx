import { useState } from "react";

const styles = {
	div: { height: 150, width: 400 },
	btn: { marginLeft: 320, fontSize: 12 },
};

function NoteInput(props) {
	const [note, setNote] = useState({ title: "", content: "" });

	function handleChange(e) {
		const { name, value } = e.target;
		setNote((previousNote) => {
			return { ...previousNote, [name]: value };
		});
	}

	function handleClick() {
		if (note.title && note.content) {
			props.onAdd(note);
			setNote({ title: "", content: "" });
		}
	}

	return (
		<div style={styles.div} className="bg-light p-3 mt-4 container rounded">
			<form>
				<input
					name="title"
					type="text"
					placeholder="Title"
					className="border-0 w-100 bg-light"
					onChange={handleChange}
					value={note.title}
				/>
				<textarea
					name="content"
					placeholder="Enter note here"
					className="border-0 w-100 bg-light mt-2"
					rows="3"
					onChange={handleChange}
					value={note.content}
				></textarea>

				<button
					onClick={handleClick}
					style={styles.btn}
					type="button"
					className="btn btn-warning rounded-circle text-white"
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default NoteInput;
