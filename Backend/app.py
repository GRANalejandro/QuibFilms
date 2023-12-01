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

    # Verificar las credenciales en la base de datos de WampServer
    query = "SELECT * FROM users WHERE username = %s AND password = %s"
    cursor.execute(query, (username, password))
    result = cursor.fetchone()

    if result:
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})


from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Configuración de la base de datos en WampServer
db = mysql.connector.connect(
    host="localhost",
    port=3306,  # Puerto predeterminado para MySQL en WampServer
    user="root",  # Usuario de tu base de datos en WampServer
    password="",  # Contraseña de tu base de datos en WampServer (si tienes una)
    database="users"  # Nombre de la base de datos que estás utilizando
)
cursor = db.cursor()

# Resto de tu código Flask para el manejo de la ruta '/login'
# ...

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    # Verificar las credenciales en la base de datos de WampServer
    query = "SELECT * FROM users WHERE username = %s AND password = %s"
    cursor.execute(query, (username, password))
    result = cursor.fetchone()

    if result:
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})
