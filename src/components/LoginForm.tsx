import {useState} from "react";
import './LoginForm.css';

export function LoginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // alert(`The name you entered was: ${name}`)
        if (name === 'Louis' && password === 'Louis') {
            alert('Richtige Eingabe');
        } else {
            alert('Falsche Eingabe');
        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>Enter your Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type="submit" value={'Login'}/>
                </label>
            </form>
    )
}