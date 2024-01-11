import { Button, Container } from "@mui/material";
import NotificationCard from "../components/NotificationCard";
import useStore from "../Store";

export function Notifications() {
  const data = useStore((state) => state.data);

  const removeData = useStore((state) => state.removeData);
  const resetData = useStore((state) => state.resetData);

  return (
    <Container maxWidth="md">
      <h1>Notifications</h1>
      {data.map((notification) => (
        <NotificationCard
          key={notification.id}
          id={notification.id}
          subject={notification.subject}
          message={notification.message}
          datetime={notification.datetime}
          iconType={notification.iconType}
          color={notification.color}
          backgroundColor={notification.backgroundColor}
          closeNotificationAction={removeData}
        />
      ))}
      <Button onClick={() => resetData()} variant="contained">
        Reset Defaults
      </Button>
    </Container>
  );
}
