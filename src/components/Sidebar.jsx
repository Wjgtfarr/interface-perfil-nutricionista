/**
 * Componente Sidebar:
 * Responsável pela navegação lateral do dashboard.
 * Estrutura:
 * - sidebar-top: Header (Logo) e Menu principal de navegação.
 * - sidebar-footer: Widget de perfil do usuário (Avatar, nome e ações extras).
*/
export default function Sidebar() {
    return (
        <aside className="sidebar">
            {/* Bloco superior */}
            <div className="sidebar-top">

                <div className="sidebar-header">
                    <h1 className="logo-nutra">Nutra</h1>
                </div>

                <div className="sidebar-menu">

                    <a href="#" className="menu-item active">
                        <span className="material-symbols-outlined icon">home</span> Início
                    </a>

                    <a href="#" className="menu-item">
                        <span className="material-symbols-outlined icon">groups</span> Nutricionistas
                    </a>

                    <a href="#" className="menu-item">
                        <span className="material-symbols-outlined icon">bookmark</span> Salvos
                    </a>
                </div>
            </div>

            {/* Bloco inferior: Perfil do usuário com Avatar de Letra Inicial */}
            <div className="sidebar-footer">
                <div className="sidebar-profile-card">

                    {/* Avatar com Letra */}
                    <div className="profile-mini-avatar">
                        A
                    </div>

                    {/* Nova div agrupando os textos em coluna */}
                    <div className="profile-mini-info">
                        <span className="profile-mini-name">Andressa Souza</span>
                        <a href="#" className="profile-mini-link">ver perfil &gt;</a>
                    </div>

                    {/* 3 pontinhos */}
                    <button type="button" className="btn-more-options">
                        <span className="material-symbols-outlined">more_vert</span>
                    </button>

                </div>
            </div>
        </aside>
    );
}