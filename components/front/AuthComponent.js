import React,{useState} from 'react';
import {useRouter} from 'next/router';
import { connect, useDispatch } from "react-redux"
import { authenticateAction } from '../../redux/actions/authenticateAction';

const AuthComponent = ({children, authentication_state}) => {
  const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();

    const handleLogin = (event) => {
      event.preventDefault();
        if ((userId === 'etflogin' && password === 'vi0L3t0rch1d$') || (userId === 'testguest' && password === 'NbPlants@Year3')){
            setAuthenticated(true);
            dispatch(authenticateAction(true)).then(() => {
              router.push("/home");
            });
        } else {
            router.push("/");
        }
    };
    if (!authentication_state){
        return(
            <>
            <div className="loginContainer row">
                <h2 className="loginTitle text-center mt-4">NB Plants Login Page</h2>
                <div className="form-section">
                  <form onSubmit={handleLogin}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        aria-describedby="username"
                        placeholder="Username"
                        value={userId}
                onChange={(e) => setUserId(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        value={password}
                onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="submitBtn btn btn-success">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
      
            <style jsx>{`
            .loginContainer{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .loginTitle{
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 32px;
              font-weight: bold;
              margin: 24px 0px 8px;
              color: #333333;
              text-align: center;
              margin-bottom: 0.5rem;
              font-weight: 500;
              line-height: 1.2rem;
            }
              .form-section {
              display: flex;
              margin-top: 60px;
              padding: 30px;
              border: 1px solid rgb(224, 225, 227);
              margin-bottom: 60px;
              }
              .form-control{
                margin-bottom: 1rem !important;
                display: flex;
                width: 100%;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                appearance: none;
                border-radius: 0.25rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              }
              .btn, .btn-success{
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                background-color: #198754;
                border-color: #198754;
                font-weight: 400;
                line-height: 1.5;
                text-align: center;
                text-decoration: none;
                vertical-align: middle;
                user-select: none;
                border: 1px solid transparent;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                border-radius: 0.25rem;
                cursor: pointer;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              }
            `}</style>
          </>
        );
    }

    return authentication_state;
};

const mapStateToProps = (state) => {
  return {
    authentication_state: state.authenticate.authentication_state
  }
}

export default connect(mapStateToProps)(AuthComponent);
