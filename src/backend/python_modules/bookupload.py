from flask import Flask
import smtplib,ssl
from email.mime.text import MIMEText
import random
from time import localtime,strftime
from datetime import datetime
from werkzeug.utils import secure_filename




def uploadbooks(booksname, username, file_location,mypath,file_path,part):


    if booksname.filename !='':

        if allowed_book_types(booksname.filename):

            filename = secure_filename(booksname.filename)
            spiritual.save(os.path.join(mypath, filename))
            

            time_sent = datetime.now()


            location = str(mypath) + filename

            files = f'{file_path}' + filename
            curs,connect = connection()
                    

            input_statement = ("INSERT INTO books (sender_name,time_sent,filename,file,location,book_id) VALUES (%s,%s,%s,%s,%s, %s)" ) 
            data = [sender_name, time_sent,filename,files, location,part]
            curs.execute( input_statement, data)

            connect.commit()
            print("The process was sucessful")
            curs.close()
            connect.close()
            gc.collect()



