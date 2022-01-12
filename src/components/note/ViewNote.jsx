let styles = {
	bg: { opacity: 0.9 },
	note: {
		minWidth: 250,
		minHeight: 250,
		maxWidth: "25%",
		maxHeight: "80vh",
		backgroundColor: "pink",
	},
};

let colors = [
	"pink",
	"#f1c40f",
	"aqua",
	"#7ed6df",
	"#ff7979",
	"#ffeaa7",
	"#fd79a8",
	"#D6A2E8",
	"#BDC581",
	"#7bed9f",
];

function ViewNote(props) {
	let index = Math.floor(Math.random() * colors.length);
	styles.note.backgroundColor = colors[index];

	if (props.note) {
		return (
			<div>
				<div
					style={styles.bg}
					className="position-absolute top-0 start-0 vw-100 vh-100 bg-secondary"
				></div>

				<div
					style={{ ...styles.note }}
					className="p-2 opacity-100 shadow-lg position-absolute top-50 start-50 translate-middle"
				>
					<div className="d-flex justify-content-between">
						<h5
							style={{ overflowWrap: "normal" }}
							className="overflow-hidden me-3"
						>
							{props.note.title}
						</h5>
						<button
							onClick={() => {
								props.close();
							}}
							type="button"
							className="btn-close"
							aria-label="Close"
						></button>
					</div>
					<hr />
					<p className="text-center overflow-auto">
						{props.note.content}
					</p>
				</div>
			</div>
		);
	} else return null;
}

export default ViewNote;
