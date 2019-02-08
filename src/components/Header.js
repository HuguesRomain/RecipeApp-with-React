import React from 'react'; 

const Header = ({pseudo}) => {
  const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de${pseudo}` 
  console.log(formatPseudo(pseudo))
  return(
    <header>
      <h1>La boîte à recettes de {formatPseudo(pseudo)}</h1>
    </header>
  )
}

export default Header