import React, {useState} from 'react';
import Input from '../components/Input';
import userService from "../services/user.service";
import Button from "../components/Button";
import { useRouter } from "next/router";
import LogoNetflix from '../public/netflix-logo.png';

const Index = () => {
  
  const [user, setUser] = useState();

  const router = useRouter();

  const submitLogin = (e) => {
    e.preventDefault();
    userService.login(user)
			.then((data) => { 
				console.log(data);
        localStorage.setItem('token', data.jwt);
        router.push('../netflix')
      })
      .catch(err => console.log(err))
  }

  return (
    
    <body className="body__login">
    <img className="login__logo" src={LogoNetflix.src} alt="netflix-logo" />
    <div class="login">
      <h1 class="login__title">Sign In</h1>
      <form className="form" onSubmit={(e) => submitLogin(e)}>
      <div class="login__group">
      <Input
              type="email"
              placeholder="Veuillez saisir votre adresse email"
              name="email"
              id="email"
              required={true}
              classes="login__group__input"
              handleChange={(e) => setUser({ ...user, identifier: e.target.value })}
            />
      </div>
      <div class="login__group">
      <Input
              type="password"
              placeholder="Veuillez saisir votre mot de passe"
              name="password"
              id="password"
              required={true}
              classes="login__group__input"
              handleChange={(e) => setUser({ ...user, password: e.target.value })}
            />
      </div>
      <Button title="envoyer" classes="login__sign-in" type="submit" />
      </form>
      <div class="login__secondary-cta"><a class="login__secondary-cta__text" href="#">Remember me</a>
      <a class="login__secondary-cta__text login__secondary-cta__text--need-help" href="/register">Pas de compte cliquer ici</a></div>
    </div>
    </body>
	);
}

export default Index;


