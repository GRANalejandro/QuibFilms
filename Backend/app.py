from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Conexión a la base de datos MySQL
db = mysql.connector.connect(
    host="localhost",  # Reemplaza con la dirección de tu servidor MySQL
    user="root",  # Reemplaza con tu nombre de usuario de MySQL
    passwd="",  # Reemplaza con tu contraseña de MySQL
    database="users"  # Nombre de la base de datos en PHPMyAdmin
)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE username=%s AND password=%s", (username, password))
    user = cursor.fetchone()

    if user:
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})

if __name__ == '__main__':
    app.run(debug=True)
