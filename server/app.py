from flask import Flask, jsonify, request
import pandas as pd
import csv
import cities

app = Flask(__name__)

cities_data_fin = {}
cityList = []

qualityNormalized = []
safetyNormalized = []
employabilityNormalized = []


def load_data():
    import csv
    f = open('../city_education_crime_employment_homeprice.csv', encoding='utf-8')
    raw_data = list(csv.reader(f))
    f.close()
    header = raw_data[0]
    header.pop(0)
    raw_data = raw_data[1:]
    for data in raw_data:
        data.pop(0)
        value = {}
        for i in range(len(header)):
            value[header[i]] = data[i]
        for stat in value:
            # print(stat)
            if stat in ['population', 'average_education_index', 'crime_index,sixteen_plus_employed_percentage',
                        'house_median_value', 'edu_index_norm,employed_percentage_norm']:
                # print(int(pkmn[stat]))
                value[stat] = float(value[stat])
        cities_data_fin[value["city"]] = value


def get_city_name(city):
    return cities_data_fin[city]["city"]


def get_city_population(city):
    return cities_data_fin[city]["population"]


def get_average_education_index(city):
    return cities_data_fin[city]["average_education_index"]


def get_crime(city):
    return cities_data_fin[city]["crime_index"]


def get_price(city):
    return cities_data_fin[city]["house_median_value"]


def get_employment(city):
    return cities_data_fin[city]["sixteen_plus_employed_percentage"]


def get_edu_norm(city):
    return cities_data_fin[city]["edu_index_norm"]


def get_employed_norm(city):
    return cities_data_fin[city]["employed_percentage_norm"]


def makeArrays():
    global qualityNormalized, safetyNormalized, employabilityNormalized
    for city in cities_data_fin:
        qualityNormalized.append(get_average_education_index(city))
        safetyNormalized.append(get_crime(city))
        employabilityNormalized.append(get_employed_norm(city))
        cityList.append(get_city_name(city))


def get_city(city):
    return city(city, "All Hail Bucky")

@app.route("/filter_data", methods=["POST"])
def filter():
    load_data()
    makeArrays()
    # return jsonify(cities_data_fin)
    # return jsonify(get_employment("Madison"))

    global cityList, qualityNormalized, safetyNormalized, employabilityNormalized

    user_ratings = request.json
    user_employability = user_ratings.get("user_employability")
    user_safety = (user_ratings.get("user_safety"))
    user_quality = (user_ratings.get("user_quality"))
    user_budget = float(user_ratings.get("user_budget"))

    # Filter cities based on user budget
    filtered_cities = [city for city in cities_data_fin.values() if city["house_median_value"] <= user_budget]

    modified_quality = [q * user_quality for q in qualityNormalized]
    modified_safety = [s * user_safety for s in safetyNormalized]
    modified_employability = [e * user_employability for e in employabilityNormalized]

    # Combine modified ratings
    added_rating = [float(q) + float(s) + float(e) for q, s, e in
                    zip(modified_quality, modified_safety, modified_employability)]

    # Sort cities based on modified ratings
    sorted_cities = [city for _, city in sorted(zip(added_rating, filtered_cities), reverse=True)]
    sorted_cities = [city for _, city in
                     sorted(zip(added_rating, filtered_cities), key=lambda x: x[1]["house_median_value"], reverse=True)]

    return jsonify(sorted_cities)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
