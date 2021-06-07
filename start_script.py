
#----------------------------------------------
import sys
import requests

BASE_URL = "http://127.0.0.1:8000"
FRONTEND_URL = "http://127.0.0.1:3000"

USER_PAYLOAD = {
        'username': 'dasein2',
        'email': 'dasein3@gmail.com',
        'password1': 'Hello@123',
        'password2': 'Hello@123',
        'first_name': 'Raj',
        'last_name': 'Chhatbar'
        }

SOCKET_PAYLOAD = {
    'name': 'SN1729',
    'description': 'used to get number of persons',
    'serial_no': "12345678910",
    'secret_key': 'abcabcabc4545',
    'mac_address': '00:1B:44:11:3A:B7',
    'sensor_type': 'wall_mount',
    'manufacturer': 'texas instruments'
    }

AUTH_DATA = None
SENSOR_DATA = None
SENSOR_ACCESS_TOKEN = None


#########################################
## ASK QUESTION
#########################################
import sys
def ask_question(question):
    sys.stdout.write(question)
    yes = {'yes','y', 'ye', ''}
    no = {'no','n'}
    
    choice = input().lower()
    if choice in yes:
       return True
    elif choice in no:
       return False
    else:
       sys.stdout.write("Please respond with 'yes' or 'no' \n")


#########################################
## SIGNUP USER
#########################################
def signup_user():
    URL = BASE_URL + "/rest-auth/registration/"
    headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    sys.stdout.write("TRYING TO SIGNUP \n")
    response = requests.request("POST", URL, headers=headers, data=USER_PAYLOAD)
    return response


#########################################
## LOGIN USER
#########################################
def login_user():
    URL = BASE_URL + '/rest-auth/login/'
    payload = {
        'username': USER_PAYLOAD['username'],
        'password': USER_PAYLOAD['password1']
        }

    headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    
    sys.stdout.write("TRYING TO LOGIN \n")
    response = requests.request("POST", URL, headers=headers, data=payload)
    return response

#########################################
## SETUP SENSOR
#########################################
def setup_sensor():
    sys.stdout.write("SETTING UP SENSOR \n")
    URL = BASE_URL + '/sensor/'

    headers = {
      'Authorization': f"Bearer {AUTH_DATA['access_token']}",
    }
    
    response = requests.request("POST", URL, headers=headers, data=SOCKET_PAYLOAD)
    return response
    
#########################################
## SENSOR ACCESS TOKEN
#########################################
def get_sensor_access_token():
    sys.stdout.write("GETTING SENSOR ACCESS TOKEN\n")
    URL = BASE_URL + '/sensor/sensor_socket_token/'
    payload= { "serial_no": SOCKET_PAYLOAD['serial_no'], "secret_key": SOCKET_PAYLOAD['secret_key']}
    
    response = requests.request("POST", URL, data=payload)
    return response
    
    

# ----------------------------------------------------

# setting up user

res = signup_user()
login_flag = False

if res.status_code==201:
    sys.stdout.write("NEW USER CREATED! \n")
    AUTH_DATA = res.json()
elif res.status_code==400:
    sys.stdout.write("USER ALREADY EXISTS! \n")
    login_flag = True
else:
    sys.exit("PROBLEM WITH SERVER \n")

if login_flag:
    res = login_user()
    
    if res.status_code == 200:
        AUTH_DATA = res.json()
        sys.stdout.write("USER SIGNIN DONE! \n")
    else:
        sys.exit("PROBLEM WITH LOGIN OR SERVER \n")
    

# setting up sensor
res = setup_sensor()
if res.status_code==201:
    sys.stdout.write("NEW SENSOR CREATED! \n")
    SENSOR_DATA = res.json()
elif res.status_code==400:
    sys.stdout.write("SENSOR ALREADY EXISTS! \n")
else:
    sys.exit("PROBLEM SETTING UP NEW SENSOR \n")


# getting sensor token using REST API request
res = get_sensor_access_token()
if res.status_code==200:
    sys.stdout.write("GOT SENSOR ACCESS TOKEN! \n")
    SENSOR_ACCESS_TOKEN = res.json()
else:
    sys.exit("PROBLEM GETTING SENSOR ACCESS TOKEN \n")
    
    
# allow user to open frontend
sys.stdout.write(f"Open \u001b]8;;{FRONTEND_URL}\u001b\\{FRONTEND_URL}\u001b]8;;\u001b\\ to access web page")

sys.stdout.write(f"Use Email: {USER_PAYLOAD['email']} and password: {USER_PAYLOAD['password1']} to access web page")

while True:
    answer = ask_question("Are you finished opening the browser")
    if answer:
        break


# connect to websocket
from websocket import create_connection
ws = create_connection(f"ws://localhost:8000/liveHeartbeatV1?token={SENSOR_ACCESS_TOKEN['websocket_token']}")

# send data
ws.send('{"data": {"id": "1", "status": 200, "numberOfPeople": 5}}')

import time
starttime = time.ctime()
endtime = time.ctime(time.time() + 50) # 1 minute
count = 2
while True:
    temp_str = '{"data": {"id": "'+ str(count) +'", "status": 200, "numberOfPerson":' + str(10 +count) + '}}'
    count+=1
    
    ws.send(temp_str)
    current_time = time.ctime()
    if current_time>endtime:
        break
    time.sleep(2)
