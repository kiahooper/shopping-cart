const shopItems = [
        {
            id: 0,
            name: 'Boonie Hat',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/hat_1_black.jpg`,
                    stock: {"Size 1": 5, "Size 2": 1},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/hat_1_green.jpg`,
                    stock: {"Size 1": 0, "Size 2": 3},
                },
            },
            price: 50,
            info: "Amet officia pariatur do occaecat.",
            category: "accessories",
        },
        {
            id: 1,
            name: 'Bucket Hat',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/hat_2_black.jpg`,
                    stock: {"Size 1": 0, "Size 2": 2},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/hat_2_green.jpg`,
                    stock: {"Size 1": 2, "Size 2": 3},
                },
                "white": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/hat_2_white.jpg`,
                    stock: {"Size 1": 3, "Size 2": 5},
                },
            },
            price: 50,
            info: "Amet officia pariatur do occaecat.",
            category: "accessories",
        },
        {
            id: 2,
            name: 'Long Jacket',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_1_black.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 2, "L": 4, "XL": 3},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_1_green.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "white": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_1_white.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "yellow": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_1_yellow.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 2, "L": 4, "XL": 0},
                },
            },
            price: 180,
            info: "Amet officia pariatur do occaecat.",
            category: "mens",
        },
        {
            id: 3,
            name: 'Jacket',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_2_black.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 0, "L": 4, "XL": 3},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_2_green.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "white": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_2_white.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "yellow": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_2_yellow.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 2, "L": 4, "XL": 3},
                },
            },
            price: 160,
            info: "Amet officia pariatur do occaecat.",
            category: "mens",
        },
        {
            id: 4,
            name: 'Short Hooded Coat',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_3_black.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_3_green.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "blue": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_3_blue.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 0, "XL": 3},
                },
                "yellow": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_3_yellow.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 0, "L": 4, "XL": 3},
                },
            },
            price: 180,
            info: "Amet officia pariatur do occaecat.",
            category: "mens",
        },        
        {
            id: 5,
            name: 'Long Jacket',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_pants_black.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 0, "L": 0, "XL": 3},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_pants_green.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "blue": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_pants_blue.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 2, "L": 4, "XL": 3},
                },
                "yellow": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/mens_1_yellow.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
            },
            price: 140,
            info: "Amet officia pariatur do occaecat.",
            category: "mens",
        },
        {
            id: 6,
            name: 'Long Jacket',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_1_black.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 2, "L": 0, "XL": 3},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_1_green.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "white": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_1_white.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 2, "L": 4, "XL": 3},
                },
                "yellow": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_1_yellow.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 2, "L": 0, "XL": 3},
                },
            },
            price: 180,
            info: "Amet officia pariatur do occaecat.",
            category: "womens",
        },
        {
            id: 7,
            name: 'Jacket',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_2_black.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 2, "L": 4, "XL": 3},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_2_green.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "white": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_2_white.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 2, "L": 4, "XL": 3},
                },
                "yellow": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_2_yellow.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 0, "L": 4, "XL": 3},
                },
            },
            price: 160,
            info: "Amet officia pariatur do occaecat.",
            category: "womens",
        },
        {
            id: 8,
            name: 'Storm Breaker',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_3_black.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_3_green.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 0, "L": 4, "XL": 3},
                },                
                "blue": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_3_blue.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 0, "L": 4, "XL": 3},
                },
                "white": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_3_white.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 2, "L": 0, "XL": 3},
                },
            },
            price: 180,
            info: "Amet officia pariatur do occaecat.",
            category: "womens",
        },
        {
            id: 9,
            name: 'Pants',
            colors: {
                "black": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_pants_black.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 0, "XL": 3},
                },
                "green": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_pants_green.jpg`,
                    stock: {"XS": 2, "S": 0, "M": 2, "L": 4, "XL": 3},
                },                
                "white": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_pants_white.jpg`,
                    stock: {"XS": 0, "S": 3, "M": 2, "L": 4, "XL": 3},
                },
                "yellow": {
                    src: `${process.env.PUBLIC_URL}/assets/images/shopItems/womens_pants_yellow.jpg`,
                    stock: {"XS": 2, "S": 3, "M": 0, "L": 4, "XL": 3},
                },

            },
            price: 140,
            info: "Amet officia pariatur do occaecat.",
            category: "womens",
        },
        ]

export default shopItems;