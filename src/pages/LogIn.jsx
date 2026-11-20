export default function LogIn() {

    return (
        <section className="login-page">
            <form className="login-form">
                <h3>Login To Access You Details</h3>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We’ll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-field">
                    <input type="checkbox" id="exampleCheck1" className="check"/>
                        <label for="exampleCheck1">Remember Password</label>
                </div>
                <button type="submit" className="btn-solid theme-primary">Submit</button>
            </form>
        </section>
    )
}