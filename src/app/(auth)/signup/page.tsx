import Link from "next/link";
import { signup } from "./actions";

export default function SignupPage() {
	return (
		<form>
			<label htmlFor="email">Email:</label>
			<input id="email" name="email" type="email" required />
			<label htmlFor="password">Password:</label>
			<input id="password" name="password" type="password" required />
			<button formAction={signup}>Sign up</button>
			Already have an account? <Link href="/login">Login</Link>
		</form>
	);
}
