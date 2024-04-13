
function createCustomInfoArea(id, name, coordinates, infoHtml) {
    return new Cesium.Entity({
        id: id,
        name: name,
        position: Cesium.Cartesian3.fromDegrees(coordinates[0], coordinates[1], coordinates[2]),
        // Optional: Use a small icon as a marker
        billboard: {
            image: 'src/img/iconGPS.png',
            scale: 0.04,
            disableDepthTestDistance: Number.POSITIVE_INFINITY
        },
        description: infoHtml // HTML content for the pop-up
    });
}

const area1Info = `
    <h1>Hoyo 1: "El Desafío"</h1>
    <p><strong>Par:</strong> 4<br>
    <br>
    <strong>Distancia:</strong> 350 metros<br>
    <br>
    Un comienzo desafiante con un fairway estrecho y un green bien protegido por búnkeres. 
    <br>
    <br>
    Ideal para jugadores estratégicos.</p>
`;

const area2Info = `
    <h1>Hoyo 2: "La Prueba"</h1>
    <p><strong>Par:</strong> 5<br>
    <br>
    <strong>Distancia:</strong> 500 metros<br>
    <br>
    Un hoyo largo que exige precisión y potencia. 
    <br>
    <br>
    El segundo tiro es clave para acercarse al green rodeado de agua.
    </p>
    Ideal para jugadores estratégicos.</p>
`;

// GPS Format: [longitude, latitude, height]
const area1 = createCustomInfoArea('area1', 'Area 1', [-70.56600387747349,-33.432135953311246,686], area1Info);
const area2 = createCustomInfoArea('area2', 'Area 2', [-70.56397774110417,-33.43459703554195,686], area2Info);


// Repeat for other areas
