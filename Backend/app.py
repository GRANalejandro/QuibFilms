# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Configuración de la base de datos
db = mysql.connector.connect(
    host="localhost",
        port=3308,  # Cambia al puerto que estés utilizando
    user="root",
    password="",
    database="users"
)
cursor = db.cursor()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    # Verificar las credenciales en la base de datos
    query = "SELECT * FROM users WHERE username = %s AND password = %s"
    cursor.execute(query, (username, password))
    result = cursor.fetchone()

    if result:
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})