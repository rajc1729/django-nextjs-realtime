import { SensorModel } from "../models/types";
import Link from "next/link";
import styles from "../styles/components/card.module.scss";

export interface SensorCardProps {
  sensor: SensorModel;
}

const SensorCard: React.SFC<SensorCardProps> = ({ sensor }) => {
  return (
    <>
      <div className={styles.card_container}>
        <Link href={{ pathname: "/sensor" + "/" + sensor.serial_no }}>
          <div>
            <h1>{sensor.name}</h1>
            <h4>{sensor.description}</h4>
            <h5>serial no: {sensor.serial_no}</h5>
            <h5>mac address: {sensor.mac_address}</h5>
            <h5>registered on: {sensor.stored_at}</h5>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SensorCard;
