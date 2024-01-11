import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MemoryIcon from "@mui/icons-material/Memory";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export function NotificationCard(props) {
  let id = props.id;
  let subject = props.subject;
  let message = props.message;
  let datetime = props.datetime;
  let iconType = props.iconType;
  let color = props.color;
  let backgroundColor = props.backgroundColor;
  let closeNotificationAction = props.closeNotificationAction;

  function getIcon(type, color, backgroundColor) {
    switch (type) {
      case "Billing":
        return (
          <CreditCardIcon
            sx={{
              p: 1,
              fontSize: 50,
              color: color,
              backgroundColor: backgroundColor,
            }}
          />
        );
      case "Compute":
        return (
          <MemoryIcon
            sx={{
              p: 1,
              fontSize: 50,
              color: color,
              backgroundColor: backgroundColor,
            }}
          />
        );
      case "Alert":
        return (
          <ErrorOutlineIcon
            sx={{
              p: 1,
              fontSize: 50,
              color: color,
              backgroundColor: backgroundColor,
            }}
          />
        );
      default:
        return (
          <NotificationsNoneIcon
            sx={{
              p: 1,
              fontSize: 50,
              color: color,
              backgroundColor: backgroundColor,
            }}
          />
        );
    }
  }

  return (
    <>
      <Card sx={{ mb: 1.5, display: "flex" }}>
        <Box m={2} display="flex" justifyContent="center" alignItems="center">
          {getIcon(iconType, color, backgroundColor)}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="text">
              <b>{subject} </b>
              {message}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {datetime}
            </Typography>
          </CardContent>
        </Box>
        <Box
          m={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ marginLeft: "auto" }}
        >
          <IconButton onClick={() => closeNotificationAction(id)}>
            <CloseIcon sx={{ p: 1, fontSize: 45 }} />
          </IconButton>
        </Box>
      </Card>
    </>
  );
}

export default NotificationCard;
