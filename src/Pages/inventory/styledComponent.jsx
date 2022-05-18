import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';

export const NewsButton = styled(Button)({
  color: 'white',
  fontSize: '8px !important',
  fontFamily: 'sans-serif',
  padding: '3px 9px',
  backgroundColor: 'purple',
  '&:hover': {
    backgroundColor: '#f3cbf8',
    borderColor: 'purple',
    color: 'black',
  },
});

export const CardContentNew = styled(CardContent)({
  color: 'white',
  fontSize: '10px',
  padding: '10px',
  paddingBottom: '0px',
});
