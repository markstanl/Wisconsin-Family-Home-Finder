from flask import Flask, jsonify, request
import csv
import sqlite3
import pandas as pd
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///csv.db'
db = SQLAlchemy(app)

class City(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    population = db.Column(db.Integer)
    quality = db.Column(db.Integer)
    safety = db.Column(db.Integer)
    employability = db.Column(db.Integer)
    price = db.Column(db.Integer)

db.create_all()  # Create the database tables based on the models

df = pd.read_csv('city_education_crime_employement_homeprice.csv')
df.columns = df.columns.str.strip()
connection = sqlite3.connect('csv.db')
df.to_sql('city', db.engine, if_exists='replace', index=False)

connection.close()

# total set
cities = []
populations = []
prices = []

qualityNormalized = []
safetyNormalized = []
employabilityNormalized = []

# modified set
modifiedSafety = []
modifiedQuality = []
modifiedEmployability = []

rating = []

file_path = "./city_education_crime_employment_homeprice.csv"


def read_csv(file_path):
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        next(csv_reader)
        for column in csv_reader:
            cities.append(column[0])
            populations.append(column[1])
            qualityNormalized.append(column[2])
            safetyNormalized.append(column[3])
            employabilityNormalized.append(column[4])
            prices.append(column[5])

    return cities, populations, qualityNormalized, safetyNormalized, employabilityNormalized, prices


# API endpoint to get the arrays
def get_area_data():
    try:
        cities = City.query.all()
        if not cities:
            return jsonify({"error": "No cities found in the database"}), 404

        data = {
            "cities": [city.name for city in cities],
            "populations": [city.population for city in cities],
            "qualityNormalized": [city.quality for city in cities],
            "safetyNormalized": [city.safety for city in cities],
            "employabilityNormalized": [city.employability for city in cities],
            "prices": [city.price for city in cities]
        }
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/filter_data", methods=["POST"])
def filter():
    user_ratings = request.json
    user_employability = user_ratings.get("user_employability")
    user_safety = user_ratings.get("user_safety")
    user_quality = user_ratings.get("user_quality")

    # Calculate modified ratings
    quality_coefficient = {4: 1, 3: 0.75, 2: 0.5, 1: 0.25}
    safety_coefficient = {4: 1, 3: 0.75, 2: 0.5, 1: 0.25}
    employability_coefficient = {4: 1, 3: 0.75, 2: 0.5, 1: 0.25}

    # Filter cities based on user ratings
    filtered_cities = City.query.filter(
        City.quality * quality_coefficient[user_quality] +
        City.safety * safety_coefficient[user_safety] +
        City.employability * employability_coefficient[user_employability] >= 2.5
    ).all()

    # Sort cities by the calculated rating
    sorted_data = sorted(filtered_cities, key=lambda x: (
            x.quality * quality_coefficient[user_quality] +
            x.safety * safety_coefficient[user_safety] +
            x.employability * employability_coefficient[user_employability]
    ), reverse=True)

    # Return the sorted cities
    data = {
        "filtered_cities": [city.name for city in sorted_data]
    }
    return jsonify(data)


@app.route("/handle_budget", methods=["GET"])
def handle_budget():
    budget = request.args.get('budget', type=int)

    # Filter cities based on the budget
    filtered_cities = City.query.filter(City.price <= budget).all()

    # Return the names of filtered cities
    data = {
        "filtered_cities": [city.name for city in filtered_cities]
    }
    return jsonify(data)


if __name__ == "__main__":
    read_csv(file_path)
    app.run(debug=True, port=5000)
