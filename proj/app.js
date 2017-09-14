var baseImageURL = 'http://images.trvl-media.com';
// prepend this to any image URL in the data.

function initMap() {
  var uluru = {lat: 37.925345, lng: -122.37899};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: uluru
  });

  hotelData.forEach( function(hotel) {
    var hotelLat = hotel['latLong']['latitude'];
    var hotelLng = hotel['latLong']['longitude'];
    let marker = new google.maps.Marker({
      position: {lat: hotelLat, lng: hotelLng},
      map: map
    });
    var detail = document.createElement("div");
   detail.innerHTML = hotel['propertyName'];
   document.lastChild.appendChild(detail);
   });
}

  /*
hotelData.forEach( function(hotel) {
  console.log(hotel[latLng][latitude])

  let hotelLat = hotel[latLng][latitude]
  let hotelLng = hotel[latLng][longitude]
  let marker = new google.maps.Marker({
    position: {lat: hotelLat, lng: hotelLng},
    map: map
  })

 });
  */



/*****************************************/
/***** DO NOT SCROLL DOWN PAST THIS. *****/
/*****************************************/

// THE FOLLOWING IS JUST A HUGE VARIABLE DECLARATION FOR THE HOTEL DATA

// THE hotelData VARIABLE BELOW IS AN *ARRAY* OF JSONs WITH THE FOLLOWING
// SCHEMA:

/*
{
  "id": "1234",
  "propertyName": "Hotel Foo", // <-- IMPORTANT!
  "star": 3, // <-- IMPORTANT!
  "price": "$100", // <-- IMPORTANT!
  "unavailableStatus": ["NO_INVENTORY_AVAILABLE"], // ONLY IF UNAVAILABLE
  "paymentChoice": false,
  "freeCancel": false,
  "score": 4,
  "rank": 2,
  "regionId" 5000,
  "neighborhood": 6000,
  "latLong": {
      "latitude": 37.925345, // <-- IMPORTANT!
      "longitude": -122.37899 // <-- IMPORTANT!
  },
  "structureType": "HOTEL",
  "image": {
      "small": "/hotels/1/430000/426203_34_t.jpg", // <-- IMPORTANT!
      "large": "/hotels/1/4/5151_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
  },
  "vip": false,
  "supplemental": false
}
*/

const hotelData = [
  {
    "id": "426203",
    "propertyName": "Marina Bay Inn and Suites",
    "star": 2,
    "price": "$90",
    "unavailableStatus": [
      "NO_INVENTORY_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 6137,
    "neighborhood": 6056135,
    "latLong": {
      "latitude": 37.925345,
      "longitude": -122.37899
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/430000/426300/426203/426203_34_t.jpg",
      "large": "/hotels/1000000/430000/426300/426203/426203_34_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "11083",
    "propertyName": "La Quinta Inn Berkeley",
    "star": 3,
    "price": "$309",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "201909472",
    "ratePlan": "209633746",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.868271,
      "longitude": -122.295969
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/20000/11100/11083/83123422_t.jpg",
      "large": "/hotels/1000000/20000/11100/11083/83123422_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 5
  },
  {
    "id": "438136",
    "propertyName": "Hotel Shattuck Plaza",
    "star": 4,
    "price": "$361",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "27698",
    "ratePlan": "209161497",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.869302,
      "longitude": -122.268439
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/440000/438200/438136/438136_56_t.jpg",
      "large": "/hotels/1000000/440000/438200/438136/438136_56_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": true,
    "supplemental": false
  },
  {
    "id": "7609",
    "propertyName": "Lafayette Park Hotel & Spa",
    "star": 4,
    "price": "$242",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "201813630",
    "ratePlan": "209215948",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 6145,
    "latLong": {
      "latitude": 37.896597,
      "longitude": -122.101166
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/10000/7700/7609/15a42e5d_t.jpg",
      "large": "/hotels/1000000/10000/7700/7609/15a42e5d_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "60226",
    "propertyName": "The Lodge at Tiburon",
    "star": 3.5,
    "price": "$209",
    "unavailableStatus": [
      "HOTEL_HAS_NO_ROOMS_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 7298,
    "latLong": {
      "latitude": 37.87433,
      "longitude": -122.45703
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/70000/60300/60226/11c98fb8_t.jpg",
      "large": "/hotels/1000000/70000/60300/60226/11c98fb8_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": true,
    "supplemental": false
  },
  {
    "id": "11726",
    "propertyName": "Best Western Corte Madera Inn",
    "star": 3,
    "price": "$179",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200983314",
    "ratePlan": "206191686",
    "dynamicRateRule": {
      "description": "Sale!",
      "expirationSeconds": 48662753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 7668,
    "neighborhood": 6338731,
    "latLong": {
      "latitude": 37.92893,
      "longitude": -122.51864
    },
    "structureType": "HOTEL_RESORT",
    "image": {
      "small": "/hotels/1000000/20000/11800/11726/11726_236_t.jpg",
      "large": "/hotels/1000000/20000/11800/11726/11726_236_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "10432",
    "propertyName": "Travelodge Mill Valley/Sausalito",
    "star": 2,
    "price": "$109",
    "unavailableStatus": [
      "CHECK_IN_NOT_ALLOWED"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8630,
    "neighborhood": 6056163,
    "latLong": {
      "latitude": 37.893313,
      "longitude": -122.516758
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/20000/10500/10432/10432_124_t.jpg",
      "large": "/hotels/1000000/20000/10500/10432/10432_124_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "67820",
    "propertyName": "Extended Stay America Pleasant Hill",
    "star": 2.5,
    "price": "$157",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "217533",
    "ratePlan": "202473928",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 9131,
    "neighborhood": 6056139,
    "latLong": {
      "latitude": 37.934219,
      "longitude": -122.05954
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/70000/67900/67820/67820_42_t.jpg",
      "large": "/hotels/1000000/70000/67900/67820/67820_42_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "1606984",
    "propertyName": "Extended Stay America San Rafael - Francisco Boulevard East",
    "star": 2.5,
    "price": "$140",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "205554",
    "ratePlan": "202474041",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 9924,
    "neighborhood": 6056166,
    "latLong": {
      "latitude": 37.94922,
      "longitude": -122.49359
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/2000000/1610000/1607000/1606984/1606984_67_t.jpg",
      "large": "/hotels/2000000/1610000/1607000/1606984/1606984_67_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "2156292",
    "propertyName": "Super 8 Berkeley",
    "star": 2.5,
    "price": "$253",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "390864",
    "ratePlan": "1323197",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.870869,
      "longitude": -122.278896
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/3000000/2160000/2156300/2156292/b7103c95_t.jpg",
      "large": "/hotels/3000000/2160000/2156300/2156292/b7103c95_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "522598",
    "propertyName": "Americas Best Value Inn Golden Bear Inn",
    "star": 2,
    "price": "$122",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200383321",
    "ratePlan": "210429039",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.87483,
      "longitude": -122.294049
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/530000/522600/522598/2eb5b06e_t.jpg",
      "large": "/hotels/1000000/530000/522600/522598/2eb5b06e_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "444532",
    "propertyName": "Graduate Berkeley",
    "star": 3.5,
    "price": "$0",
    "unavailableStatus": [
      "PARTIAL_INVENTORY_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.868142,
      "longitude": -122.256407
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/450000/444600/444532/a15614ed_t.jpg",
      "large": "/hotels/1000000/450000/444600/444532/a15614ed_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "517410",
    "propertyName": "Hotel Mira Vista",
    "star": 2,
    "price": "$149",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200796126",
    "ratePlan": "203937788",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 7824,
    "neighborhood": 6056133,
    "latLong": {
      "latitude": 37.920852,
      "longitude": -122.316681
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/520000/517500/517410/517410_77_t.jpg",
      "large": "/hotels/1000000/520000/517500/517410/517410_77_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 3
  },
  {
    "id": "1146383",
    "propertyName": "Americas Best Value Inn & Suites - Mill Valley/San Francisco",
    "star": 1.5,
    "price": "$179",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200383585",
    "ratePlan": "210401751",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8630,
    "neighborhood": 6056163,
    "latLong": {
      "latitude": 37.88088,
      "longitude": -122.51932
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/2000000/1150000/1146400/1146383/1146383_58_t.jpg",
      "large": "/hotels/2000000/1150000/1146400/1146383/1146383_58_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "9227502",
    "propertyName": "Marina Inn",
    "star": 2,
    "price": "$0",
    "unavailableStatus": [
      "HOTEL_HAS_NO_ROOMS_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.868535,
      "longitude": -122.294899
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/10000000/9230000/9227600/9227502/9227502_6_t.jpg",
      "large": "/hotels/10000000/9230000/9227600/9227502/9227502_6_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "50581",
    "propertyName": "Motel 6 Walnut Creek",
    "star": 2,
    "price": "$105",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200623855",
    "ratePlan": "203026882",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 7538,
    "neighborhood": 6056176,
    "latLong": {
      "latitude": 37.913629,
      "longitude": -122.065632
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/60000/50600/50581/be57b942_t.jpg",
      "large": "/hotels/1000000/60000/50600/50581/be57b942_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 2
  },
  {
    "id": "855749",
    "propertyName": "Americas Best Value Inn-Richmond/San Francisco",
    "star": 2,
    "price": "$0",
    "unavailableStatus": [
      "NO_INVENTORY_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 6137,
    "neighborhood": 6056135,
    "latLong": {
      "latitude": 37.91045,
      "longitude": -122.3163
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/860000/855800/855749/855749_59_t.jpg",
      "large": "/hotels/1000000/860000/855800/855749/855749_59_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "26075",
    "propertyName": "Berkeley Travelodge",
    "star": 2,
    "price": "$313",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "68102",
    "ratePlan": "154804",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.871333,
      "longitude": -122.274333
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/30000/26100/26075/26075_113_t.jpg",
      "large": "/hotels/1000000/30000/26100/26075/26075_113_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 2
  },
  {
    "id": "1105083",
    "propertyName": "Berkeley Inn",
    "star": 1.5,
    "price": "$99",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "45549",
    "ratePlan": "102852",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "fees": [
      {
        "id": 2652,
        "price": 1.13,
        "included": false
      }
    ],
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.8728,
      "longitude": -122.293389
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/2000000/1110000/1105100/1105083/1105083_14_t.jpg",
      "large": "/hotels/2000000/1110000/1105100/1105083/1105083_14_y.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "41606",
    "propertyName": "Best Western Brentwood Inn",
    "star": 2.5,
    "price": "$139",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "201555282",
    "ratePlan": "207836412",
    "dynamicRateRule": {
      "description": "Sale!",
      "expirationSeconds": 21619553,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 7025,
    "latLong": {
      "latitude": 37.92381,
      "longitude": -121.688175
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/50000/41700/41606/acfb6761_t.jpg",
      "large": "/hotels/1000000/50000/41700/41606/acfb6761_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 2
  },
  {
    "id": "1505",
    "propertyName": "Marin Suites Hotel",
    "star": 2.5,
    "price": "$179",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "201629819",
    "ratePlan": "208151050",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 7668,
    "neighborhood": 6338731,
    "latLong": {
      "latitude": 37.93233,
      "longitude": -122.51807
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/10000/1600/1505/1505_71_t.jpg",
      "large": "/hotels/1000000/10000/1600/1505/1505_71_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "2595",
    "propertyName": "Howard Johnson Stockton",
    "star": 2,
    "price": "$61",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200298718",
    "ratePlan": "201790939",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 9832,
    "neighborhood": 6055500,
    "latLong": {
      "latitude": 37.95281,
      "longitude": -121.29114
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/10000/2600/2595/2595_68_t.jpg",
      "large": "/hotels/1000000/10000/2600/2595/2595_68_l.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "15989366",
    "propertyName": "Acqua Hotel",
    "star": 3,
    "price": "$0",
    "unavailableStatus": [
      "HOTEL_HAS_NO_ROOMS_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8630,
    "neighborhood": 6056163,
    "latLong": {
      "latitude": 37.88723,
      "longitude": -122.517223
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/16000000/15990000/15989400/15989366/39d1cd2c_t.jpg",
      "large": "/hotels/16000000/15990000/15989400/15989366/39d1cd2c_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "1175858",
    "propertyName": "Berkeley City Club",
    "star": 2.5,
    "price": "$405",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200901940",
    "ratePlan": "204569042",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.867343,
      "longitude": -122.262729
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/2000000/1180000/1175900/1175858/d755f910_t.jpg",
      "large": "/hotels/2000000/1180000/1175900/1175858/d755f910_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 6
  },
  {
    "id": "998971",
    "propertyName": "Motel 6 Stockton - Charter Way West",
    "star": 0,
    "price": "$77",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200633700",
    "ratePlan": "203045953",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 9832,
    "neighborhood": 6055500,
    "latLong": {
      "latitude": 37.93685,
      "longitude": -121.29989
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/1000000/999000/998971/998971_32_t.jpg",
      "large": "/hotels/1000000/1000000/999000/998971/998971_32_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "17267",
    "propertyName": "Days Inn Concord",
    "star": 2.5,
    "price": "$0",
    "unavailableStatus": [
      "CHECK_IN_NOT_ALLOWED"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 6576,
    "neighborhood": 6056137,
    "latLong": {
      "latitude": 37.952565,
      "longitude": -121.958856
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/20000/17300/17267/9706933b_t.jpg",
      "large": "/hotels/1000000/20000/17300/17267/9706933b_l.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "1144479",
    "propertyName": "Diablo Mountain Inn",
    "star": 2,
    "price": "$153",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "201763114",
    "ratePlan": "208796037",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 7538,
    "neighborhood": 6056176,
    "latLong": {
      "latitude": 37.896554,
      "longitude": -122.069481
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/2000000/1150000/1144500/1144479/58c156ec_t.jpg",
      "large": "/hotels/2000000/1150000/1144500/1144479/58c156ec_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "8638",
    "propertyName": "Americas Best Value Inn-Corte Madera/San Francisco",
    "star": 1.5,
    "price": "$125",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200383659",
    "ratePlan": "210400752",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 7668,
    "neighborhood": 6338731,
    "latLong": {
      "latitude": 37.92319,
      "longitude": -122.51351
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/10000/8700/8638/8638_42_t.jpg",
      "large": "/hotels/1000000/10000/8700/8638/8638_42_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "23800",
    "propertyName": "DoubleTree by Hilton Berkeley Marina",
    "star": 3.5,
    "price": "$0",
    "unavailableStatus": [
      "CHECK_IN_NOT_ALLOWED"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.868972,
      "longitude": -122.313304
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/30000/23800/23800/4636fb5c_t.jpg",
      "large": "/hotels/1000000/30000/23800/23800/4636fb5c_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "15964555",
    "propertyName": "Mill Valley Inn",
    "star": 3,
    "price": "$0",
    "unavailableStatus": [
      "HOTEL_HAS_NO_ROOMS_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8630,
    "neighborhood": 6056163,
    "latLong": {
      "latitude": 37.90529,
      "longitude": -122.5491
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/16000000/15970000/15964600/15964555/143da34f_t.jpg",
      "large": "/hotels/16000000/15970000/15964600/15964555/143da34f_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "2750",
    "propertyName": "Embassy Suites by Hilton Walnut Creek",
    "star": 3.5,
    "price": "$0",
    "unavailableStatus": [
      "CHECK_IN_NOT_ALLOWED"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 7538,
    "neighborhood": 6056176,
    "latLong": {
      "latitude": 37.927555,
      "longitude": -122.057341
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/10000/2800/2750/0fe6e870_t.jpg",
      "large": "/hotels/1000000/10000/2800/2750/0fe6e870_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "5455898",
    "propertyName": "Knights Inn Berkeley CA",
    "star": 2,
    "price": "$246",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200833540",
    "ratePlan": "204205827",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.870451,
      "longitude": -122.281251
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/6000000/5460000/5455900/5455898/fc07bf0e_t.jpg",
      "large": "/hotels/6000000/5460000/5455900/5455898/fc07bf0e_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 4
  },
  {
    "id": "10878",
    "propertyName": "Walnut Creek Marriott",
    "star": 3.5,
    "price": "$200",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "31464",
    "ratePlan": "1887867",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 7538,
    "neighborhood": 6056176,
    "latLong": {
      "latitude": 37.911834,
      "longitude": -122.066041
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/20000/10900/10878/444fa645_t.jpg",
      "large": "/hotels/1000000/20000/10900/10878/444fa645_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 5
  },
  {
    "id": "15127149",
    "propertyName": "Sens Hotel & Vanne Bistro Berkeley",
    "star": 2.5,
    "price": "$0",
    "unavailableStatus": [
      "HOTEL_HAS_NO_ROOMS_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.879362,
      "longitude": -122.269217
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/16000000/15130000/15127200/15127149/91c174c4_t.jpg",
      "large": "/hotels/16000000/15130000/15127200/15127149/91c174c4_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "16552",
    "propertyName": "Holiday Inn Express Mill Valley San Francisco Area",
    "star": 3,
    "price": "$212",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200248130",
    "ratePlan": "201445083",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8630,
    "neighborhood": 6056163,
    "latLong": {
      "latitude": 37.88088,
      "longitude": -122.51933
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/20000/16600/16552/61aa631a_t.jpg",
      "large": "/hotels/1000000/20000/16600/16552/61aa631a_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "13279632",
    "propertyName": "Tamalpais Motel",
    "star": 2,
    "price": "$179",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "202100885",
    "ratePlan": "210772786",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8630,
    "neighborhood": 6056163,
    "latLong": {
      "latitude": 37.89248,
      "longitude": -122.5159
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/14000000/13280000/13279700/13279632/c0e85851_t.jpg",
      "large": "/hotels/14000000/13280000/13279700/13279632/c0e85851_y.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 2
  },
  {
    "id": "890952",
    "propertyName": "HYATT house Pleasant Hill",
    "star": 3,
    "price": "$197",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "200312209",
    "ratePlan": "201891701",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 9131,
    "neighborhood": 6056139,
    "latLong": {
      "latitude": 37.942371,
      "longitude": -122.060578
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/900000/891000/890952/63f85e83_t.jpg",
      "large": "/hotels/1000000/900000/891000/890952/63f85e83_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "21172",
    "propertyName": "Holiday Inn Express Walnut Creek",
    "star": 3,
    "price": "$167",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "274985",
    "ratePlan": "793500",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 7538,
    "neighborhood": 6056176,
    "latLong": {
      "latitude": 37.923252,
      "longitude": -122.063577
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/30000/21200/21172/f1e0944e_t.jpg",
      "large": "/hotels/1000000/30000/21200/21172/f1e0944e_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "16024772",
    "propertyName": "Easton Hall",
    "star": 2.5,
    "price": "$0",
    "unavailableStatus": [
      "PARTIAL_INVENTORY_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.87629,
      "longitude": -122.26201
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/17000000/16030000/16024800/16024772/6423a2d3_t.jpg",
      "large": "/hotels/17000000/16030000/16024800/16024772/6423a2d3_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "15964526",
    "propertyName": "Waters Edge Hotel",
    "star": 3.5,
    "price": "$0",
    "unavailableStatus": [
      "HOTEL_HAS_NO_ROOMS_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 7298,
    "latLong": {
      "latitude": 37.87296,
      "longitude": -122.45631
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/16000000/15970000/15964600/15964526/99998b51_t.jpg",
      "large": "/hotels/16000000/15970000/15964600/15964526/99998b51_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "41614",
    "propertyName": "Rodeway Inn Berkeley",
    "star": 2,
    "price": "$224",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "467115",
    "ratePlan": "205857836",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.870299,
      "longitude": -122.28328
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/50000/41700/41614/032fb4be_t.jpg",
      "large": "/hotels/1000000/50000/41700/41614/032fb4be_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "20191",
    "propertyName": "Courtyard San Francisco Larkspur Landing/Marin County",
    "star": 3,
    "price": "$270",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "30643",
    "ratePlan": "80257",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 8540,
    "latLong": {
      "latitude": 37.94774,
      "longitude": -122.50803
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/30000/20200/20191/2b366224_t.jpg",
      "large": "/hotels/1000000/30000/20200/20191/2b366224_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 5
  },
  {
    "id": "1769647",
    "propertyName": "Quality Inn University",
    "star": 2.5,
    "price": "$159",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "496105",
    "ratePlan": "206032660",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.87123,
      "longitude": -122.27615
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/2000000/1770000/1769700/1769647/1769647_39_t.jpg",
      "large": "/hotels/2000000/1770000/1769700/1769647/1769647_39_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "64157",
    "propertyName": "Courtyard by Marriott Pleasant Hill",
    "star": 3,
    "price": "$199",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "38287",
    "ratePlan": "84777",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 9131,
    "neighborhood": 6056139,
    "latLong": {
      "latitude": 37.946158,
      "longitude": -122.060194
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/70000/64200/64157/1771f896_t.jpg",
      "large": "/hotels/1000000/70000/64200/64157/1771f896_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 5
  },
  {
    "id": "471322",
    "propertyName": "Holiday Inn Express Hotel & Suites Berkeley",
    "star": 2.5,
    "price": "$272",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "274270",
    "ratePlan": "790417",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.869403,
      "longitude": -122.290332
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/480000/471400/471322/471322_120_t.jpg",
      "large": "/hotels/1000000/480000/471400/471322/471322_120_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "5581",
    "propertyName": "Studio 6 Concord",
    "star": 2,
    "price": "$0",
    "unavailableStatus": [
      "HOTEL_HAS_NO_ROOMS_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 6576,
    "neighborhood": 6056137,
    "latLong": {
      "latitude": 37.95111,
      "longitude": -122.04654
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/10000/5600/5581/1f86c475_t.jpg",
      "large": "/hotels/1000000/10000/5600/5581/1f86c475_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "9297074",
    "propertyName": "Oakwood At Avalon Walnut Crk",
    "star": 0,
    "price": "$0",
    "unavailableStatus": [
      "ROOMS_UNAVAILABLE_FOR_SELECTED_DATES"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 7538,
    "neighborhood": 6056176,
    "latLong": {
      "latitude": 37.927729,
      "longitude": -122.055739
    },
    "structureType": "HOTEL",
    "vip": false,
    "supplemental": false
  },
  {
    "id": "2134980",
    "propertyName": "Hampton Inn Brentwood",
    "star": 2.5,
    "price": "$0",
    "unavailableStatus": [
      "PARTIAL_INVENTORY_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 7025,
    "latLong": {
      "latitude": 37.945544,
      "longitude": -121.69622
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/3000000/2140000/2135000/2134980/2134980_7_t.jpg",
      "large": "/hotels/3000000/2140000/2135000/2134980/2134980_7_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "40689",
    "propertyName": "American Inn",
    "star": 2,
    "price": "$182",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "201917486",
    "ratePlan": "209669836",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": true,
    "freeCancel": true,
    "score": 0,
    "rank": 0,
    "regionId": 9832,
    "neighborhood": 6055500,
    "latLong": {
      "latitude": 37.93697,
      "longitude": -121.29481
    },
    "structureType": "MOTEL",
    "image": {
      "small": "/hotels/1000000/50000/40700/40689/40689_56_t.jpg",
      "large": "/hotels/1000000/50000/40700/40689/40689_56_l.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 4
  },
  {
    "id": "15581580",
    "propertyName": "Holiday Inn Express & Suites Brentwood",
    "star": 2.5,
    "price": "$147",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "201585762",
    "ratePlan": "207976831",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 7025,
    "latLong": {
      "latitude": 37.922291,
      "longitude": -121.686196
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/16000000/15590000/15581600/15581580/9aac454b_t.jpg",
      "large": "/hotels/16000000/15590000/15581600/15581580/9aac454b_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  },
  {
    "id": "891251",
    "propertyName": "Renaissance Clubsport Walnut Creek Hotel",
    "star": 4,
    "price": "$227",
    "sourceType": "ESR",
    "saleCurrency": "USD",
    "supplyCurrency": "USD",
    "roomType": "20116",
    "ratePlan": "200293606",
    "dynamicRateRule": {
      "description": "",
      "expirationSeconds": 1948166753,
      "sameDay": false,
      "null": false
    },
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 7538,
    "neighborhood": 6056176,
    "latLong": {
      "latitude": 37.924801,
      "longitude": -122.055979
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/1000000/900000/891300/891251/a46de72e_t.jpg",
      "large": "/hotels/1000000/900000/891300/891251/a46de72e_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false,
    "roomsLeft": 5
  },
  {
    "id": "13279218",
    "propertyName": "Nash Hotel",
    "star": 0,
    "price": "$0",
    "unavailableStatus": [
      "HOTEL_HAS_NO_ROOMS_AVAILABLE"
    ],
    "paymentChoice": false,
    "freeCancel": false,
    "score": 0,
    "rank": 0,
    "regionId": 8059,
    "neighborhood": 6056132,
    "latLong": {
      "latitude": 37.87226,
      "longitude": -122.26954
    },
    "structureType": "HOTEL",
    "image": {
      "small": "/hotels/14000000/13280000/13279300/13279218/94b6bf40_t.jpg",
      "large": "/hotels/14000000/13280000/13279300/13279218/94b6bf40_z.jpg",
      "text": "Featured Image",
      "subjectID": 3
    },
    "vip": false,
    "supplemental": false
  }
]
