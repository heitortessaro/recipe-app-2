import React from 'react';
// import EmailValidator from 'email-validator';
// import Input from '../components/Input';

export default function Login() {
  // const [login, setLogin] = useState({
  //   email: '',
  //   password: '',
  //   disabledButton: true,
  // });

  // const { email, password, disabledButton } = login;


  // const validLogin = () => {
  //   const numberValid = 6;
  //   const validEmail = EmailValidator.validate(email); // true ou false
  //   const valueToInput = password.length > numberValid;

  //   if (valueToInput && validEmail) {
  //     setLogin({ ...login, disabledButton: false });
  //   } else {
  //     setLogin({ ...login, disabledButton: true });
  //   }
  // };

  // useEffect(() => {
  //   validLogin();
  // }, [email, password]);

  // const handleChangeLogin = ({ target: { name, value } }) => {
  //   setLogin({ ...login, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const mealsToken = 1;
  //   const cocktailsToken = 1;
  //   localStorage.setItem('mealsToken', JSON.stringify(mealsToken));
  //   localStorage.setItem('cocktailsToken', JSON.stringify(cocktailsToken));
  //   localStorage.setItem(
  //     'user',
  //     JSON.stringify({ email }),
  //   );
  //   history.push('/foods');
  // };

  return (
    <div 
      style={{backgroundImage: 'url("https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'}}
      className="bg-no-repeat bg-cover bg-center h-full flex justify-center items-center">
      <div className="card w-80 sm:w-96 bg-orange-100/75 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-2">Login</h2>
          <div className="form-control">
            <input
              // onChange={({ target }) => setName(() => target.value)}
              // value={name}
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-xs" />
          </div>
          <div className="form-control">
            <input
              // onChange={({ target }) => setName(() => target.value)}
              // value={name}
              type="text"
              placeholder="Senha"
              className="input input-bordered input-primary w-full max-w-xs" />
          </div>
          <div className="card-actions mt-2 justify-center">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
