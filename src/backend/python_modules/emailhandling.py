from flask import Flask
import smtplib,ssl
from email.mime.text import MIMEText
import random

app=Flask(__name__)
app.config['SECRET_KEY'] = "ignance123@"
app.config['DEBUG'] = True

    
#initializations
bcrypt = Bcrypt()
#socketio = SocketIO(app)

user ={"firstname":'', "lastname":""}


def confirm_email(receiver, username):
    port = 465
    stmp_server = "smtp.gmail.com"
    
    sender_email = "pentecostalrevivalcenter@gmail.com"
    password = 'ndjewfjbfhafk'

    conf_code = generate_code() 

    

    msg = MIMEText(f" Hello {username} ! \n \n You requested for a change of password to your account on the PRC website. Please enter the following code. \n \n Confirmation Code: {conf_code} \n \n You can ignore this mail if you are not the one who triggered the process. ")
    msg['Subject'] = 'PRC AG website sign up email confirmation'
    msg['From'] = 'pentecostalrevivalcenterag@gmail.com'
    msg['To'] = receiver

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL(stmp_server,port,context = context) as server:
        server.login(sender_email,password)
        server.sendmail(sender_email,receiver_email,msg.as_string())

    return redirect(url_for('confirm_coded'))
    


def generate_code():
    confirmation_code = ""
    for a in range(0,7):
        confirmation_code += str(random.randint(0,9))

    return confirmation_code