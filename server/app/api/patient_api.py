from flask import Blueprint, request, jsonify, session, g
from ..services.patient_service import PatientService
import os
import hashlib
import time

patient_api = Blueprint('patient_api', __name__)
patient_service = PatientService()
def generate_token():
    token = os.urandom(24)  # Generate a random token
    return hashlib.sha256(token).hexdigest()  # Hash it for secure storage


@patient_api.route('/login', methods=['POST'])
def login():
    credential_data = request.json
    username = credential_data['username']
    password = credential_data['password']

    # returns True if the combination of username and password exists in the Patient table
    is_patient = patient_service.verify_credential(username, password)
    if is_patient is False:
        g.user_token = None
        g.username = None
        g.login_time = None
        return {"msg": "Wrong username or password"}, 401
    else:
        token = generate_token()
        session['user_token'] = token
        session['username'] = username
        session['login_time'] = time.time()

        g.user_token = session['user_token']
        g.username = session['username']
        g.login_time = session['login_time']

        patient = patient_service.fetch_details(username)
        print('Welcome ' + g.username + ' Login time: ', g.login_time)
        # return first_name, last_name
        return jsonify(patient.to_dict()), 200
