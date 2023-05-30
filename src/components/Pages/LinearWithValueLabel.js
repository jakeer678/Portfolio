import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import './LinearWithValueLabel.css'


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "", alignItems: "center" }}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text. string">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}



LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);
  const [reactProgress, setReactProgress] = React.useState(10);
  const [htmlProgress, setHtmlProgress] = React.useState(10);
  const [javascriptProgrsess, setJavascriptProgrsess] = React.useState(10)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 80 ? 80 : prevProgress + 10
      );
      setReactProgress((prevProgress) =>
        prevProgress >= 75 ? 75 : prevProgress + 10
      );
      setHtmlProgress((prevProgress)=>prevProgress>=85 ? 85 : prevProgress +10);
      setJavascriptProgrsess((prevProgress)=>prevProgress>=75 ? 75 : prevProgress + 10 )
    }, 400);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={htmlProgress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={reactProgress} />
      <LinearProgressWithLabel value={javascriptProgrsess} />
    </Box>
  );
}
