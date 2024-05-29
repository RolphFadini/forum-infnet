export default function Alert({ message }) {
	return (
		<div data-testid="alert-component">
			<p data-testid="message-text">{message}</p>
		</div>
	);
}
