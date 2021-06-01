import { createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { blueGrey, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#fff',
    },
    secondary: pink,
    error: red,
  },
})


export default theme;

