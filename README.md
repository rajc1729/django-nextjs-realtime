# django-nextjs-realtime

Here I have created a full-stack application based on Django and Nextjs to get realtime updates for sensors.

## Features

- Realtime update from sensor data to frontend
- Providing realtime support using Web Sockets (Django Channels)

> This includes three Django apps
> first one is authentication, which uses django rest auth along with JWT tokens to create a User
> second is used to provide CRUD APIs for Sensor
> third has the consumer which will communicate with frontend server using websocket

The first app is used to create users. Over here, I have override AbstractUser and RegisterSerializer to add support for first_name and last_name.

In the second app, I have added extra methods which will generate a unique JWT token. In order to connect to WebSocket, it must send an HTTP post request along with the serial_no of the sensor they want to subscribe to, and then they can connect to the WebSocket by passing it as a parameter in the URL. This way, we can put the expiry time of the WebSocket token to some millisecond, after which it will expire, and by that time, we can make a WebSocket handshake.

The third app handles the WebSocket connection. Here, I have created an auth middleware for the WebSocket that will decode the JWT, extract the type of request, and verify its validity. And then add the uid form token to scope.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd django-nextjs-realtime

Backend
cd backend
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver


Frontend
cd frontend
npm install
npm run dev
open http://localhost:3000/
```

## Script

To memic the data sent by the sensor, I have created a script in python 'start_script.py'.
Start terminal:

```sh
cd django-nextjs-realtime
python3 start_script.py
```

## Extension

#### How to know whether when sensor does'nt provide update for 10 min?

- Here, we can update the time of the 'update_at' field for the sensor every time it sends the data, and this would require an asynchronous task queue such as celery to run a background task for filtering the sensors which are not updated in the last 10 mins. And alert the user by notifying them. Plus, we can also index the 'update_at' field to find sensors list in about logarithmic time.

## License

MIT
