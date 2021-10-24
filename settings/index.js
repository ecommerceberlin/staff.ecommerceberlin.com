const settings = {
       
    system : {
        use_old_ecommerce_module: 1,
        passwords : {
            'admin': '1751bfe48d5ad21fd9d'
        },
        lang_api_endpoint : 'https://api.eventjuicer.workers.dev/?url=https%3A%2F%2Flocalise.biz%2Fapi%2Fexport%2Fall.json%3Fformat%3Dmulti%26pretty%26key%3DtWMy1RRHuiW6DD9T7AyYtFlQzAeztbBK',
        api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com",
        proxy: "https://api.eventjuicer.workers.dev?url=",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
        service_api : "https://api.eventjuicer.com/v1/services",
    },
   
    bookingmap : {
        height : 2600,
        steps : [
            "choose_booth",
            "confirm",
            "pay",
            "access"
        ],
        allowedGroupIds : [322, 323, 324, 325, 329],
        disabledTicketIds : [1821, 1822, 1819, 1820, 1836],
        boothStyleMapping: {
            322: "light", //STD
            323: "standard", //HOT
            324: "hot", //SUPER HOT
            325: "superHot", //GRAND
            329: "ultra", //PREMIUM GRAND

            328: "stage",
            326: "networking",
            // 321: "boothSold"
        },
        api : "https://order.ecommerceberlin.com/preorder",
       
    },

    ui : {
        menuItems : [
            {
              name: 'report',
              items: [
                {name: 'brandname.list', to: '/?details=0'},
                {name: 'booth.list', to: '/?sort=booth&details=0'},  
                {name: 'brandname.full', to: '/?details=1'},
                {name: 'booth.full', to: '/?sort=booth&details=1'},
                {name: 'map', to: '/map'},
                {name: 'stats', to: '/stats'},
              ]
            },
        ]
    },

   

    common : {

        organizer_name : 'E-commerce Capitals Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, Poznan, Jana Matejki 52/4',
        organizer_regno : 'VAT ID 7792439665',
        event_name : 'E-commerce Berlin Expo',
        event_location : 'STATION Berlin, Luckenwalder Str. 4-6',
        event_date : 'February 2022',
        event_hours : '10:00-17:00',

    },

   

    customer_support : {

    },

    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Lucas',
                position : 'Business Development Manager',
                langs : ["de"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/w_150,c_fit,f_auto/v1546386301/ecommerceberlin_support_lz.jpg',
                phone: '+49 157 7254 7327',
                email: 'hello@ecommerceberlin.com',
                chatlio : true
            },
            {
                name: 'Peter',
                position : 'Project Manager',
                langs : ["en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/w_150,c_fit,f_auto/v1546386405/ecommerceberlin_support_psz.jpg',
                phone: '+49 302 555 98 75',
                email: 'peter@ecommerceberlin.com',
                chatlio : true
            }
          ]
    },

    // schedule : {
    //     times : {
    //         '10:30': 'presentation',
    //         '11:10': 'presentation',
    //         '11:50': 'presentation',
    //         '12:30': 'presentation',
    //         '13:00': 'break_20',
    //         '13:20': 'presentation',
    //         '14:00': 'presentation',
    //         '14:40': 'presentation',
    //         '15:20': 'presentation',
    //         '15:50': 'presentation'
    //       },    
    //       venues : {
    //         A: { company_id: 0 },
    //         B: { company_id: 0 },
    //         C: { company_id: 0 },
    //         D: { company_id: 0 },
    //         E: { company_id: 0 }
    //       },
    //     //   minimized : ["A", "C"],
    //       venueStyle : "gold",
    // },

    footer : {
        primaryStyle: null,
        secondaryStyle: null,
        iconStyle : "black",
        links : []
    },

    appbar : {
        logotype: "https://res.cloudinary.com/eventjuicer/image/upload/h_30,c_fit,f_auto/v1633022810/EBE_WH.png",
        links: [],
    },
 

};


export default settings














