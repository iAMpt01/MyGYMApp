const RegisterForm=({
    handleSubmit,
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setPassword 
}) => (
    <form onSubmit={handleSubmit} className="mt-3">
       <div className=" from-group mb-3">
        <label className="from-label" >Your name</label>
        <input 
        type="text" 
        className="from-control" 
        placeholder="Enter name " 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
       </div>

       <div className=" from-group mb-3">
        <label className="from-label" >Email address</label>
        <input 
        type="email" 
        className="from-control" 
        placeholder="Enter email " 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
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

       <button className="btn btn-primary">Submit</button>
    </form>
);

export default RegisterForm;