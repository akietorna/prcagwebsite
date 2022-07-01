from flask import Flask,json, jsonify,request,redirect,send_file,session,url_for
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


app.config['AUDIO_UPLOADS']= "C:/Users/akietorna/Desktop/myapp/public/sermons"
app.config['IMAGE_UPLOADS']= "C:/Users/akietorna/Desktop/myapp/public/pictures"
app.config['BOOK_UPLOADS']= "C:/Users/akietorna/Desktop/myapp/public/books"
app.config['BOOK_DOWNLOADS']= "C:/Users/akietorna/Desktop/myapp/public"
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
        return jsonify('username received')

    else:
        return jsonify('Sorry, No account is connected this username')




@app.route('/admin/confirmation_code', methods=["POST"])
def confirm_code():
    # this function check if the correct code sent to user is typed
    request_data = request.get_json()
    confirmed_code = request_data['confirm_code']
    conf = user_details["confirm_code"]
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
    curs.execute('SELECT * FROM announcement where post_code= CHI')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/youth_announcement", methods=["GET"])
def youth_announcement():
    curs, connect = connection()
    curs.execute('SELECT * FROM announcement where post_code = YOU')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/women_announcement", methods=["GET"])
def women_announcement():
    curs, connect = connection()
    curs.execute('SELECT * FROM announcement where post_code = WOM')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/men_announcement", methods=["GET"])
def men_announcement():
    curs, connect = connection()
    curs.execute('SELECT * FROM announcement where post_code = MEN')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])



@app.route("/teen_announcement", methods=["GET"])
def teen_announcement():
    curs, connect = connection()
    curs.execute('SELECT * FROM announcement where post_code = TEE')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])




@app.route("/general_announcement", methods=["GET"])
def general_announcement():
    curs, connect = connection()
    curs.execute('SELECT * FROM announcement where post_code = GEN')
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
    curs.execute("delete from announcements WHERE post_code = %s", [picked])

    connect.commit()
    curs.close()
    connect.close()
    gc.collect()

    return jsonify(f'Post with ID number {picked} deleted')





@app.route('/admin/add_book', methods=["POST"]) 
def add_book():  
    post_code = request.form['post_code']
    picture = request.files['picture']
    book =request.files['book']
    name=request.form['name']
    topic=request.form['topic']

    if allowed_image_types(picture.filename) and allowed_book_types(book.filename):

        filename1 = secure_filename(picture.filename)
        filename2 = secure_filename(book.filename)
        picture.save(os.path.join(app.config['IMAGE_UPLOADS'], filename1))
        book.save(os.path.join(app.config['BOOK_UPLOADS'], filename2))

        path_to_picture = '/pictures/'+ filename1
        path_to_sermon = '/books/'+ filename2
        time_sent = datetime.now()
        item ='book'
        curs,connect = connection()

        curs.execute( "INSERT INTO books (sender,title,post_time,path_to_sermon,path_to_picture,post_code) VALUES (%s,%s,%s,%s,%s,%s)", [name,topic, time_sent, path_to_sermon,path_to_picture,post_code])
        curs.execute("insert into posts (title,sender,post_time,item) values (%s, %s,%s,%s)", [topic,name,time_sent,item])
        connect.commit()
        curs.close()
        connect.close()
        gc.collect()
        return jsonify("Upload Successful !!!")

    else:
        return jsonify('Upload Unsuccessful, please try again')


@app.route("/sunday_school", methods=["GET"])
def sunday_school():
    curs, connect = connection()
    curs.execute('SELECT * FROM books where post_code = %s', ['SCH'])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])


@app.route("/marriage", methods=["GET"])
def marriage():
    curs, connect = connection()
    curs.execute('SELECT * FROM books where post_code = %s',['MAR'])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])


@app.route("/prayer", methods=["GET"])
def prayer():
    curs, connect = connection()
    curs.execute('SELECT * FROM books where post_code = %s',['PRA'])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])


@app.route("/health", methods=["GET"])
def health():
    curs, connect = connection()
    curs.execute('SELECT * FROM books where post_code = %s',['HEA'])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])


@app.route("/motivation", methods=["GET"])
def motivation():
    curs, connect = connection()
    curs.execute('SELECT * FROM books where post_code = %s',['MOT'])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])


@app.route("/christian_life", methods=["GET"])
def christian_life():
    curs, connect = connection()
    curs.execute('SELECT * FROM books where post_code =%s',['CHR'])
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])

@app.route("/books", methods=["GET"])
def books():
    curs, connect = connection()
    curs.execute('SELECT * FROM books')
    data = curs.fetchall()
    connect.commit()
    curs.close()
    connect.close()
    gc.collect()              
    return jsonify(data[::-1])

@app.route("/delete_book",methods=["POST"])
def delete_book():      
    request_data = request.get_json()              
    picked = request_data['id'] 
    print(picked)
    # connection to database
    curs,connect = connection()
    curs.execute("delete from books WHERE post_id = %s", [picked])
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
 

@app.route('/download_book',methods=["POST","GET"])
def download_book():
    request_data = request.get_json()
    path = request_data['path']
    path = app.config['BOOK_DOWNLOADS'] + path
    print(path)   
    return send_file(path,as_attachment=True)



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
