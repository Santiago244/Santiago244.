from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__)
# Call the sqlachemy library and make the model
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///database.db'
engine = create_engine('sqlite:///database.db')
db = SQLAlchemy()
# Get the connection with the db
db.init_app(app)
# Create table

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('mail')
        message = request.form.get('message')
        engine.execute('INSERT INTO visitors (name, email, message) VALUES (?, ?, ?)', name, email, message)
        todo = engine.execute('SELECT * FROM visitors')
        data = todo.fetchall()
        return render_template('feedback.html', data=data)
    return render_template('index.html')
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000)