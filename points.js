var fs = require('fs'),
    xml2js = require('xml2js');

const cities = {
    'ARM' : 'Армянск',
    'BAH' : 'Бахчисарай'
};
var points = [];
var parser = new xml2js.Parser();


fs.readFile(__dirname + '/points.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        points = result.kml.Document[0].Folder[0].Placemark;

        var data = "";
        for (var i = 0; i < points.length; i++) {

            data += points[i].name + ' ' + points[i].description + '\n';

            fs.writeFile('daria.txt', data, function (err) {
                if (err) throw err;
                console.log('Saved to file.');
            });
        }
        // console.dir(points);
        console.dir('Количество точек: ' + points.length);
        console.log('Done');
    })
});
