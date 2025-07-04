from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    name = request.form['name']
    age = int(request.form['age'])
    smoker = request.form['smoker']
    activity = request.form['activity']

    # Base life expectancy
    life_expectancy = 85

    if smoker == 'yes':
        life_expectancy -= 10
    if activity == 'low':
        life_expectancy -= 5
    elif activity == 'high':
        life_expectancy += 2

    current_year = datetime.now().year
    death_year = current_year + (life_expectancy - age)
    death_date = f"January 1, {death_year}"

    return render_template('clock.html',
                           name=name,
                           death_year=death_year,
                           death_date=death_date)

if __name__ == '__main__':
    app.run(debug=True)
