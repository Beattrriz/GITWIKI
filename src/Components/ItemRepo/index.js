import React from 'react'
import { ItemContainer } from './style';

function ItemRepo({repo, onRemove}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver Repositório</a>
        <a href="#" className="remover" onClick={(e) => {e.preventDefault(); onRemove(repo.id); }}>Remover</a>
        <hr></hr>
    </ItemContainer>
  )
}

export default ItemRepo;