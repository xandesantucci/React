import { useNavigate } from "react-router-dom";
import "../styles.css";
import "../../App.css";
import { useState } from "react";
import { Link } from "../../components/link";
import { Title } from "../../components/title";
import { Inputs } from "../../components/inputs";
import { Buttom } from "../../components/buttom";
import { Subtitle } from "../../components/subtitle";

export const Form = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [users] = useState([
    {
      id:1,
      username: "Alexandre",
      password: "Garen",
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg',
      email: 'xandesantucci@gmail.com'
    },
    {
      id:2,
      username: "Pietro",
      password: "Darius",
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg',
      email: 'pietro@gmail.com'
    },
    {
      id:3,
      username: "Andre",
      password: "Trundle",
      img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg',
      email: 'andre@gmail.com'
    },
  ]);

  
  const goHome = () => {
    const userSelected = users.find(
      (u) => (u.username === user || u.email === user) && u.password === password
    );

    if (userSelected) {
      navigate("/home", { state: { usersList: users, logged: user } });
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="App">
      <div className="form-background">
        <div className="cabecalho">
          <Title text='Bem vindo' />
        </div>
        <div className="cabecalho">
          {showError ? (
            <Subtitle text="Usuário não encontrado!" />
          ) : (
            <span>Entre com o nome de usuário ou email e a senha</span>
          )}
        </div>
        <br/>
        <div className="form-fields">
          <Inputs
            changing={(e) => setUser(e.target.value)}
          />
          <Inputs
            changing={(e) => setPassword(e.target.value)}
            text="Password"
          />
        </div>
        <div className="buttons-container">
          <div className="buttons">
            <Buttom text="Entrar" aoClicar={goHome} />
            <div className="links">
              <Link text="Não é cadastrado?" destiny='https://www.google.com/' />
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

// export default Form;