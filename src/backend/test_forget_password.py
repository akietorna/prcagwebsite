import random
import string
import json
import pytest
from app import app, user_details

def test_forget_password():
    username1 = ''.join(random.choice(string.ascii_letters) for i in range(10))
    username2 = 'Akietorna'
    response1 = app.test_client().post('/admin/forget_password',data=json.dumps(dict(username = username1)), content_type='application/json')
    response2 = app.test_client().post('/admin/forget_password',data=json.dumps(dict(username = username2)), content_type='application/json')
    data1 = json.loads(response1.data.decode())
    data2 = json.loads(response2.data.decode())
    
    
    assert response1.status_code == 200
    assert response2.status_code == 200
    assert data1 is not 'username received'
    assert data1 == 'Sorry, No account is connected this username'
    assert data2 == 'username received'
   
    
def test_confirmation():
    response = app.test_client().post('/admin/confirmation_code')
    assert 