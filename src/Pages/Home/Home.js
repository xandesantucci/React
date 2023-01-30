import { useNavigate, useLocation } from "react-router-dom";

import { Buttom } from "../../components/buttom";

import "../../App.css";
import "./style.css";
import { Subtitle } from "../../components/subtitle";
import { Profile } from "../../components/profile";
import { useEffect, useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { usersList, logged } = location.state;
  const [activeButton, setActiveButton] = useState(true);
  const [contador, setContador] = useState(0);
  const [newUsersList, setNewUserList] = useState([]);

  //armazenando no localStorage
  const newUsersListJson = JSON.stringify(newUsersList);
  localStorage.setItem("users", newUsersListJson);
  localStorage.setItem('log', logged)

  //recuperando do localStorage
  const getLocalStorage = localStorage.getItem('users')
  const storageNewUsersList = JSON.parse(getLocalStorage)
  const usuarioLogado = localStorage.getItem('log')


  function goHome() {
    navigate("/");
  }

  const handleContador = () => {
    if (contador < usersList.length - 1) {
      setContador(contador + 1);
    } else {
      setActiveButton(false)
    }
  };



  useEffect(() => {
    setNewUserList((prev) =>
      [...prev, usersList[contador]]
      );
}, 
    [contador]);

  return (
    <div className="App">
      <span>Acesso: {usuarioLogado}</span>
      <Subtitle text={"Número de usuários cadastrados: "} />
      <h2>{activeButton ? contador + 1 : "O número máximo de usuários é " + (contador + 1)}</h2>

      <ul>
        {storageNewUsersList.map((user) => (
          <Profile
            img={user.img}
            name={user.username}
            email={user.email}
          />
        ))}
      </ul>

      <div className="button-container">
        <Buttom
          text="Listar outro usuário e aumentar o contador"
          aoClicar={handleContador}
        />
        <Buttom 
          text="Retornar ao Login" 
          aoClicar={goHome}  
        />
      </div>
    </div>
  );
};