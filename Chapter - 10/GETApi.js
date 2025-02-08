// 1) GET Api Call

let promise = fetch(`https://goweather.herokuapp.com/weather/Ny`);
promise.then((response) => {
    console.log(`Respose Status is :- ${response.status}`)
    console.log(`Respose ok is :- ${response.ok}`)
    console.log(`Respose headers is :- `, response.headers)
    return response.json();                             // Correctly call the json() method
}).then((data) => {
    console.log(`Data Get :- `, data);                  // Properly log the parsed JSON data
}).catch((error) => {
    console.error("Error occurred:", error);            // Handle errors gracefully
});

// Respose Status is :- 200
// Respose ok is :- true
/* Respose headers is :-  HeadersList {
    cookies: null,
    [Symbol(headers map)]: Map(9) {
      'server' => { name: 'Server', value: 'Cowboy' },
      'report-to' => {
        name: 'Report-To',
        value: '{"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1737896187&sid=67ff5de4-ad2b-4112-9289-cf96be
  89efed&s=5khDErVvk0IQhRexrLrY%2B5rI6rOZ1DECcoxuYiqJbbg%3D"}]}'
      },
      'reporting-endpoints' => {
        name: 'Reporting-Endpoints',
        value: 'heroku-nel=https://nel.heroku.com/reports?ts=1737896187&sid=67ff5de4-ad2b-4112-9289-cf96be89efed&s=5khDErVvk0IQhRexrLrY%2B5rI6rOZ1DECcoxu
  YiqJbbg%3D'
      },
      'nel' => {
        name: 'Nel',
        value: '{"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}'
      },
      'connection' => { name: 'Connection', value: 'keep-alive' },
      'content-type' => { name: 'Content-Type', value: 'application/json' },
      'date' => { name: 'Date', value: 'Sun, 26 Jan 2025 12:56:28 GMT' },
      'content-length' => { name: 'Content-Length', value: '240' },
      'via' => { name: 'Via', value: '1.1 vegur' }
    },
    [Symbol(headers map sorted)]: null
  }
*/

/* Data Get :-  {
    temperature: '0 °C',
    wind: '26 km/h',
    description: 'Partly cloudy',
    forecast: [
      { day: '1', temperature: '-9 °C', wind: '33 km/h' },
      { day: '2', temperature: '-1 °C', wind: '29 km/h' },
      { day: '3', temperature: '-14 °C', wind: '15 km/h' }
    ]
  }
*/