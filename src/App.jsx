import React, {useState, useEffect} from 'react'
import Routes from './Routing/Routes'



function App() {

  const [error, setError] = useState(null); //initialise la variable error a null et une fonction setError pour la modifier. Cette variable va être utilisée pour afficher les erreurs lors du fetch 
  const [isLoaded, setIsLoaded] = useState(false); //isLoaded va servir a vérifier si les données du fetch ont été chargées
  const [items, setItems] = useState([]); //items vas servir pour stocker les données reçues avec la requête fetch. Initialisée avec un tableau vide pour mieux manipuler les données  
  
  useEffect(() => { //le hook useEffect permet de réaliser une action lorsque le composant est affiché
    fetch("/logements.json")
      .then(res => res.json())
      .then(
        (data) => { //si la requête réussi on met a jour les variables d'état "isLoaded" et "items"
          setIsLoaded(true); 
          setItems(data);
        },
        (error) => { //si la requête échoue on met a jour les variables d'état "isLoaded" et "error"
          setIsLoaded(false);
          setError(error);
        }
      )
  }, [])


  if (error) { //si une erreur s'est produite lors de la requête
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) { //si les données ne sont pas encpre chargées
    return <div>Chargement...</div>;
  } else {
    return (
      <Routes items={items}/>
      )
    }
  }
  
  
  export default App
  
  





