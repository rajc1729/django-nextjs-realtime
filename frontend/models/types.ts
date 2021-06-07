export interface UserModel {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
}

export interface RegisterUser {
  email: string;
  first_name: string;
  last_name: string;
  password1: string;
  password2: string;
  username: string;
}

export interface SensorModel {
  id: string;
  name: string;
  description: string;
  serial_no: string;
  secret_key: string;
  mac_address: string;
  sensor_type: string;
  manufacturer: string;
  stored_at: string;
  updated_at: string;
}
