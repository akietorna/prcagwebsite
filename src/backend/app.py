from flask import Flask,json, jsonify,request,redirect,flash,send_file,session,url_for
from python_modules.database import connection
from python_modules.emailhandling import confirm_email
from flask_bcrypt import Bcrypt
from functools import wraps
import gc
from datetime import datetime
import os
from werkzeug.utils import secure_filename



app=Flask(__name__)
app.config['SECRET_KEY'] = "ignance123@"
app.config['DEBUG'] = True

    
#initializations
bcrypt = Bcrypt()
#socketio = SocketIO(app)

user_details = { 'username': '','email': '', 'password': '', 'confirm_code': ''}


def login_required(f):
    @wraps(f)
    def wrapping(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        
        else :
            return jsonify('You need to log in first') 
        
    return wrapping


app.config['AUDIO_UPLOADS']= "C:/Users/Agbodjive Etorna/Desktop/myapp/public/sermons"
app.config['IMAGE_UPLOADS']= "C:/Users/Agbodjive Etorna/Desktop/myapp/public/pictures"
app.config['BOOK_UPLOADS']= "C:/Users/Agbodjive Etorna/Desktop/myapp/src/books"
app.config['ALLOWED_IMAGE_EXTENSIONS']= ['JPEG', 'JPG', 'PNG']
app.config['ALLOWED_AUDIO_EXTENSIONS']= ['MP3', 'AAC', 'WAV']
app.config['ALLOWED_BOOK_EXTENSIONS']=["PDF"]

#takes care of audio extensions
def allowed_audio_types(filename):
    #this converts the data into binary format
    if not '.' in filename:
        return False
    
    extension = filename.rsplit('.', 1)[1]
    
    if extension.upper() in app.config['ALLOWED_AUDIO_EXTENSIONS']:
        return True
    else:
        return False


# takes care of extensions if books
def allowed_book_types(filename):
    #this converts the data into binary format
    if not '.' in filename:
        return False
    
    extension = filename.rsplit('.', 1)[1]
    
    if extension.upper() in app.config['ALLOWED_BOOK_EXTENSIONS']:
        return True
    else:
        return False


# takes care of extensions if books
def allowed_image_types(filename):
    #this converts the data into binary format
    if not '.' in filename:
        return False
    
    extension = filename.rsplit('.', 1)[1]
    
    if extension.upper() in app.config['ALLOWED_IMAGE_EXTENSIONS']:
        return True
    else:
        return False   


@app.route("/admin/forget_password", methods=["POST"])
def forget_password():
    
    # this takes care of resetting password
    request_data = request.get_json()
    username = request_data['username']

    curs, connect = connection()

    check_account = curs.execute("select * from users where user_name = %s ", [username])

    print(check_account)
    # this function checks if the username is correct by sending an email to it's email address with a confirmation code
    if check_account > 0:
        email = curs.execute("select email from users where user_name = %s ", [username])
        email = str(curs.fetchone()[0])
        connect.commit()
        curs.close()
        connect.close()
        gc.collect()
        
        user_details['confirm_code'] = confirm_email(email,username)     
        print(user_details['confirm_code'])
        return jsonify('username received')

    else:
        return jsonify('Sorry, No account is connected this username')




@app.route('/admin/confirmation_code', methods=["POST"])
def confirm_code():
    # this function check if the correct code sent to user is typed
    request_data = request.get_json()
    confirmed_code = request_data['confirm_code']
    conf = user_details["confirm_code"]
    print(conf)
    if conf == confirmed_code:
        return jsonify('verification successful')

    else:
        return jsonify('You typed the wrong confirmatory code')



@app.route('/admin/set_password',methods=['POST'])
def set_password():
    # this function accept new password from the user to reset the old one 
    request_data = request.get_json()
    username = request_data["username"]
    password = request_data["password"]
    confirm_password = request_data["confirm_password"]

    if password == confirm_password:       
        password = bcrypt.generate_password_hash(password)
        curs, connect = connection()
        curs.execute("update users set password = (%s) where user_name= (%s)", [password,username])
        connect.commit()
        curs.close()
        connect.close()
        gc.collect()
        return jsonify('Password successfully reset')

    else:
        return jsonify('Error resetting password')
    
 
    
@app.route('/admin', methods=[ "POST"])
def sign_in():
    request_data = request.get_json()
    username = request_data['username']
    password = request_data['password']
    curs, connect = connection()
    info = curs.execute("SELECT * FROM users WHERE user_name = %s", [username])

    # fetching the password
    Password = curs.execute("SELECT password FROM users WHERE user_name = %s", [username])
    Password = curs.fetchone()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()

    if info == 1 and bcrypt.check_password_hash(Password[0], password) == True:
        return jsonify("Log in successfully")

    else:
        return jsonify("Invalid credentials, try again")



@app.route('/admin/post',methods=["GET"])
def post():
    curs,connect= connection()
    curs.execute("select * from posts")
    posts = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()
    
    return jsonify(posts[::-1])

@app.route("/delete_posts",methods=["POST"])
def delete_post():      
    print('okay1') 
    request_data = request.get_json()              
    picked = request_data['id']
    print('it worked')  
    print(picked)  
    # connection to database
    curs,connect = connection()
    curs.execute("delete from posts WHERE post_id = %s", [picked])

    connect.commit()
    curs.close()
    connect.close()
    gc.collect()

    return jsonify(f'Post with ID number {picked} deleted')





@app.route("/admin/add_devotional", methods=["POST"])
def add_devotional():
    
    # request_data = request.get_json()
    picture = request.files['picture']
    name=request.form['name']
    topic=request.form['topic']
    message=request.form['message']
    passage=request.form['passage']



    if allowed_image_types(picture.filename):

        filename = secure_filename(picture.filename)
        picture.save(os.path.join(app.config['IMAGE_UPLOADS'], filename))
        
        path_to_picture = '/pictures/'+ filename
        time_sent = datetime.now()
        item ='devotional'
        curs,connect = connection()
                    
        input_statement = ("INSERT INTO devotional (sender,title,post_time,passage,message,path_to_picture) VALUES (%s,%s,%s,%s,%s,%s)" ) 
        data = [name,topic, time_sent, passage,message,path_to_picture]
        curs.execute( input_statement, data)
        curs.execute("insert into posts (title,sender,post_time,item) values (%s, %s,%s,%s)", [topic,name,time_sent,item])
        connect.commit()
        curs.close()
        connect.close()
        gc.collect()
        return jsonify("Upload Successful !!!")
    
    else:
        return jsonify('Upload Unsuccessful, please try again')
        
        

@app.route("/devotional", methods=["GET"])
def devotional():
    curs, connect = connection()
    curs.execute('SELECT * FROM devotional')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])


@app.route("/delete_devotional",methods=["POST"])
def delete_devotionals():      
    print('okay1') 
    request_data = request.get_json()              
    picked = request_data['id']
    print('it worked')  
    print(picked)  
    # connection to database
    curs,connect = connection()
    curs.execute("delete from devotional WHERE post_id = %s", [picked])

    connect.commit()
    curs.close()
    connect.close()
    gc.collect()

    return jsonify(f'Post with ID number {picked} deleted')



@app.route('/admin/add_sermon', methods=["POST"]) 
def add_sermon():
      # request_data = request.get_json()
    picture = request.files['picture']
    sermon =request.files['sermon']
    name=request.form['name']
    topic=request.form['topic']



    if allowed_image_types(picture.filename) and allowed_audio_types(sermon.filename):

        filename1 = secure_filename(picture.filename)
        filename2 = secure_filename(sermon.filename)
        picture.save(os.path.join(app.config['IMAGE_UPLOADS'], filename1))
        sermon.save(os.path.join(app.config['AUDIO_UPLOADS'], filename2))
        
        path_to_picture = '/pictures/'+ filename1
        path_to_sermon = '/sermons/'+ filename2
        time_sent = datetime.now()
        item ='sermon'
        curs,connect = connection()
                     
        curs.execute( "INSERT INTO sermons (sender,title,post_time,path_to_sermon,path_to_picture) VALUES (%s,%s,%s,%s,%s)", [name,topic, time_sent, path_to_sermon,path_to_picture])
        curs.execute("insert into posts (title,sender,post_time,item) values (%s, %s,%s,%s)", [topic,name,time_sent,item])
        connect.commit()
        curs.close()
        connect.close()
        gc.collect()
        return jsonify("Upload Successful !!!")
    
    else:
        return jsonify('Upload Unsuccessful, please try again')


@app.route("/sermon", methods=["GET"])
def sermon():
    curs, connect = connection()
    curs.execute('SELECT * FROM sermons')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])

@app.route("/delete_sermon",methods=["POST"])
def delete_sermon():      
    request_data = request.get_json()              
    picked = request_data['id'] 
    # connection to database
    curs,connect = connection()
    curs.execute("delete from sermons WHERE post_id = %s", [picked])

    connect.commit()
    curs.close()
    connect.close()
    gc.collect()

    return jsonify(f'Post with ID number {picked} deleted')




@app.route('/prayer_request',methods=['POST'])
def prayer_request():
    # this function accept new password from the user to reset the old one 
    request_data = request.get_json()
    name = request_data["name"]
    phone_number = request_data["phone_number"]
    email = request_data["email"]
    prayer_request = request_data["prayer_request"]
    
    post_time =datetime.now()
  
    curs, connect = connection()
    curs.execute("insert into prayer_request (sender,phone_number,email,prayer_request,post_time) values (%s,%s,%s,%s,%s)", [name,phone_number,email,prayer_request,post_time])
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()
    return jsonify('Your input is recorded, it will be processed in due time ')



@app.route("/admin/prayer_request", methods=["GET"])
def read_prayer():
    curs, connect = connection()
    curs.execute('SELECT * FROM prayer_request')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/delete_prayer_request",methods=["POST"])
def delete_prayer_request():      
    request_data = request.get_json()              
    picked = request_data['id'] 
    # connection to database
    curs,connect = connection()
    curs.execute("delete from prayer_request WHERE post_id = %s", [picked])

    connect.commit()
    curs.close()
    connect.close()
    gc.collect()

    return jsonify(f'Post with ID number {picked} deleted')




@app.route('/add_testimony',methods=['POST'])
def add_testimony():
    # this function accept new password from the user to reset the old one 
    request_data = request.get_json()
    name = request_data["name"]
    phone_number = request_data["phone_number"]
    email = request_data["email"]
    testimony = request_data["testimony"]
    
    post_time =datetime.now()
  
    curs, connect = connection()
    curs.execute("insert into testimony (sender,phone_number,email,testimomy,post_time) values (%s,%s,%s,%s,%s)", [name,phone_number,email,testimony,post_time])
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()
    return jsonify('Your Testimony is recorded ')



@app.route("/admin/testimony", methods=["GET"])
def testimony():
    curs, connect = connection()
    curs.execute('SELECT * FROM testimony')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])


@app.route("/delete_testimony",methods=["POST"])
def delete_testimony():      
    request_data = request.get_json()              
    picked = request_data['id']
    # connection to database
    curs,connect = connection()
    curs.execute("delete from posts WHERE post_id = %s", [picked])

    connect.commit()
    curs.close()
    connect.close()
    gc.collect()

    return jsonify(f'Post with ID number {picked} deleted')




@app.route('/admin/add_announcement',methods=['POST'])
def add_announcement():
    # this function accept new password from the user to reset the old one 
    request_data = request.get_json()
    post_code = request_data["post_code"]
    sender = request_data["sender"]
    title = request_data["title"]
    announcement = request_data["announcement"]
    
    post_time =datetime.now()
  
    curs, connect = connection()
    curs.execute("insert into announcements (post_code,sender,title,post_time,announcement) values (%s,%s,%s,%s,%s)", [post_code,sender,title,post_time,announcement])
    curs.execute("insert into posts (title,sender,post_time,item) values (%s, %s,%s,%s)", [title,sender,post_time,post_code])
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()
    return jsonify('Your Announcement is recorded ')



@app.route("/announcement", methods=["GET"])
def announcement():
    curs, connect = connection()
    curs.execute('SELECT * FROM announcement')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/children_announcement", methods=["GET"])
def children_announcement():
    curs, connect = connection()
    post_id = 'CHI'
    curs.execute('SELECT * FROM announcement where post_code',[post_id])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/youth_announcement", methods=["GET"])
def youth_announcement():
    curs, connect = connection()
    post_id = 'YOU'
    curs.execute('SELECT * FROM announcement where post_code',[post_id])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/women_announcement", methods=["GET"])
def women_announcement():
    curs, connect = connection()
    post_id = 'WOM'
    curs.execute('SELECT * FROM announcement where post_id',[post_id])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/men_announcement", methods=["GET"])
def men_announcement():
    curs, connect = connection()
    post_id = 'MEN'
    curs.execute('SELECT * FROM announcement where post_id',[post_id])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/teen_announcement", methods=["GET"])
def teen_announcement():
    curs, connect = connection()
    post_id = 'WOM'
    curs.execute('SELECT * FROM announcement where post_id',[post_id])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/delete_announcement",methods=["POST"])
def delete_announcement():       
    request_data = request.get_json()              
    picked = request_data['id']  
    # connection to database
    curs,connect = connection()
    curs.execute("delete from posts WHERE post_id = %s", [picked])

    connect.commit()
    curs.close()
    connect.close()
    gc.collect()

    return jsonify(f'Post with ID number {picked} deleted')


@app.route("/logout/")
@login_required
def logout():
    session.clear()
    gc.collect()
    return redirect(url_for('home_page'))

#routing the various webpages 


@app.route('/get_comment/',methods=["GET","POST"])
@login_required
def get_comment():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT * from comments')
        data = curs.fetchall()
        
        data = reversed(data)



        return render_template("comments.html", value = data)

    except Exception as e:
        return render_template('comments.html', name=session['admin'])



@app.route('/testimony1/',methods=["GET","POST"])
@login_required
def testimony1():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT * FROM testimony')
        data = curs.fetchall()
        
        data = reversed(data)



        return render_template("testimony1.html", value = data)

    except Exception as e:
        return render_template('testimony1.html', name=session['admin'])

@app.route('/children/',methods=["GET","POST"])
@login_required
def children():
    try:
        curs, connect = connection()
        curs.execute('SELECT * from announcement where Dept_code="CM"')
        data = curs.fetchall()
        
        data = reversed(data)



        return render_template('children.html', name=session['logged_in'],value = data)

    except Exception as e:
        return render_template('children.html', name=session['logged_in'])

@app.route('/dailydevotion/',methods=["GET","POST"])
@login_required
def dailydevotion():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT * FROM dailydevotion')
        data = curs.fetchall()
        
        data = reversed(data)



        return render_template("dailydevotion.html", value = data)

    except Exception as e:
        return render_template('dailydevotion.html', name=session['logged_in'])
    

@app.route('/general/',methods=["GET","POST"] )
@login_required
def general():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT * FROM announcement where Dept_code = "GA" ')
        data = curs.fetchall()
        
        data = reversed(data)



        return render_template('general.html', name=session['logged_in'])

    except Exception as e:
        return render_template('general.html', name=session['logged_in'])
    


@app.route('/health1/',methods=["GET","POST"])
@login_required
def health1():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT id_number, filename,file FROM books where book_id = "HEAL"')
        data = curs.fetchall()

        return render_template('health1.html',  value = data)

    except Exception as e:
            return render_template('health1.html', name=session['logged_in'])
    

@app.route('/inspiration/',methods=["GET","POST"])
@login_required
def inspiration():

    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT id_number, filename,file FROM books where book_id="INS"')
        data = curs.fetchall()

        return render_template("inspiration.html", value = data)

    except Exception as e:
            return render_template('inspiration.html', name=session['logged_in'])

    

@app.route('/marriage1/',methods=["GET","POST"])
@login_required
def marriage1():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT id_number, filename,file FROM books where book_id = "MAR"')
        data = curs.fetchall()

        return render_template('marriage1.html',  value = data)

    except Exception as e:
        return render_template('marriage1.html', name=session['logged_in'])
    

@app.route('/men/',methods=["GET","POST"])
@login_required
def men():
    try:
        curs, connect = connection()
        curs.execute('SELECT * announcement where Dept_code="MM"')
        data = curs.fetchall()
        
        data = reversed(data)

        return render_template('men.html', name=session['logged_in'],value = data)

    except Exception as e:
        return render_template('men.html', name=session['logged_in'])

    

@app.route('/prayer1/',methods=["GET","POST"])
@login_required
def prayer1():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT id_number, filename,file FROM books where book_id= "PRAY"')
        data = curs.fetchall()

        return render_template('prayer1.html',  value = data)

    except Exception as e:
        error = "please it did not work"
        return render_template('prayer1.html',error = error, name=session['logged_in'])


@app.route('/viewbook/',methods=["GET","POST"])
@login_required
def viewbook():
    error=''
    try:
        id_num = request.args.get('id')
        curs,connect = connection()
        curs.execute('select file,location,filename from books where id_number = %s',[id_num])
        data= curs.fetchall()
        return render_template('downloads.html',name=session['logged_in'], value=data)

    except Exception as e:
        return render_template('downloads.html', name=session['logged_in'])

@app.route('/download/',methods=["GET","POST"])
@login_required
def download():
    path=request.args.get('id')
    print(path)
    return send_file(path,as_attachment=True)


@app.route('/download_audio/',methods=["GET","POST"])
@login_required
def download_audio():
    id_num=request.args.get('id')
    curs,connect = connection()
    curs.execute('select location from messages where post_id = %s',[id_num])
    path= curs.fetchone()[0]
    print(path)
    return send_file(path,as_attachment=True)




@app.route('/comments/',methods=["GET","POST"])
@login_required
def comments():
    form = Comments(request.form)
    if request.method =='POST' and form.validate():
        sender_name = form.sender_name.data
        comments= form.comments.data
        contact = form.contact.data

        time_sent = datetime.now()

        curs,connect = connection()
                    
        input_statement = ("INSERT INTO comments(sender_name,time_sent,contact,comment) VALUES (%s,%s,%s,%s)" ) 
        data = [sender_name, time_sent,contact, comments]
        curs.execute( input_statement, data)

        connect.commit()
        print("The process was sucessful")
        curs.close()
        connect.close()
        gc.collect()

        return redirect(url_for('thank_you1'))

    return render_template("comments.html", form=form, name=session['logged_in'])



@app.route('/spiritualbooks/', methods=["GET","POST"]) 
@login_required
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



@app.route('/marriagebooks/', methods=["GET","POST"]) 
@login_required
def marriagebooks():
    if request.method =='POST':

        if request.files:
            marriage = request.files['marriagebooks']

            if marriage.filename !='':

                if allowed_book_types(marriage.filename):

                    filename = secure_filename(marriage.filename)
                    marriage.save(os.path.join(app.config['MARRIAGE_UPLOADS'], filename))
                    

                    time_sent = datetime.now()

                    sender_name = session['username']

                    sermon = "/home/ekagbodjive/prcwebsite/static/books/marriage/"+ filename

                    files = "/books/marriage/" + filename
                    
                    curs,connect = connection()
                    

                    input_statement = ("INSERT INTO books (sender_name,time_sent,file,filename,location,book_id) VALUES (%s,%s,%s,%s,%s, %s)" ) 
                    data = [sender_name, time_sent,files,filename,sermon,"MAR"]
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

                
            return redirect(url_for('marriagebooks'))

    return render_template('marriagebooks.html')






  

@app.route('/sundayschool1/', methods=["GET","POST"]) 
@login_required
def sundayschool1():
    if request.method =='POST':

        if request.files:
            sundaysch = request.files['sundaysch']

            if sundaysch.filename !='':

                if allowed_book_types(sundaysch.filename):

                    filename = secure_filename(sundaysch.filename)
                    sundaysch.save(os.path.join(app.config['SUNDAYSCH_UPLOADS'], filename))
                    

                    time_sent = datetime.now()

                    sender_name = session['username']

                    sermon = "/home/ekagbodjive/prcwebsite/static/books/sundaysch/" + filename

                    files = "/books/sundaysch/" + filename

                    curs,connect = connection()
                    

                    input_statement = ("INSERT INTO books (sender_name,time_sent,filename,file,location,book_id) VALUES (%s,%s,%s,%s,%s, %s)" ) 
                    data = [sender_name, time_sent,filename,files, sermon, "SSCH"]
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


                
            return redirect(url_for('sundayschool1'))

    return render_template('sundayschool1.html', )




@app.route('/prayerbooks/', methods=["GET","POST"]) 
@login_required
def prayerbooks():
    if request.method =='POST':

        if request.files:
            prayer = request.files['prayerbooks']

            if prayer.filename !='':

                if allowed_book_types(prayer.filename):

                    filename = secure_filename(prayer.filename)
                    prayer.save(os.path.join(app.config['PRAYER_UPLOADS'], filename))
                    

                    time_sent = datetime.now()

                    sender_name = session['username']

                    sermon =  "/home/ekagbodjive/prcwebsite/static/books/prayer/" + filename

                    files = "/books/prayer/" + filename
                    curs,connect = connection()
                    

                    input_statement = ("INSERT INTO books (sender_name,time_sent,filename,file,location,book_id) VALUES (%s,%s,%s,%s,%s, %s)" ) 
                    data = [sender_name, time_sent,filename,files, sermon,"PRAY"]
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


                
            return redirect(url_for('prayerbooks'))

    return render_template('prayerbooks.html', name=session['admin'])




@app.route('/healthbooks/', methods=["GET","POST"]) 
@login_required
def healthbooks():
    if request.method =='POST':

        if request.files:
            health = request.files['healthbooks']

            if health.filename !='':

                if allowed_book_types(health.filename):

                    filename = secure_filename(health.filename)
                    health.save(os.path.join(app.config['HEALTH_UPLOADS'], filename))
                    

                    time_sent = datetime.now()

                    sender_name = session['username']

                    sermon = "/home/ekagbodjive/prcwebsite/static/books/health/" + filename

                    files = "books/health/" + filename

                    curs,connect = connection()
                    

                    input_statement = ("INSERT INTO books (sender_name,time_sent,filename,file,location,book_id) VALUES (%s,%s,%s,%s, %s)" ) 
                    data = [sender_name, time_sent,filename,files,sermon,"HEAL"]
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


                
            return redirect(url_for('healthbooks'))

    return render_template('healthbooks.html')


@app.route('/inspirationalbooks/', methods=["GET","POST"]) 
@login_required
def inspirationalbooks():
    if request.method =='POST':

        if request.files:
            inspirational = request.files['inspirationalbooks']

            if inspirational.filename !='':

                if allowed_book_types(inspirational.filename):

                    filename = secure_filename(inspirational.filename)
                    inspirational.save(os.path.join(app.config['INSPIRATION_UPLOADS'], filename))
                    

                    time_sent = datetime.now()

                    sender_name = session['username']

                    sermon = "/home/ekagbodjive/prcwebsite/static/books/inspirationalbooks/" + filename

                    files = "books/inspirationalbooks/" + filename

                    curs,connect = connection()
                    

                    input_statement = ("INSERT INTO books (sender_name,time_sent,filename,file,location,book_id) VALUES (%s,%s,%s,%s,%s, %s)" ) 
                    data = [sender_name, time_sent,filename,files,sermon, "INS"]
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


                
            return redirect(url_for('inspirationalbooks'))

    return render_template('inspirationalbooks.html', name=session['admin'])




@app.route('/spiritual_life1/',methods=["GET","POST"])
@login_required
def spiritual_life1():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT id_number, filename,file FROM books where book_id= "SPIR"')
        data = curs.fetchall()

        return render_template('spiritual_life1.html',  value = data)

    except Exception as e:
        return render_template('spiritual_life1.html', name=session['logged_in'])
    

@app.route('/sundayschool/',methods=["GET","POST"])
@login_required
def sundayschool():
    error=''
    try:
        curs, connect = connection()
        curs.execute('SELECT id_number, filename,file FROM books where book_id= "SSCH"')
        data = curs.fetchall()
        return render_template('sundayschool.html',  value = data)

    except Exception as e:
        return render_template('sundayschool.html', name=session['logged_in'])
    

@app.route('/teen/',methods=["GET","POST"])
@login_required
def teen():
    try:
        curs, connect = connection()
        curs.execute('SELECT * from announcement where Dept_code="TM"')
        data = curs.fetchall()
        
        data = reversed(data)

        return render_template('teen.html', name=session['logged_in'],value = data)

    except Exception as e:
        return render_template('teen.html', name=session['logged_in'])

@app.route('/women/',methods=["GET","POST"])
@login_required
def women():
    try:
        curs, connect = connection()
        curs.execute('SELECT * from announcement where Dept_code="WM"')
        data = curs.fetchall()
        
        data = reversed(data)



        return render_template('women.html', name=session['logged_in'], value = data)

    except Exception as e:
        return render_template('women.html', name=session['logged_in'])

     


@app.route('/youth/',methods=["GET","POST"])
@login_required
def youth():
    try:
        curs, connect = connection()
        curs.execute('SELECT * FROM announcement where Dept_code="YM"')
        data = curs.fetchall()
        
        data = reversed(data)



        return render_template('youth.html',name=session['logged_in'],value = data)

    except Exception as e:
        return render_template('youth.html', name=session['logged_in'])


@app.route("/thank_you/", methods=["GET","POST"])
def thank_you():
    return render_template('thankyou.html')

@app.route("/thank_you1/", methods=["GET","POST"])
def thank_you1():
    return render_template('thankyou1.html')


@app.errorhandler(404)
def page_not_found(e):
    return jsonify('page not found')

@app.errorhandler(500)
def server_error(e):
    return jsonify('error connecting to server')





# if __name__ =="__main__":
#     socketio.run(app, debug=True)

if __name__== "__main__":
    app.run(debug=True)

