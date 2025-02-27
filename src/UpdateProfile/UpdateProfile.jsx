import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";


const UpdateProfile = () => {
  const {logIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate= useNavigate();
  console.log(location);



  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password);
    logIn(email,password)
    .then(result =>{
      console.log(result.user);

      navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
      console.error(error);
    })
    
}



  return (
    <div className="hero min-h-screen bg-gray-200 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 text-2xl">
            Please fillup this form
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required 
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center m-3">Do not have an account? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
