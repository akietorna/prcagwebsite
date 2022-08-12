import smtplib,ssl
from email.mime.text import MIMEText
import random



# the duty of the function is to send an email to the user containing a confirmation code
def confirm_email(receiver, username):
    port = 465
    smtp_server = "smtp.gmail.com"
    
    # generate code generate the con
    sender_email = str("akitestapps@gmail.com")
    password = str("bnvpubhdcgazdgiw")

    conf_code = generate_code()


    msg = MIMEText(f" Hello {username} ! \n \n You requested for a change of password to your account on the PRC website. Please enter the following code. \n \n Confirmation Code: {conf_code} \n \n You can ignore this mail if you are not the one who triggered the process. ")
    msg['Subject'] = 'PRC AG website sign up email confirmation'
    msg['From'] = 'PRC Technical Team'
    msg['To'] = receiver

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL(smtp_server,port,context = context) as server:
        server.login(sender_email,password)
        server.sendmail(sender_email,receiver,msg.as_string())
    return conf_code
    


def generate_code():
    confirmation_code = ""
    for a in range(0,7):
        confirmation_code += str(random.randint(0,9))

    return confirmation_code