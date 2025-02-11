import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import newIcon from '../../assets/new.svg';
import downloadIcon from '../../assets/download.svg';
import SidebarButton from '../SidebarButton/SidebarButton';
import './Sidebar.css';
import { useTranslation } from 'react-i18next';
const Sidebar = ({ activeTab, setActiveTab }) => {
   const { t } = useTranslation();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="sidebar-nav">
        <SidebarButton
          icon={newIcon}
          text={t('sidebar.databaseUpdate')}
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        />
        <SidebarButton
          icon={downloadIcon}
          text={t('sidebar.feedbackExport')}
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
        />
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Sidebar;
