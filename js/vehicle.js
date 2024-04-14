
async function fetchVehicleData() {
    // Mock data fetch function
    return {
        id: 'Tractor H-100',
        latitude: -33.43223260721937, 
        longitude: -70.56415060701408,
        additionalInfo: {
        status: 'En operación',
        lastMaintenance: '15-07-2023',
        currentTask: 'Cortando césped',
        additionalDetails: `
        <p><strong>Horas de operación:</strong> 1200 hrs</p>
        <p><strong>Operador asignado:</strong> Juan Pérez</p>
        <p><strong>Nota de mantenimiento:</strong> Revisión completa realizada en la última fecha de mantenimiento.
        <br> Próxima revisión programada para el 15-10-2023.</p>
        <p><strong>Observaciones:</strong> El vehículo ha mostrado un rendimiento óptimo. 
        <br>
        Se recomienda revisar las cuchillas antes de la próxima operación extensiva.</p>
    `
        }
    };
}

function createVehicleEntity(vehicleData) {
    const entity = new Cesium.Entity({
        id: vehicleData.id,
        name: vehicleData.id, // Added name for consistency with pins
        position: Cesium.Cartesian3.fromDegrees(vehicleData.longitude, vehicleData.latitude),
        billboard: {
            image: 'src/img/tractor.png',
            scale: 0.1,
            heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, // Ensure it clamps to the ground like the pins
            disableDepthTestDistance: Number.POSITIVE_INFINITY // Ensuring it's always visible
        },
        description: `
            <h1>Información Tractor H-100</h1>
            <ul>
                <li>Status: ${vehicleData.additionalInfo.status}</li>
                <li>Ultimo Mantenimiento: ${vehicleData.additionalInfo.lastMaintenance}</li>
                <li>Tarea Actual: ${vehicleData.additionalInfo.currentTask}</li>
                <li>Información Adicional: ${vehicleData.additionalInfo.additionalDetails}</li>
            </ul>
        `
    });

    return entity;
}




function updateVehiclePosition(vehicleData) {
    const vehicleEntity = viewer.entities.getById(vehicleData.id);
    if (vehicleEntity) {
        vehicleEntity.position = Cesium.Cartesian3.fromDegrees(vehicleData.longitude, vehicleData.latitude);
    }
}


async function loadVehicle() {
    const vehicleData = await fetchVehicleData();
    const vehicleEntity = createVehicleEntity(vehicleData);
    viewer.entities.add(vehicleEntity);
   
    
}




loadVehicle(); // Call the function


