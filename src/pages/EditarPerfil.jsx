import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProfileHeader from '../components/ProfileHeader';
import ProfileForm from '../components/ProfileForm';
import '../styles/editar-perfil.css';

export default function EditarPerfil() {
  /* Inicializando o estado armazenando os dados do perfil do nutricionista */
  const [formData, setFormData] = useState({
    nome: 'Andressa',
    sobrenome: 'Souza',
    email: 'andressa.souza@gmail.com',
    crn: 'CRN-5/12345',
    cidade: 'Quixadá',
    telefone: '(85) 9 9999-9999',
    sobreMim: 'Olá, sou a Andressa...'
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    /* Formatando o campo de telefone, removendo caracteres não numéricos e aplicando a máscara */
    if (name === 'telefone') {
      value = value.replace(/\D/g, ''); 
      if (value.length > 11) value = value.slice(0, 11); 

      if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
      } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{0,9})/, '($1) $2');
      }
    }

    /* Validando e formatando o campo de CRN para garantir a conformidade com as resoluções do CFN */
    if (name === 'crn') {
      /* Convertendo para maiúsculas para manter o padrão "CRN-X/..." */
      value = value.toUpperCase();
      
      /* Removendo caracteres especiais indesejados caso o usuário tente digitar símbolos extras */
      // Permitimos: C, R, N, T, P, S, /, -, e números
      value = value.replace(/[^CRNTP S0-9\/-]/g, '');
    }

    /* Restringindo o tamanho do texto da biografia conforme o limite definido */
    if (name === 'sobreMim') {
      const MAX_LENGTH = 300; 
      if (value.length > MAX_LENGTH) {
        value = value.slice(0, MAX_LENGTH); 
      }
    }

    /* Atualizando o estado do formulário com os novos valores processados */
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    /* Processando o envio do formulário e disparando uma notificação de sucesso */
    e.preventDefault();
    alert('Alterações salvas com sucesso!');
  };

  return (
    <div className="dashboard-layout">
      {/* Renderizando a barra de navegação lateral fixa */}
      <Sidebar />

      <main className="main-content">
        {/* Apresentando o cabeçalho e descrição da página */}
        <h1 className="page-title">Editar Perfil</h1>
        <p className="page-subtitle">Atualize suas informações pessoais e profissionais</p>

        {/* Organizando o layout em colunas para os componentes de perfil */}
        <div className="profile-layout">

          {/* Renderizando o container contendo a foto e as opções de upload */}
          <div className="card-box">
            <ProfileHeader nome={formData.nome} especialidade={formData.especialidade} />
          </div>

          {/* Renderizando o formulário para edição dos dados pessoais e biografia */}
          <ProfileForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />

        </div>
      </main>
    </div>
  );
}