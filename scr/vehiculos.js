// Estos son los datos de los vehículos por tipo
const vehicleData = {
    "Compacto": [
        { src: "images/Compacto1.png", desc: "KIA PICANTO. Año 2016" },
        { src: "images/Compacto2.png", desc: "FORD FIESTA ST. Año 2015" },
        { src: "images/Compacto3.png", desc: "PEUGEOT 308. Año 2018" }
    ],
    "Mediano": [
        { src: "images/Mediano1.png", desc: "HONDA CITY CAR. Año 2017" },
        { src: "images/Mediano2.png", desc: "MERCEDES SLS. Año 2015" },
        { src: "images/Mediano3.png", desc: "FORD FIESTA ST. Año 2016" }
    ],
    "Todo Terreno": [
        { src: "images/TodoTerreno1.png", desc: "TOYOTA FJ CRUISER. Año 2016" },
        { src: "images/TodoTerreno2.png", desc: "TOYOTA Prado. Año 2018" },
        { src: "images/TodoTerreno3.png", desc: "NISSAN JUKE. Año 2017" }
    ],
    "Familiar": [
        { src: "images/Familiar1.png", desc: "TOYOTA SIENNA. Año 2018" },
        { src: "images/Familiar2.png", desc: "DODGE GRAND CARAVANE. Año 2015" },
        { src: "images/Familiar3.png", desc: "HYUNDAI ELANTRA. Año 2016" }
    ]
};

// Función para cargar las imágenes y la descripción
function mostrarTodo() {
    // Aquí se obtiene el tipo de vehiculo seleccionado
    const tipoVehiculoSelect = document.getElementById("tipoVehiculo");
    const selectedOption = tipoVehiculoSelect.options[tipoVehiculoSelect.selectedIndex].text;
    const vehicles = vehicleData[selectedOption];

    // Aquí es donde se actualiza la imagen que aparecerá en la pantalla principal
    const imgVista = document.getElementById("imgVista");
    imgVista.src = vehicles[0].src;
    imgVista.alt = vehicles[0].desc;

    // Aquí se actualiza la descripción principal
    const infTCar = document.getElementById("infTCar");
    infTCar.textContent = vehicles[0].desc;

    // Aquí se actualiza las otras imagenes más pequeñas
    for (let i = 0; i < vehicles.length; i++) {
        const thumbnail = document.getElementById(`img${i + 1}`);
        thumbnail.src = vehicles[i].src;
        thumbnail.alt = vehicles[i].desc;
    }
}

// Función para mostrar una imagen de las otras imagenes más pequeñas
function mostrarImagen(index) {
    // Aquí se obtiene el tipo de vehículo seleccionado
    const tipoVehiculoSelect = document.getElementById("tipoVehiculo");
    const selectedOption = tipoVehiculoSelect.options[tipoVehiculoSelect.selectedIndex].text;
    const vehicles = vehicleData[selectedOption];

    // Aquí se actualiza la imagen principal con la imagen pequeña seleccionada
    const imgVista = document.getElementById("imgVista");
    imgVista.src = vehicles[index - 1].src;
    imgVista.alt = vehicles[index - 1].desc;

    // Y aquí se actualiza la descripción principal de cada vehículo
    const infTCar = document.getElementById("infTCar");
    infTCar.textContent = vehicles[index - 1].desc;
}
