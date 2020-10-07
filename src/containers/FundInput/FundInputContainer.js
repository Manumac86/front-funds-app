import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import FundInput from '../../components/FundInput/FundInput';
import Modal from '../../components/Modal/Modal';
import { config } from '../../config/index';

/**
 * The FundInputContainer Component.
 *
 * @param {string} token     The API Token to made the requests.
 * @param {string} getFunds  The callback to reload the funds list.
 *
 * @return {JSX}
 */
const FundInputContainer = ({
  token,
  getFunds,
}) => {
  /**
   * The newFund state for when a new fund is made.
   * @type {Number}
   */
  const [newFund, setNewFund] = useState(50);
  /**
   * The newFund state for when a new fund is made.
   * @type {Number}
   */
  const [newFundEmail, setNewFundEmail] = useState('');
  /**
   * The loading state for when the app is loading requests.
   * @type {Boolean}
   */
  const [loading, setLoading] = useState(false);
  /**
   * The flag to open the Modal.
   * @type {Boolean}
   */
  const [openModal, setOpenModal] = useState(false);
  /**
   * The id of the fund transaction when adding a new fund successfully.
   * @type {string}
   */
  const [id, setId] = useState('');
  /**
   * The message to show in the modal.
   * @type {string}
   */
  const [modalMessage, setModalMessage] = useState('');
  /**
   * The title to show in the modal.
   * @type {string}
   */
  const [modalTitle, setModalTitle] = useState('');
  /**
   * The flag to validate the forms inputs.
   * @type {Boolean}
   */
  const [isInputsInvalid, setIsInputsInvalid] = useState(false);

  /**
   * Adds a new fund. It receives the API Token getted when the app loads.
   *
   * @param {string} apiToken  The APIToken from mongoDB connection.
   */
  const postFund = (apiToken) => {
    if (apiToken.length) {
      axios({
        method: 'post',
        url: `${config.apiUri}/funds`,
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
        data: {
          email: newFundEmail,
          amount: newFund,
        },
      })
        .then((response) => {
          setId(response.data.data.id);
          setOpenModal(true);
          getFunds(token);
        })
        .catch((error) => {
          setModalTitle(`Error ocurred ${error}`);
          setModalMessage(`Sorry, something went wrong while triyng to add your fund.
          Please try again!`);
          setOpenModal(true);
        });
    }
  };

  /**
   * Set the Modal Title, Message and loading when the added fund ID is received.
   */
  useEffect(() => {
    setModalTitle('Thanks for your help!');
    setModalMessage(`We thanks you for your help!
    This fund will accellerate our project and help us to achieve the goal!.
    This is your fund ID: ${id}`);
    setLoading(false);
  }, [id]);

  /**
   * Reloads the page.
   */
  const reloadPage = () => window.location.reload(false);

  /**
   * Handles the close modal action.
   */
  const handleClose = () => {
    setOpenModal(false);
    reloadPage();
  };

  /**
   * Handles the input changes actions.
   *
   * @param {SyntheticEvent} event  The change Event.
   */
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNewFund(value);
  };

  /**
   * Handles the email input changes actions.
   *
   * @param {SyntheticEvent} event  The change Event.
   */
  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setNewFundEmail(value);
  };

  /**
   * Handles the submit action.
   *
   * @param {SyntheticEvent} event  The submit Event.
   */
  const handleSubmit = (event) => {
    setLoading(true);
    postFund(token);
    event.preventDefault();
  };

  /**
   * Validates Inputs for mail and fund.
   *
   * @return {Boolean}
   */
  useEffect(() => {
    const emailMask = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setIsInputsInvalid(!(emailMask.test(newFundEmail) && newFund));
  }, [newFundEmail]);

  return (
    <div className="fundInput_container">
      {loading ? <CircularProgress />
        : (
          <>
            <Modal
              message={modalMessage}
              open={openModal}
              title={modalTitle}
              handleClose={handleClose}
            />
            <FundInput
              fundValue={newFund}
              onChange={handleChange}
              onChangeEmail={handleChangeEmail}
              onSubmit={handleSubmit}
              isInputsInvalid={isInputsInvalid}
            />
          </>
        )}
    </div>
  );
};

/**
 * FundInputContainer Props Types.
 */
FundInputContainer.propTypes = {
  token: PropTypes.string.isRequired,
  getFunds: PropTypes.func.isRequired,
};

export default FundInputContainer;
