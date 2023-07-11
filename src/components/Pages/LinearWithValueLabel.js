import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./LinearWithValueLabel.css";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "", alignItems: "center" }}>
      <Typography variant="body2" color="text. string">
        <p>
          {props.html} {props.javascript} {props.css} {props.react}
        </p>
        <p>{`${Math.round(props.value)}%`}</p>
      </Typography>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}></Box>
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
  const [javascriptProgrsess, setJavascriptProgrsess] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 80 ? 75 : prevProgress + 5
      );
      setReactProgress((prevProgress) =>
        prevProgress >= 82 ? 80 : prevProgress + 5
      );
      setHtmlProgress((prevProgress) =>
        prevProgress >= 82 ? 80  : prevProgress + 5
      );
      setJavascriptProgrsess((prevProgress) =>
        prevProgress >= 80 ? 75: prevProgress + 5
      );
    }, 400);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const html = "HTML";
  const javascript = "Javascript";
  const css = "CSS";
  const react = "React Js";
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={htmlProgress} html={html} />
      <LinearProgressWithLabel value={progress} javascript={javascript} />
      <LinearProgressWithLabel value={reactProgress} css={css} />
      <LinearProgressWithLabel value={javascriptProgrsess} react={react} />
    </Box>
  );
}
