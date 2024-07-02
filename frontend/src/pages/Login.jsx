import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/style.css"; // Upewnij się, że ścieżka do pliku CSS jest poprawna
import Form from "../components/Form";

function Login() {
  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://s3u.tmimgcdn.com/u37752224/43c1a0392276fa50b4cfa03170da0d9e.gif"
                        style={{ width: '185px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">TaskHero</h4>
                    </div>
                    <p className="mb-5">Please login to your account</p>
                    <Form route="/api/token/" method="login"/>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                      >
                        Create new
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Become the Hero of Your Day</h4>
                    <p className="small mb-0">
                      TaskHero empowers you to conquer your daily tasks, events, and goals with a unique XP system.
                      Transform your productivity and achieve more, every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;