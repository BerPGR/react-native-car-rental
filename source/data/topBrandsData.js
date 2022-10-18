const topBrandsData = [
    {
        id: 'brand-1',
        brand: 'Mercedes',
        image: require('../images/Mercedes-Logo.svg'),
        cars: [
            {
                brand: 'Mercedes',
                model: 'E-Class AMG',
                type: 'Sedan',
                condition: 'New',
                year: 2021,
                mileage: 0,
                price: 90.000,
                rating: 5,
                image: require('../images/carstobuy/e-classamg.png')
            },
            {
                brand: 'Mercedes',
                model: 'GLS 450',
                type: 'SUV',
                condition: 'New',
                year: 2022,
                mileage: 3.420,
                price: 93.700,
                rating: 5,
                image: require('../images/carstobuy/gls.png')
            },
            {
                brand: 'Mercedes',
                model: 'EQS 580',
                type: 'Sedan',
                condition: 'New',
                year: 2023,
                mileage: 0,
                price: 168.435,
                rating: 5,
                image: require('../images/carstobuy/eqs.png')
            },
            {
                brand: 'Mercedes',
                model: 'AMG GT',
                type: 'Coupe',
                condition: 'New',
                year: 2022,
                mileage: 12.000,
                price: 107.450,
                rating: 5,
                image: require('../images/carstobuy/amggt.png')
            },
        ]
    },
    {
        id: 'brand-2',
        brand: 'Jaguar',
        image: require('../images/Jaguar-Logo.png'),
        cars: [
            {
                brand: 'Jaguar',
                model: 'XF R-Sport',
                type: 'Sport',
                condition: 'Used',
                year: 2017,
                mileage: 32.945,
                price: 29.500,
                rating: 5,
                image: require('../images/carstobuy/xfrsport.png')
            },
            {
                brand: 'Jaguar',
                model: 'F-TYPE R',
                type: 'Sedan',
                condition: 'Used',
                year: 2019,
                mileage: 14.312,
                price: 110.567,
                rating: 5,
                image: require('../images/carstobuy/ftyper.png')
            },
            {
                brand: 'Jaguar',
                model: 'F-TYPE P450',
                type: 'Coupe',
                condition: 'New',
                year: 2023,
                mileage: 2.300,
                price: 82.320,
                rating: 5,
                image: require('../images/carstobuy/p450.png')
            },
            {
                brand: 'Jaguar',
                model: 'F-PACE S',
                type: 'SUV',
                condition: 'New',
                year: 2022,
                mileage: 2.800,
                price: 60.000,
                rating: 5,
                image: require('../images/carstobuy/fpace.png')
            },
        ]
    },
    {
        id: 'brand-3',
        brand: 'BMW',
        image: require('../images/bmw.png'),
        cars: [
            {
                brand: 'BMW',
                model: 'X5 M',
                type: 'SUV',
                condition: 'New',
                year: 2022,
                mileage: 2000,
                price: 122.705,
                rating: 5,
                image: require('../images/carstobuy/x5m.png')
            },
            {
                brand: 'BMW',
                model: 'X7',
                type: 'SUV',
                condition: 'Used',
                year: 2021,
                mileage: 19.500,
                price: 64.000,
                rating: 5,
                image: require('../images/carstobuy/x7.png')
            },
            {
                brand: 'BMW',
                model: 'M4 Base',
                type: 'Coupe',
                condition: 'New',
                year: 2023,
                mileage: 0,
                price: 82.000,
                rating: 5,
                image: require('../images/carstobuy/m4.png')
            },
            {
                brand: 'BMW',
                model: 'M550',
                type: 'Sedan',
                condition: 'New',
                year: 2023,
                mileage: 0,
                price: 86.745,
                rating: 5,
                image: require('../images/carstobuy/m550.png')
            },
        ]
    },
    {
        id: 'brand-4',
        brand: 'Audi',
        image: require('../images/audi.png'),
        cars: [
            {
                brand: 'Audi',
                model: 'TT RS',
                type: 'Coupe',
                condition: 'Used',
                year: 2020,
                mileage: 15.000,
                price: 45.000,
                rating: 5,
                image: require('../images/carstobuy/audittcoupe.png')
            },
            {
                brand: 'Audi',
                model: 'RS6',
                type: 'Hatch',
                condition: 'Used',
                year: 2020,
                mileage: 23.000,
                price: 35.000,
                rating: 5,
                image: require('../images/carstobuy/RS6.png')
            },
            {
                brand: 'Audi',
                model: 'A3',
                type: 'Hatch',
                condition: 'Used',
                year: 2027,
                mileage: 48.000,
                price: 22.163,
                rating: 5,
                image: require('../images/carstobuy/a3.png')
            },
            {
                brand: 'Audi',
                model: 'A1',
                type: 'Hatch',
                condition: 'Used',
                year: 2013,
                mileage: 74.000,
                price: 17.000,
                rating: 5,
                image: require('../images/carstobuy/a1.png')
            },
        ]
    },
    {
        id: 'brand-5',
        brand: 'Dodge',
        image: require('../images/dodge.png'),
        cars: [
            {
                brand: 'Dodge',
                model: 'Challenger SXT',
                type: 'Muscle',
                condition: 'Used',
                year: 2021,
                mileage: 16.000,
                price: 30.000,
                rating: 5,
                image: require('../images/carstobuy/sxt.png')
            },
            {
                brand: 'Dodge',
                model: 'Durango SRT',
                type: 'SUV',
                condition: 'New',
                year: 2022,
                mileage: 4.000,
                price: 75.382,
                rating: 5,
                image: require('../images/carstobuy/durango.png')
            },
            {
                brand: 'Dodge',
                model: 'Hellcat',
                type: 'Muscle',
                condition: 'New',
                year: 2022,
                mileage: 0,
                price: 99.580,
                rating: 5,
                image: require('../images/carstobuy/hellcat.png')
            },
            {
                brand: 'Dodge',
                model: 'Charger',
                type: 'Muscle',
                condition: 'new',
                year: 2022,
                mileage: 7.4220,
                price: 54.000,
                rating: 5,
                image: require('../images/carstobuy/charger.png')
            },
        ]
    }
]

export default topBrandsData