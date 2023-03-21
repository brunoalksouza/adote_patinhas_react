import Card from "../Card";
import "./styles.css";

import brunoImg from "../../assets/bruno.jpg";
import mayllonImg from "../../assets/mayllon.jpg";
import tallesImg from "../../assets/talles.jpg";

const pets = [
  {
    id: 1,
    nome: "Mayllon",
    foto: mayllonImg,
    distancia: "5Km",
    raca: "Roedor",
    vacinado: "Não",
    idade: "1",
    castrado: "Não",
    descricao: "Mayllon é um rato muito mal-criado, não adotem!!!",
    email: "mayllonorato@gmail.com",
    telefone: "35823236666",
    sexo: "Macho",
  },
  {
    id: 2,
    nome: "Bruno",
    foto: brunoImg,
    distancia: "7Km",
    raca: "Canino",
    vacinado: "Sim",
    idade: "5",
    castrado: "Sim",
    descricao: "Bruno é um cachorro fedido, adotem o cabeça de ovo!!!",
    email: "brunoocachorro@gmail.com",
    telefone: "35823237777",
    sexo: "Fêmea",
  },
  {
    id: 3,
    nome: "Talles",
    foto: tallesImg,
    distancia: "5Km",
    raca: "Felino",
    vacinado: "Sim",
    idade: "2",
    castrado: "Sim",
    descricao: "Talles é um gato lindo, adotem!!!",
    email: "tallesogato@gmail.com",
    telefone: "35823233777",
    sexo: "Macho",
  },
];

const CardList = () => {
  return (
    <div className="card-list-container">
      <div className="card-list">
        {pets.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
