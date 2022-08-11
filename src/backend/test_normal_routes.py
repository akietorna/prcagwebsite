import pytest
from app import app
import json

def test_app_configurations():
    assert app.config['SECRET_KEY'] == 'ignance123@'
    assert app.config['DEBUG'] == True
    assert app.config['JWT_SECRET_KEY'] == 'prcwebsite123@'
    assert app.config['AUDIO_UPLOADS']== "C:/Users/Akietorna/Desktop/myapp/public/sermons"
    assert app.config['IMAGE_UPLOADS']== "C:/Users/Akietorna/Desktop/myapp/public/pictures"
    assert app.config['BOOK_UPLOADS']== "C:/Users/Akietorna/Desktop/myapp/public/books"
    assert app.config['ALLOWED_IMAGE_EXTENSIONS']== ['JPEG', 'JPG', 'PNG']
    assert app.config['ALLOWED_AUDIO_EXTENSIONS']== ['MP3', 'AAC', 'WAV']
    assert app.config['ALLOWED_BOOK_EXTENSIONS']==["PDF"]
    
def test_devotional():
    response = app.test_client().get('/devotional')
    data = json.loads(response.data.decode())
    assert response.status_code == 200
    assert data is not None  