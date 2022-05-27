from flask import Flask
import smtplib,ssl
from email.mime.text import MIMEText
import random

app=Flask(__name__)
app.config['SECRET_KEY'] = "ignance123@"
app.config['DEBUG'] = True





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



def spiritualbooks():
    if request.method =='POST':

        if request.files:
            spiritual = request.files['spiritualbooks']

            if spiritual.filename !='':

                if allowed_book_types(spiritual.filename):

                    filename = secure_filename(spiritual.filename)
                    spiritual.save(os.path.join(app.config['SPIRITUAL_UPLOADS'], filename))
                    

                    time_sent = datetime.now()

                    sender_name = session['username']

                    location = "/home/ekagbodjive/prcwebsite/static/books/spirituallife/" + filename

                    files = "/books/spirituallife/" + filename

                    curs,connect = connection()
                    

                    input_statement = ("INSERT INTO books (sender_name,time_sent,filename,file,location,book_id) VALUES (%s,%s,%s,%s,%s, %s)" ) 
                    data = [sender_name, time_sent,filename,files, location,"SPIR"]
                    curs.execute( input_statement, data)

                    connect.commit()
                    print("The process was sucessful")
                    curs.close()
                    connect.close()
                    gc.collect()

                else :
                    flash("that file type is not allowed")
                    print('that file type is not allowed')
                    return render_template('404.html')


                
            return redirect(url_for('spiritualbooks'))

    return render_template('spiritualbooks.html', name=session['admin'])