import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

/**
 * The Custom LinearProgressBar Material-UI component.
 * @type {React.Component}
 *
 * @return {JSX}
 */
const LinearProgressBar = withStyles((theme) => ({
  root: {
    height: 10,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[300],
  },
  bar: {
    backgroundColor: 'rgb(241, 79, 3)',
  },
}))(LinearProgress);

export default LinearProgressBar;
