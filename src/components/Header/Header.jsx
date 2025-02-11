// src/components/Header.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import userIcon from '../../assets/userIcon.svg';
import arrowIcon from '../../assets/arrowIcon.svg';

const Header = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState('ru');

  const handleLangChange = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="language-switcher">
          <button
            className={`lang-button ru ${activeLang === 'ru' ? 'active' : ''}`}
            onClick={() => handleLangChange('ru')}
          >
            русс
          </button>
          <button
            className={`lang-button kz ${activeLang === 'kz' ? 'active' : ''}`}
            onClick={() => handleLangChange('kz')}
          >
            қаз
          </button>
        </div>

        <div className="user-info">
          <div className="user-details">
            <img src={userIcon} alt="User" className="user-info-icon" />
            <div className="user-info-text">
              <p className="user-email">userlogin@gmail.com</p>
              <p className="user-name">admin</p>
            </div>
          </div>
          <img src={arrowIcon} alt="Arrow" className="user-info-arrow" />
        </div>
      </div>
      <div className="header-bottom-border"></div>
    </header>
  );
};

export default Header;
