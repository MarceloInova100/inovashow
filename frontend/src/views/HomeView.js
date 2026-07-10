import { useNavigate } from 'react-router-dom';

function HomeView() {
  const navigate = useNavigate();

  return (
    <div className='home-container'>
        <div className='menu'>
            
            <div className="header">
                <h1>Inova - Show</h1>
                <p>Bem-vindo ao InovaShow!</p>
                <p>Escolha uma opção abaixo:</p>
            </div>

            <button onClick={() => navigate('/cidade')}>
            Cidade
            </button>

            <button onClick={() => navigate('/expositor')}>
                Expositor
            </button>

            <button onClick={() => navigate('/pessoa')}>
                Pessoa
            </button>

            <button onClick={() => navigate('/vendedor')}>
                Vendedor
            </button>

            <button onClick={() => navigate('/visita')}>
                Visita
            </button>

        </div>
    </div>
  );
}

export default HomeView;