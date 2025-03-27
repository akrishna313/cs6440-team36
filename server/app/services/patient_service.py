from ..queries.patient_details import is_patient, get_details

class PatientService:

    def fetch_details(self, username):
        return get_details(username)

    def verify_credential(self, username, password):
        if is_patient(username, password):
            return True
        else:
            return False


