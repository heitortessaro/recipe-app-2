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
    <div className='container'>

      <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required=""/>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  );
}
