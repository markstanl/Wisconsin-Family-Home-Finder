cities_data_fin= {}

def __init__():
    """This function loads the data from 'pokemon_stats.csv' and 'type_effectiveness_stats.csv'. This function runs automatically, when the module is imported"""
    import csv
    f = open('../city_education_crime_employment_homeprice.csv', encoding='utf-8')
    raw_pkmn_data = list(csv.reader(f))
    f.close()
    pkmn_header = raw_pkmn_data[0]
    pkmn_header.pop(0)
    raw_pkmn_data = raw_pkmn_data[1:]
    for pkmn_data in raw_pkmn_data:
        pkmn_data.pop(0)
        pkmn = {}
        for i in range(len(pkmn_header)):
            pkmn[pkmn_header[i]] = pkmn_data[i]
        for stat in pkmn:
            #print(stat)
            if stat in ['population', 'average_education_index', 'crime_index,sixteen_plus_employed_percentage',
                        'house_median_value', 'edu_index_norm,employed_percentage_norm']:
                #print(int(pkmn[stat]))
                pkmn[stat] = float(pkmn[stat])
        cities_data_fin[pkmn["city"]] = pkmn

def print_stats(pkmn):
    """print_stats(pkmn) prints all the statistics of the Pokémon with the name 'pkmn' """
    try:
        for stat in cities_data_fin[pkmn]:
            print(stat, ": ", cities_data_fin[pkmn][stat])
    except KeyError:
        print(pkmn, " not found in the file")

__init__()
print_stats("Madison")
