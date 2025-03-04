// Dependencies
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LanguageContext } from './containers/Language/Language';
import LanguageSelector from './components/LanguegeSelector/LanguageSelector';
import CardContainer from './containers/Card/CardContainer';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import Text from './components/Text/Text';
import { config } from './config/index';

// Styles
import './App.scss';

/**
 * Material-UI Custom Styles.
 *
 * @type {Function}
 */
const useStyles = makeStyles((theme) => ({
  root: {
    color: 'whitesmoke',
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(0),
    },
    'font-family': 'Quicksand',
  },
}));

/**
 * App component
 * @component
 *
 * @return {JSX}
 */
const App = () => {
  /**
   * The Language dictionary to use translations from LanguageContext.
   * @type {Object}
   */
  const { dictionary } = useContext(LanguageContext);

  /**
   * The loading state for when the app is loading requests.
   * @type {Boolean}
   */
  const [loading, setLoading] = useState(false);
  /**
   * The Error Message to show if an error ocurs.
   * @type {?string}
   */
  const [errorMessage, setErrorMessage] = useState(null);
  /**
   * The APIToken to make the requests to the Funds API.
   * @type {string}
   */
  const [apitoken, setApitoken] = useState('');
  /**
   * The Funds List.
   * @type {Array}
   */
  const [funds, setFunds] = useState([]);
  /**
   * The flag to open the Modal.
   * @type {Boolean}
   */
  const [openModal, setOpenModal] = useState(false);
  /**
   * The fMaterialUI Classes.
   * @type {Object}
   */
  const classes = useStyles();

  /**
   *  Get the APIToken to make the requests to the Funds API.
   */
  const getToken = () => {
    const authBasic = btoa(`${config.userName}:${config.userPassword}`);
    setLoading(true);
    axios({
      method: 'post',
      url: `${config.apiUri}/auth/token`,
      headers: {
        Authorization: `Basic ${authBasic}`,
      },
      data: '',
    })
      .then((response) => {
        setApitoken(response.data.access_token);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  /**
   *  Get the funds list.
   *
   * @param {string} apiToken  The APIToken to get the Funds list.
   */
  const getFunds = (apiToken) => {
    if (apiToken.length) {
      axios({
        method: 'get',
        url: `${config.apiUri}/funds`,
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      })
        .then((response) => {
          setFunds(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  /**
   * Handles the close modal action.
   */
  const handleClose = () => {
    setOpenModal(false);
  };

  /**
   * Get the APIToken when app loads.
   */
  useEffect(() => {
    getToken();
  }, []);

  /**
   * Get the Funds Lisr when Token is received.
   */
  useEffect(() => {
    getFunds(apitoken);
  }, [apitoken]);

  /**
   * Handles the Save for later button click.
   */
  const handleSaveClick = () => {
    setOpenModal(true);
  };

  /**
   * Shows the error message when an error ocurs in the page load.
   */
  if (errorMessage) {
    return <h2><Text tid={errorMessage} /> {errorMessage}</h2>;
  }

  return (
    <div className={`app ${classes.root}`}>
      <h1><Text tid="appTitle" /></h1>
      <div className="app_content">
        {loading ? <CircularProgress />
          : (
            <>
              <Modal
                message={dictionary.modalMessage}
                open={openModal}
                title={dictionary.modalTitle}
                sharing
                handleClose={handleClose}
              />
              <CardContainer
                funds={funds}
                token={apitoken}
                getFunds={getFunds}
              />
              <Footer onSaveClick={handleSaveClick} />
              <LanguageSelector />
            </>
          )}
      </div>
    </div>
  );
};

export default App;
