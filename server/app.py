from flask import Flask, jsonify, request
import pandas as pd
import csv

app = Flask(__name__)

cityList = []
qualityNormalized = []
safetyNormalized = []
employabilityNormalized = []

def load_data():
    cities = {}

    f = open('../city_education_crime_employment_homeprice.csv', encoding='utf-8')
    raw_data = list(csv.reader(f))
    f.close()

    header = raw_data[0]
    header.pop(0)
    raw_data = raw_data[1:]

    for data in raw_data:
        city_name = data[0]
        data.pop(0)
        value = {}
        for i in range(len(header)):
            value[header[i]] = data[i]
        for stat in value:
            if stat in ['population', 'average_education_index', 'crime_index', 'sixteen_plus_employed_percentage',
                        "house_median_value", 'edu_index_norm', 'employed_percentage_norm']:
                value[stat] = int(value[stat])
        cities[city_name] = value

    for city_name in cities:
        city = cities[city_name]
        qualityNormalized.append(city["average_education_index"])
        safetyNormalized.append(city["crime_index"])
        employabilityNormalized.append(city["sixteen_plus_employed_percentage"])
        cityList.append(city)


@app.route("/filter_data", methods=["POST"])
def filter():

    global cityList, qualityNormalized, safetyNormalized, employabilityNormalized

    user_ratings = request.json
    user_employability = user_ratings.get("user_employability")
    user_safety = user_ratings.get("user_safety")
    user_quality = user_ratings.get("user_quality")
    user_budget = user_ratings.get("user_budget")

    # Filter cities based on user budget
    filtered_cities = [city for city in cityList if city["price"] <= user_budget]

    modified_quality = [q * user_quality for q in qualityNormalized]
    modified_safety = [s * user_safety for s in safetyNormalized]
    modified_employability = [e * user_employability for e in employabilityNormalized]

    # Combine modified ratings
    added_rating = [q + s + e for q, s, e in zip(modified_quality, modified_safety, modified_employability)]

    # Sort cities based on modified ratings
    sorted_cities = [city for _, city in sorted(zip(added_rating, filtered_cities), reverse=True)]

    return jsonify(sorted_cities)




if __name__ == "__main__":
    load_data()
    app.run(debug=True, port=5000)
