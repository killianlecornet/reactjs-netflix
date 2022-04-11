import React, {useState} from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import userService from "../../services/user.service";
import { useRouter } from 'next/router'
import Modal from "../../components/Modal";
import LogoNetflix from '../../public/netflix-logo.png';

const Index = () => {
  const router = useRouter()
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

    const submitRegister = (e) => {
      e.preventDefault();
      userService.register(user)
        .then(
          (data) => {
            if (data.error) {
              setShowModal(true);
            }
            else {
              localStorage.setItem('token', data.jwt);
              router.push('/')
            }
          }
        )
        .catch(
          (err) => {
            setShowModal(true);
            console.log(err)
          });
    }
  return (

        <body className="body__login">
        <img className="login__logo" src={LogoNetflix.src} alt="netflix-logo" />
        <div class="register">
          <h1 class="login__title">Register</h1>
          <Modal title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
          <p>Une erreur est survenue, veuillez contacter le service client.</p>
          </Modal>
          <form className="form" onSubmit={(e)=> submitRegister(e)}>
          <div class="login__group">
          <Input
            name="firstName"
            id="firstName"
            type="text"
            classes="login__group__input"
            required={true}
            placeholder="Veuillez saisir votre prénom"
            handleChange={(e) => setUser({...user, firstName:e.target.value})}
          />
          </div>
          <div class="login__group">
          <Input
            name="lastName"
            id="lastName"
            type="text"
            classes="login__group__input"
            required={true}
            placeholder="Veuillez saisir votre nom de famille"
            handleChange={(e) => setUser({...user, lastName:e.target.value})}
                />
          </div>
          <div class="login__group">
          <Input
            name="username"
            id="username"
            type="text"
            classes="login__group__input"
            required={true}
            placeholder="Veuillez saisir votre username"
            handleChange={(e) => setUser({...user, username:e.target.value})}
                />
          </div>
          <div class="login__group">
          <Input
            name="email"
            id="email"
            type="email"
            classes="login__group__input"
            required={true}
            placeholder="Veuillez saisir votre nom email"
            handleChange={ (e) => setUser({...user, email:e.target.value})}
                />
          </div>
          <div class="login__group">
          <Input
            name="password"
            id="password"
            type="password"
            classes="login__group__input"
            required={true}
            placeholder="Veuillez saisir votre mot de passe"
            handleChange={(e) => setUser({...user, password:e.target.value})}
                />
          </div>
          <Button title="envoyer" classes="login__sign-in" type="submit"/>
          </form>
        </div>
    </body>
  );
};

export default Index;

