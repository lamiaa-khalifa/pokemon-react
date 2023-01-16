import './Card.css';

interface Pokemon {
  name: string,
  image?: string,
  type?: string
}

interface Props {
  pokemon: Pokemon
}

const Card = (props: Props) => {
  return (
    <div className='pokemon-card'>
      <img
        src={props.pokemon.image}
        alt="logo"
      />
      <h1>{props.pokemon.name}</h1 >
      <p>{props.pokemon.type}</p>
    </div>
  );
}

export default Card;
