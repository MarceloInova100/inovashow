import { useNavigate } from 'react-router-dom';
import './style.css';

function HomeView() {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Cidades', path: '/cidade', icon: '🏙️' },
    { label: 'Expositores', path: '/expositor', icon: '🏪' },
    { label: 'Pessoas', path: '/pessoa', icon: '👥' },
    { label: 'Vendedores', path: '/vendedor', icon: '💼' },
    { label: 'Visitas', path: '/visita', icon: '📍' }
  ];

  return (
    <div className='home-container'>
      <img src='/Inova1001.png' alt='Inova Show Logo' className='home-image' />
      
      <div className='header-content'>
        <p className='subtitle'>Bem-vindo! Escolha uma opção para começar</p>
      </div>

      <div className='menu-grid'>
        {menuItems.map((item, index) => (
          <button 
            key={index}
            className='menu-btn'
            onClick={() => navigate(item.path)}
            title={item.label}
          >
            <span className='menu-icon'>{item.icon}</span>
            <span className='menu-label'>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomeView;