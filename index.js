const moment = require('moment');
const express = require('express');
const app = express();

app.get('/sign/:date/:name', (request, response) => {
    name = request.params.name;
    date = moment(request.params.date, 'DD-MM');
    
    let zodiacDates = {
        'aries_start': moment('21-03', 'DD-MM'),
        'aries_end': moment('20-04', 'DD-MM'),
        'taurus_start': moment('21-04', 'DD-MM'),
        'taurus_end': moment('20-05', 'DD-MM'),
        'gemini_start': moment('21-05', 'DD-MM'),
        'gemini_end': moment('20-06', 'DD-MM'),
        'cancer_start': moment('21-06', 'DD-MM'),
        'cancer_end': moment('22-07', 'DD-MM'),
        'leo_start': moment('23-07', 'DD-MM'),
        'leo_end': moment('22-08', 'DD-MM'),
        'virgo_start': moment('23-08', 'DD-MM'),
        'virgo_end': moment('22-09', 'DD-MM'),
        'libra_start': moment('23-09', 'DD-MM'),
        'libra_end': moment('22-10', 'DD-MM'),
        'scorpio_start': moment('23-10', 'DD-MM'),
        'scorpio_end': moment('21-11', 'DD-MM'),
        'sagittarius_start': moment('22-11', 'DD-MM'),
        'sagittarius_end': moment('21-12', 'DD-MM'),
        'capricorn_start': moment('22-12', 'DD-MM'),
        'capricorn_end': moment('20-01', 'DD-MM'),
        'aquarius_start': moment('21-01', 'DD-MM'),
        'aquarius_end': moment('18-02', 'DD-MM'),
        'pisces_start': moment('19-02', 'DD-MM'),
        'pisces_end': moment('20-03', 'DD-MM')
    };



    if (date >= zodiacDates['aries_start'] && date <= zodiacDates['aries_end'])
        response.send('Aries');
    else if (date >= zodiacDates['taurus_start'] && date <= zodiacDates['taurus_end'])
        response.send('Taurus');
    else if (date >= zodiacDates['gemini_start'] && date <= zodiacDates['gemini_end'])
        response.send('Gemini');
    else if (date >= zodiacDates['cancer_start'] && date <= zodiacDates['cancer_end'])
        response.send('Cancer'); 
    else if (date >= zodiacDates['leo_start'] && date <= zodiacDates['leo_end'])
        response.send('Leo');
    else if (date >= zodiacDates['virgo_start'] && date <= zodiacDates['virgo_end'])
        response.send('Virgo');
    else if (date >= zodiacDates['libra_start'] && date <= zodiacDates['libra_end'])
        response.send('Libra');
    else if (date >= zodiacDates['scorpio_start'] && date <= zodiacDates['scorpio_end'])
        response.send('Scorpio');
    else if (date >= zodiacDates['sagittarius_start'] && date <= zodiacDates['sagittarius_end'])
        response.send('Sagittarius');
    else if (date >= zodiacDates['capricorn_start'] && date <= zodiacDates['capricorn_end'])
        response.send('Capricorn');
    else if (date >= zodiacDates['aquarius_start'] && date <= zodiacDates['aquarius_end'])
        response.send('Aquarius');
    else if (date >= zodiacDates['pisces_start'] && date <= zodiacDates['pisces_end'])
        response.send('Pisces');
    else if (date <= moment('31-12', 'DD-MM'))
        response.send('Capricorn');
    else
        response.send('You send me an invalid date ç.ç ');

});

app.listen(3000, () => console.log('Listening your sign im port 3000...'));



// Áries: de 21-03 a 20-04
// Touro: de 21-04 a 20-05
// Gêmeos: de 21-05 a 20-06
// Câncer: de 21-06 a 22-07
// Leão: de 23-07 a 22-08
// Virgem: de 23-08 a 22-09
// Libra: de 23-09 a 22-10
// Escorpião: de 23-10 a 21-11
// Sagitário: de 22-11 a 21-12
// Capricórnio: de 22-12 a 20-01
// Aquário: de 21-01 a 18-02
// Peixes: de 19-02 a 20-03