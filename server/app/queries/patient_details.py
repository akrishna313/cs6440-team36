from ..utils import database
from ..models.patient import Patient

## To verify if the combination of username and passowrd exist
def is_patient(user_name, password):
    conn = database.get_db_connection()
    cursor = conn.cursor()
   
    cursor.execute('''
                   SELECT 'Found' AS match FROM "Patient" WHERE username= '{patient_username}' and password = '{patient_password}';               
                   '''.format(patient_username = user_name, patient_password = password )
                   )
    result = cursor.fetchone()
    cursor.close()
    conn.close()
    
    if result is not None:
        return True

    return False


## to pull the patient information
def get_details(user_name):
    conn = database.get_db_connection()
    cursor = conn.cursor()
    details_list = ["username", "first_name", "last_name"]
    patient_dict = {}

    cursor.execute('''
                   SELECT username, first_name, last_name FROM "Patient" WHERE username= '{patient_username}';               
                   '''.format(patient_username = user_name)
                   )
    results = cursor.fetchone()
    patient_dict = dict( zip(details_list, results) )
    cursor.close()
    conn.close()

    # Construct Patient
    patient = Patient.from_dict(patient_dict)
    return patient
