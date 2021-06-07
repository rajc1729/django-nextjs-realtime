import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import Header from "../../../components/header";
import { apiCall } from "../../../service/common";
import { getCookie } from "../../../service/cookie";
import styles from "../../../styles/sensors.module.scss";

const Sensor: React.SFC<{}> = () => {
  const router = useRouter();

  const { serial_no } = router.query;

  const is_admin = () => {
    const access_token = getCookie("access_token");
    if (!access_token) {
      router.replace("/login");
    }
  };

  useEffect(() => {
    is_admin();
  }, []);

  const [data, setData] = useState(null);
  const [APIError, setAPIError] = useState(null);
  const [socketMessages, setSocketMessages] = useState([]);
  const webSocket = useRef(null);

  const getSocketToken = async (serial_no) => {
    let form_data = new FormData();
    form_data.append("serial_no", serial_no);

    const res = await apiCall({
      method: "POST",
      url: "/sensor/user_socket_token/",
      body: form_data,
    });

    if (res == "404" || res == "401" || res == "500") {
      // if API doen't return 404 or 500 this will be rendered
      switch (res) {
        case "404":
          setAPIError(404);
          break;

        case "500":
          setAPIError(500);
          break;

        case "401":
          setAPIError(401);
          break;

        default:
          break;
      }
    } else {
      setData(res);
    }
  };

  useEffect(() => {
    if (!serial_no) {
      return;
    } else {
      getSocketToken(serial_no);
    }
  }, [router]);

  useEffect(() => {
    if (!data) {
      return;
    }
    webSocket.current = new WebSocket(
      `ws://localhost:8000/liveHeartbeatV1?&token=${data.websocket_token}`
    );
    webSocket.current.onmessage = (message) => {
      const obj = JSON.parse(message.data);
      setSocketMessages((socketMessages) => [...socketMessages, obj.data]);
    };
    return () => webSocket.current.close();
  }, [data]);

  return (
    <>
      <Header />
      <div className={styles.sensor_detail_container}>
        {socketMessages.reverse().map((hearbeat) => {
          return (
            <div className={styles.sensor_detail} key={hearbeat.id}>
              <h4>numberOfPerson: {hearbeat.numberOfPerson}</h4>
              <h4>status: {hearbeat.status}</h4>
              <h4>id: {hearbeat.id}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sensor;
