export class KeyValue {
    id: number;
    value: string;

    static map(data: Array<any>, idPropertyName: string, valuePropertyName: string): KeyValue[] {
        const response = data.map((item) => {
            return <KeyValue>{
                id: item[idPropertyName],
                value: item[valuePropertyName]
            };
        });

        return response;
    }

    static mock(): KeyValue[] {
        return <KeyValue[]>[{
            "id": 1,
            "value": "University of the Sunshine Coast"
        }, {
            "id": 2,
            "value": "Kangnam University"
        }, {
            "id": 3,
            "value": "Universidad Piloto de Colombia"
        }, {
            "id": 4,
            "value": "Bryant University"
        }, {
            "id": 5,
            "value": "Research College of Nursing - Rockhurst University"
        }, {
            "id": 6,
            "value": "Universidad Técnica del Norte"
        }, {
            "id": 7,
            "value": "Chowan College"
        }, {
            "id": 8,
            "value": "North Dakota State University"
        }, {
            "id": 9,
            "value": "Gaziantep University"
        }, {
            "id": 10,
            "value": "Istanbul Arel University"
        }, {
            "id": 11,
            "value": "Syrian Virtual University"
        }, {
            "id": 12,
            "value": "Frostburg State University"
        }, {
            "id": 13,
            "value": "Lindsey Wilson College"
        }, {
            "id": 14,
            "value": "Pontifícia Universidade Católica de São Paulo"
        }, {
            "id": 15,
            "value": "Hiroshima Kokusai Gakuin University"
        }, {
            "id": 16,
            "value": "Universidad La Salle Cuernavaca"
        }, {
            "id": 17,
            "value": "Lewis University"
        }, {
            "id": 18,
            "value": "Peace College"
        }, {
            "id": 19,
            "value": "Bharati Vidyapeeth University"
        }, {
            "id": 20,
            "value": "East-West University"
        }, {
            "id": 21,
            "value": "University of the West Indies, Cave Hill"
        }, {
            "id": 22,
            "value": "Redeemer College"
        }, {
            "id": 23,
            "value": "Universidade de Marília"
        }, {
            "id": 24,
            "value": "Alabama State University"
        }, {
            "id": 25,
            "value": "University of Nueva Caceres"
        }, {
            "id": 26,
            "value": "Bahria University"
        }, {
            "id": 27,
            "value": "Southwest Texas State University"
        }, {
            "id": 28,
            "value": "Bryant University"
        }, {
            "id": 29,
            "value": "University of KwaZulu-Natal"
        }, {
            "id": 30,
            "value": "National University of Science and Technology Bulawayo"
        }, {
            "id": 31,
            "value": "Free University Stockholm"
        }, {
            "id": 32,
            "value": "Universidad Autónoma Agraria \"Antonio Narro\""
        }, {
            "id": 33,
            "value": "Albert-Ludwigs-Universität Freiburg"
        }, {
            "id": 34,
            "value": "Centro Universitário Barao de Maua"
        }, {
            "id": 35,
            "value": "Institut National des Sciences Appliquées de Toulouse"
        }, {
            "id": 36,
            "value": "Aston University"
        }, {
            "id": 37,
            "value": "Yugra State University"
        }, {
            "id": 38,
            "value": "Nippon Bunri University"
        }, {
            "id": 39,
            "value": "Nepal Sanskrit University"
        }, {
            "id": 40,
            "value": "L.N. Gumilyov Eurasian National University"
        }, {
            "id": 41,
            "value": "Dhirubhai Ambani Institute of Information and Communication Technology"
        }, {
            "id": 42,
            "value": "Ecole des Hautes Etudes Commerciales"
        }, {
            "id": 43,
            "value": "Universitas Pancasila"
        }, {
            "id": 44,
            "value": "University of South Australia"
        }, {
            "id": 45,
            "value": "Istanbul Technical University"
        }, {
            "id": 46,
            "value": " L.D.College of Engineering"
        }, {
            "id": 47,
            "value": "Takoradi Polytechnic "
        }, {
            "id": 48,
            "value": "First Global University to teaching Jainism"
        }, {
            "id": 49,
            "value": "The Art Institutes International Portland"
        }, {
            "id": 50,
            "value": "North Ossetian State University"
        }, {
            "id": 51,
            "value": "Université Paris Nord (Paris XIII)"
        }, {
            "id": 52,
            "value": "Wollo University"
        }, {
            "id": 53,
            "value": "Gyeongsang National University"
        }, {
            "id": 54,
            "value": "University of Mary Hardin-Baylor"
        }, {
            "id": 55,
            "value": "Ho Chi Minh City University of Social Sciences and Humanities"
        }, {
            "id": 56,
            "value": "Svey Reong University"
        }, {
            "id": 57,
            "value": "Stie Perbanas Surabaya"
        }, {
            "id": 58,
            "value": "Masinde Muliro University of Science and Technology"
        }, {
            "id": 59,
            "value": "Islamic Azad University, Tabriz"
        }, {
            "id": 60,
            "value": "Czech University of Agriculture Prague"
        }, {
            "id": 61,
            "value": "Ecole Nationale Supérieure d'Agronomie de Rennes"
        }, {
            "id": 62,
            "value": "Kampala International University"
        }, {
            "id": 63,
            "value": "The Curtis Institute of Music"
        }, {
            "id": 64,
            "value": "Universidade Gregorio Semedo"
        }, {
            "id": 65,
            "value": "Universidad San Francisco Xavier"
        }, {
            "id": 66,
            "value": "Sabzevar School of Medical Sciences"
        }, {
            "id": 67,
            "value": "College of St. Rose"
        }, {
            "id": 68,
            "value": "Texas Tech University"
        }, {
            "id": 69,
            "value": "Johnson C. Smith University"
        }, {
            "id": 70,
            "value": "University of Southeastern Philippines"
        }, {
            "id": 71,
            "value": "Universitas Kristen Indonesia Tomohon"
        }, {
            "id": 72,
            "value": "Fukuoka Dental College"
        }, {
            "id": 73,
            "value": "Olive-Harvey College"
        }, {
            "id": 74,
            "value": "Fachhochschule Westküste, Hochschule für Wirtschaft und Technik"
        }, {
            "id": 75,
            "value": "Indian School of Mines (ISM)"
        }, {
            "id": 76,
            "value": "Open Polytechnic "
        }, {
            "id": 77,
            "value": "Universidad de Antioquía"
        }, {
            "id": 78,
            "value": "Fukuoka Institute of Technology"
        }, {
            "id": 79,
            "value": "Hefei University of Technology"
        }, {
            "id": 80,
            "value": "Shimonoseki City University"
        }, {
            "id": 81,
            "value": "Victoria International University"
        }, {
            "id": 82,
            "value": "Qinghai Radio & Television University"
        }, {
            "id": 83,
            "value": "Westfield State College"
        }, {
            "id": 84,
            "value": "Dalhousie University"
        }, {
            "id": 85,
            "value": "North Greenville College"
        }, {
            "id": 86,
            "value": "Ternopil Academy of National Economy"
        }, {
            "id": 87,
            "value": "École Nationale Supérieure d'Ingénieurs de Constructions Aéronautiques"
        }, {
            "id": 88,
            "value": "Purdue University"
        }, {
            "id": 89,
            "value": "Florida Agricultural and Mechanical University"
        }, {
            "id": 90,
            "value": "Private Universität für Medizinische Informatik und Technik Tirol"
        }, {
            "id": 91,
            "value": "Marietta College"
        }, {
            "id": 92,
            "value": "Universidad de Iberoamérica"
        }, {
            "id": 93,
            "value": "The Interdisciplinary Center Herzliya"
        }, {
            "id": 94,
            "value": "Universidad de Medellín"
        }, {
            "id": 95,
            "value": "Sindh Madressatul Islam University"
        }, {
            "id": 96,
            "value": "Linguistic University of Nizhny Novgorod"
        }, {
            "id": 97,
            "value": "John Brown University"
        }, {
            "id": 98,
            "value": "Roehampton University of Surrey"
        }, {
            "id": 99,
            "value": "Nara Medical University"
        }, {
            "id": 100,
            "value": "Saint Louis College"
        }];
    }
}