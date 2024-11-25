// Función para cargar los países desde la API
function loadCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => {
            const nationalitySelect = document.getElementById('nacionalidad');
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.cca3;
                option.textContent = country.translations.spa.common; // Aquí es para el nombre en español
                nationalitySelect.appendChild(option);
            });

            // Aquí se pone Costa Rica si no hay nada guardado
            const savedCountry = localStorage.getItem('nationality') || 'CRI';
            nationalitySelect.value = savedCountry;
        });
}

// Aquí se carga la lista de países cuando la página se cargue
document.addEventListener("DOMContentLoaded", function() {
    loadCountries();
});