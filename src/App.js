// import i18next from 'i18next';
// import {useTranslation} from 'react-i18next';
// import './App.css';
// import useLocalStorage from './hooks/use-localstorage';

// function App() {
//   const {t} = useTranslation();
//   const [language, setLanguage] = useLocalStorage('language', 'ru')

//   const handleLanguageChange = () => {
//     if(language === 'en') {
//       i18next.changeLanguage('ru');
//       setLanguage('ru')
//     }
//     else if(language === 'ru') {
//       i18next.changeLanguage('en');
//       setLanguage('en')
//     }
//   }

//   return (
//     <div className="App">
//         <h1>{t('About Me')}</h1>
//         <br />
//         <button onClick={handleLanguageChange}>{t('change to')} {language === 'ru' ? t('english') : t('russian')}</button>
//         <button className='reload' onClick={() => window.location.reload()}>{t('refresh page')}</button>
//     </div>
//   );
// }

// export default App;
