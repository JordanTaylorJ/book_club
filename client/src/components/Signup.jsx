import React, {useState} from 'react';


const Signup = ({setUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(['hey']);
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username: username, 
                password: password 
            }), 
        })
        .then((r) => {
            if (r.ok){
                r.json().then((r) => setUser(r))
                setErrors([])
            } else {
                r.json().then((r) => setErrors(r.errors))
            }
        })
    }

    console.log(username, password, errors)

    return(
        <div>
            <br/>
            <form
            onSubmit={(e) => handleSubmit(e)}
            autoComplete="off"
            >
                <label>
                    Create Username: 
                    <input 
                        type='text'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </label>
                <label>
                    Create Password: 
                <input 
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <input type='submit' value="submit"/>
                <p>{errors}</p>
            </form>
        </div>
    )
}

export default Signup;


/*
{errors.length > 0 && (
                    <ul>
                        {errors.map((error) => (
                            <li key={error}> {error}</li>
                        ))}
                    </ul>
                )}
                */