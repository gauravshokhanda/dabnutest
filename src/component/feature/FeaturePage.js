import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const initialItems = [
  {
    name: "Slide 1",
    description:
      "I'd be happy to help you create content for Canva! However, please provide more specific details.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Solid_white_bordered.png",
  },
  {
    name: "Slide 2",
    description:
      "Of course, I'd be glad to help you create content for Pinterest. However, I'll need more details about the specific.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Solid_white_bordered.png",
  },
  {
    name: "Slide 3",
    description:
      "Could you please provide more details about what kind of content you're looking for? Are you interested.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Solid_white_bordered.png",
  },
];

const useStyles = makeStyles((theme) => ({
  centerItem: {
    backgroundColor: "#007FFF",
    margin: "5px",
  },
  otherItem: {
    backgroundColor: "#311f54",
  },

  carouselContainer: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    order: 1,
  },
  nextButton: {
    order: 3,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    width: "100px !important ",
    margin: "auto !important",
  },
  gridItem: {
    borderRadius: "12px",
    margin: "auto !important",
    overflow: "hidden",
    padding: "8px",
    margin: "8px",
  },
  blueButton: {
    background: "#007FFF",
    borderRadius: "50%",
    color: "white",
  },
}));

function FeaturePage() {
  const [startIndex, setStartIndex] = useState(0);
  const classes = useStyles();
  const [items, setItems] = useState(initialItems);

  const itemsToDisplay = items.slice(startIndex, startIndex + 3);
  while (itemsToDisplay.length < 3) {
    itemsToDisplay.push(itemsToDisplay[itemsToDisplay.length - 3]);
  }

  const handleNext = () => {
    // Rotate the items array to the right
    const rotatedItems = [...items];
    const lastItem = rotatedItems.pop();
    rotatedItems.unshift(lastItem);
    setStartIndex((startIndex + 1) % items.length);
    setItems(rotatedItems);
  };

  const handleBack = () => {
    // Rotate the items array to the left
    const rotatedItems = [...items];
    const firstItem = rotatedItems.shift();
    rotatedItems.push(firstItem);
    setStartIndex((startIndex - 1 + items.length) % items.length);
    setItems(rotatedItems);
  };

  return (
    <Box sx={{ mt: 20, p: 10 }}>
      <div className={classes.carouselContainer}>
        <div className={classes.buttonContainer}>
          <IconButton
            onClick={handleBack}
            sx={{
              backgroundColor: "#007FFF",
              color: "#",
              fontSize: "32px",
            }}
          >
            <ArrowBackIcon style={{ color: "white" }} />
          </IconButton>
        </div>

        <Box display="flex" flexDirection="row" justifyContent="space-between">
          {itemsToDisplay.map((item, index) => (
            <>
              {item?.description && (
                <Box
                  key={index}
                  sx={{ p: 2 }}
                  className={
                    index === 1 ? classes.centerItem : classes.otherItem
                  }
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    margin: "8px",
                    flex: "1",
                  }}
                >
                  <CardMedia
                    component="img"
                    className={classes.imageContainer}
                    image="/images/t1.png"
                    alt="green iguana"
                  />
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ mt: 2, p: 5 }}
                  >
                    {item?.description}
                  </Typography>
                </Box>
              )}
            </>
          ))}
        </Box>
        <div className={classes.buttonContainer}>
          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: "#007FFF",
              color: "blue",
              fontSize: "32px",
            }}
          >
            <ArrowForwardIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
    </Box>
  );
}

export default FeaturePage;
