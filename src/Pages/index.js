import gitLogo from '../assets/github.png'
import { Container } from './styles';
import Input from '../Components/Input';
import ItemRepo from '../Components/ItemRepo';
import { useState } from 'react';
import Buttonn from '../Components/Button';
import { api } from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
        } else {
          alert('Repositório já adicionado.');
        }
      }
    } catch (error) {
   
      if (error.response && error.response.status === 404) {
        alert('Repositório não encontrado');
      } else {
        alert('Erro ao buscar repositório. Tente novamente.');
      }
    }
  };

  const handleRemoveRepo = (repoId) => {
    setRepos(prev => prev.filter(repo => repo.id !== repoId)); // Filtra o repositório a ser removido
  }
  
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='github Logo'></img>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}></Input>
      <Buttonn onClick={handleSearchRepo}></Buttonn>
      {repos.map(repo => (
        <ItemRepo onRemove={handleRemoveRepo} key={repo.id} repo={repo} /> 
      ))}
    </Container>
  );
}

export default App;
