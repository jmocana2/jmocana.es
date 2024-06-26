import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/StarBorder';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#d0c3ff',
    width: '30px',
    marginBottom: '20px'
  }
});

const SkillPanel = ({ title, abbr, skillLevel, children }) => {
  return (
    <Paper elevation={2} rounded>
      <div className="p-10 flex items-center justify-center flex-col text-center">
        <Typography variant="h2" class="text-3xl text-center mb-5">
          {abbr ? <abbr title={abbr}>{title}</abbr> : title}
        </Typography>
        <Typography variant="p" class="text-center mb-5">
          {children}
        </Typography>
        <StyledRating
          name="half-rating"
          defaultValue={skillLevel}
          precision={0.5}
          icon={<FavoriteIcon />}
          emptyIcon={<FavoriteBorderIcon />}
          readOnly
          classes="sizeSmall"
        />
        <Button variant="outlined" color="acent">
          Ver más
        </Button>
      </div>
    </Paper>
  );
};

SkillPanel.propTypes = {
  title: PropTypes.string.isRequired,
  abbr: PropTypes.string,
  skillLevel: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default SkillPanel;
