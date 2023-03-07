import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75'
  }
});

const SkillPanel = ({ title, abbr, skillLevel, children }) => {
  return (
    <Paper elevation={3}>
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
