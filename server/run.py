from flask import Flask
from app.api.patient_api import patient_api

from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.register_blueprint(patient_api, url_prefix='/api')
app.secret_key = os.urandom(24)

if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0', port=8000)
