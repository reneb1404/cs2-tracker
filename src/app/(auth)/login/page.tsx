import Link from "next/link";
import { login } from "./actions";

export default function LoginPage() {
	return (
		<form>
			<label htmlFor="email">Email:</label>
			<input id="email" name="email" type="email" required />
			<label htmlFor="password">Password:</label>
			<input id="password" name="password" type="password" required />
			<button formAction={login}>Log in</button>
			<br></br>
			Don&apos;t have an account? <Link href="/signup">Sign up</Link>
		</form>
	);
}
