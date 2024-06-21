//input component

export default function Input({ label, type, name, value, onChange }) {
	return (
		<div className="flex flex-col items-start justify-start gap-2">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				className="p-2 border border-gray-300 rounded-md"
			/>
		</div>
	)
}
