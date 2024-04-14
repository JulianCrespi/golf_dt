let viewer;  // Global declaration

async function initialize() {
    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YmEyZmY4Mi0wNDgwLTQyMDItYTA3ZS1kZDI5MjU0YjRlZWEiLCJpZCI6MTE2MTM2LCJpYXQiOjE2Njk0MTQ4OTN9.Lb3zap4P2SX1Zdv8eZmDAZBfK2gsdhPesgkApQBQ62I";


    
    // Use stantard tiles:
/*
    viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain()
    });


    */



    // Use Google 3D Tiles:

    viewer = new Cesium.Viewer("cesiumContainer", {
        timeline: false,
        animation: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        // The globe does not need to be displayed,
        // since the Photorealistic 3D Tiles include terrain
        globe: false,
    });

    try {
        const tileset = await Cesium.createGooglePhotorealistic3DTileset();
        viewer.scene.primitives.add(tileset);
        tileset.maximumScreenSpaceError = 6; // Lower value for higher detail

        } catch (error) {
        console.log(`Failed to load tileset: ${error}`);
        }
 


    // Enable rendering the sky
    viewer.scene.skyAtmosphere.show = true;

    // Define your desired camera settings
    const longitude = -70.56675498794324; // Example longitude
    const latitude = -33.44218206642709;  // Example latitude
    const height = 1500;                  // Example height in meters
    const headingDegrees = 0;             // Example heading in degrees
    const pitchDegrees = -45;             // Example pitch in degrees

    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
        orientation: {
            heading: Cesium.Math.toRadians(headingDegrees),
            pitch: Cesium.Math.toRadians(pitchDegrees),
            roll: 0.0
        }
    });

    viewer.entities.add(area1);
    viewer.entities.add(area2);
    viewer.entities.add(area3);
}

initialize();
