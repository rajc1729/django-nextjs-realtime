import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import Header from "../components/header";
import SensorCard from "../components/SensorCard";
import styles from "../styles/sensors.module.scss";
import { apiCall } from "../service/common";
import { getCookie } from "../service/cookie";

const Sensors: React.SFC<{}> = () => {
  const router = useRouter();
  const is_admin = () => {
    const access_token = getCookie("access_token");

    if (!access_token) {
      router.replace("/login");
    }
  };

  useEffect(() => {
    is_admin();
  }, []);

  const [data, setData] = useState([]);
  const [APIError, setAPIError] = useState(null);

  const getSensorDetils = async () => {
    const res = await apiCall({
      method: "GET",
      url: "/sensor/",
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
    getSensorDetils();
  }, []);

  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "100%", marginTop: "60px" }}>
        <div className={styles.countries_grid}>
          {data?.map((sensor) => {
            return <SensorCard key={sensor.id} sensor={sensor} />;
          })}
          {data?.length === 0 && (
            <div>
              <p>no sensor found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sensors;
