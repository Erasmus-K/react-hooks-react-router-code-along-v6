function Login(){
    return(
        <>
        <header>
            { }
        </header>
        <main>
            <h1>Login</h1>
            <form>
                <div>
                    <label for="username">username:</label>
                    <input id="username" type="text" name="username" placeholder="username" />
                </div>
                <br/>
                <div>
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="password" />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </main>
        </>
    );
};

export default Login;