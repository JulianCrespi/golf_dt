
    async function loadCourseArea() {
        const resource = await Cesium.IonResource.fromAssetId(2425112); 
        const dataSource = await Cesium.KmlDataSource.load(resource, {
            camera: viewer.scene.camera,
            canvas: viewer.scene.canvas,
            clampToGround: true // Ensure the polygon is clamped to the terrain
        });
    
        viewer.dataSources.add(dataSource);
    }
    
   //loadCourseArea(); // Call the function
    