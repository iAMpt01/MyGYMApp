const LoginForm=({
    handleSubmit,
    username, 
    //setusername, 
    password,
    setPassword 
}) => (
    <form onSubmit={handleSubmit} className="mt-3">

       <div className=" from-group mb-3">
        <label className="from-label" >username</label>
        <input 
        type="username" 
        className="from-control" 
        placeholder="Enter username " 
        value={username} 
       // onChange={(e) => setusername(e.target.value)}
       />
       </div>

       <div className=" from-group mb-3">
        <label className="from-label" >Password</label>
        <input 
        type="password" 
        className="from-control" 
        placeholder="Enter password " 
        value={password} 
      onChange={(e) => setPassword(e.target.value)}
       />
       </div>
    <button disabled={!username || !password} className="btn btn-primary">Submit</button>
    </form>
);

export default LoginForm;