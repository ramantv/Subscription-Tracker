// Master list array. If we want to add more services, here's where to do it.
// [name, price, tiered, url]
const servicesArray = [
  ['Amazon Prime Video', 9, true, 'https://www.amazon.com/'],
  ['Apple TV+', 5, true, 'https://tv.apple.com/'],
  ['Criterion', 11, false, 'https://www.criterionchannel.com/'],
  ['Crunchyroll', 0, true, 'https://www.crunchyroll.com/'],
  ['Disney+', 8, true, 'https://www.disneyplus.com/'],
  ['Fubo', 65, true, 'https://www.fubo.tv/'],
  ['Funimation', 0, true, 'https://www.funimation.com/'],
  ['HBO max', 15, false, 'https://www.hbomax.com/'],
  ['Hulu', 7, true, 'https://www.hulu.com/'],
  ['Netflix', 9, true, 'https://www.netflix.com/'],
  ['Paramount+', 6, true, 'https://www.paramountplus.com/'],
  ['Peacock', 0, true, 'https://www.peacocktv.com/'],
  ['Showtime', 11, false, 'https://www.showtime.com/'],
  ['Starz', 9, false, 'https://www.starz.com/'],
  ['YouTube Premium', 12, false, 'https://www.youtube.com/'],
];

let servicesList = [];

servicesArray.forEach((service) => {
  const serviceObj = {
    name: service[0],
    price: service[1],
    tiered: service[2],
    url: service[3],
  };

  servicesList = [...servicesList, serviceObj];
});

module.exports = servicesList;
