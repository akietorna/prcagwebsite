import random
import string
import json
import pytest
from app import app

def test_sign_in():
    username1 = ''.join(random.choice(string.ascii_letters) for i in range(12))
    password1 = ''.join(random.choice(string.printable) for i in range(12))
    response1 = app.test_client().post('/admin',data=json.dumps(dict(username = username1,password = password1)), content_type='application/json')
    data1 = json.loads(response1.data.decode())
    token = ''.join(random.choice(string.printable) for i in range(50))
    username2 = 'Akietorna'
    password2 = 'hispresence123@'
    response2 = app.test_client().post('/admin',data=json.dumps(dict(username = username2,password = password2)), content_type='application/json')
    data2 = json.loads(response2.data.decode())
    assert response1.status_code == 200
    assert data1 == 'Invalid Credentials, Try again'
    assert response1.content_type == 'application/json'
    assert response2.status_code == 200
    assert data2['token'] is not  token
    assert response2.content_type == 'application/json'
    
    