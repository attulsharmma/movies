import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  fullHeightCard: {
    height: "100%",
  },
});

const Movie = ({ movies }) => {
  console.log(movies);
  const classes = useStyles();
  return (
    <Grid item xs={12} md={3} sm={3}>
      <Card className={(classes.root, classes.fullHeightCard)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={movies.Poster}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {movies.Title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Movie;
