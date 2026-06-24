import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/visualizar-perfil.css';

export default function VisualizarPerfilNutri() {
  const navigate = useNavigate();

  // Simulando os dados do nutricionista
  const nutriData = {
    nome: 'Andressa',
    sobrenome: 'Souza',
    email: 'andressa.souza@email.com',
    crn: '12345',
    cidade: 'São Paulo',
    telefone: '(11) 98765-4321',
    biografia: 'Nutricionista apaixonada por promover saúde e bem-estar através da alimentação equilibrada e personalizada.',
  };

  const handleLogout = () => {
    // Lógica de logout
    alert('Sessão encerrada!');
    // navigate('/login');
  };

  return (
    <div className="layout-app">
      <Sidebar />

      <main className="main-content">
        <header className="page-header">
          <h1>Meu Perfil</h1>
        </header>

        <div className="view-profile-container">
          
          {/* Coluna da Esquerda: Apenas Avatar */}
          <aside className="view-profile-sidebar">
            <div className="view-avatar-card">
              <div className="avatar-circle large">A</div>
            </div>
          </aside>

          {/* Coluna da Direita: Dados e Botões */}
          <section className="view-profile-data">
            
            <div className="data-card">
              <h2><span className="material-symbols-outlined">person</span> Informações pessoais</h2>
              
              <div className="data-grid">
                <div className="data-item">
                  <span className="data-label">Nome</span>
                  <span className="data-value">{nutriData.nome} {nutriData.sobrenome}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">E-mail</span>
                  <span className="data-value">{nutriData.email}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">CRN</span>
                  <span className="data-value">{nutriData.crn}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Cidade</span>
                  <span className="data-value">{nutriData.cidade}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Telefone</span>
                  <span className="data-value">{nutriData.telefone}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Senha</span>
                  <span className="data-value">********</span>
                </div>
              </div>
            </div>

            <div className="data-card mt-4">
              <h2><span className="material-symbols-outlined">description</span> Sobre mim</h2>
              <div className="data-item">
                <span className="data-label">Biografia</span>
                <p className="data-value biography-text">{nutriData.biografia}</p>
              </div>
            </div>

            {/* Nova Posição dos Botões de Ação */}
            <div className="action-buttons-bottom">
              <button 
                className="btn-view-logout" 
                onClick={handleLogout}
              >
                sair
              </button>
              
              <button 
                className="btn-view-edit" 
                onClick={() => navigate('/editar-perfil')}
              >
                <span className="material-symbols-outlined">edit</span>
                Editar perfil
              </button>
            </div>

          </section>

        </div>
      </main>
    </div>
  );
}