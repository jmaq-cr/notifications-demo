import { Button, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <Container maxWidth="xs">
        <br></br>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="./images/react.jpg"
              title="React Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Notifications Demo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developed by Jose Aguilar Quesada, using React and MUI
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                component={Link}
                to="https://github.com/jmaq-cr/notifications-demo"
              >
                Go to Github
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default About;
