from flask import request, jsonify, make_response
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from . import app, mysql

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    cursor = mysql.get_db().cursor()
    cursor.execute("SELECT * FROM users WHERE username=%s AND password=%s", (username, password))
    user = cursor.fetchone()

    if user:
        access_token = create_access_token(identity={'username': username})
        return jsonify({'token': access_token})

    return make_response('Could not verify!', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()   #hacer la transaccion
    return jsonify(logged_in_as=current_user), 200
