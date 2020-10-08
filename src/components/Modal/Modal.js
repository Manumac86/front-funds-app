import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Text from '../Text/Text';
/**
 * The Modal Component.
 *
 * @param {string}  message      The Modal Message.
 * @param {Boolean} open         Flag to indicate if the modal is open.
 * @param {string}  title        The Modal Title.
 * @param {string}  sharing      Flag to indicate if is sharing or not.
 * @param {string}  handleClose  Callback for the close action.
 */
const Modal = ({
  message,
  open,
  title,
  sharing = false,
  handleClose,
}) => (
  <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        { sharing
          ? (
            <Button
              onClick={handleClose}
              color="primary"
              autoFocus
            >
              <Text tid="modalAddToFavButton" />
            </Button>
          ) : <></> }
        <Button
          onClick={handleClose}
          color="primary"
          autoFocus
        >
          <Text tid="modalCloseButton" />
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

/**
 * Props default values.
 */
Modal.defaultProps = {
  sharing: false,
};

/**
 * Modal Props Types.
 */
Modal.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  sharing: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};
export default Modal;
