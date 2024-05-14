import { request } from '../axios_helper';

class EventService {

    getEventsFiltered(title, location, categories, paginationPage) {
        return request("GET", `events/filters?title=${title}&location=${location}&categories=${categories}&page=${paginationPage}&size=10`, {})
            .then(response => response.data)
            .then(data => {
                // Acceder a la propiedad 'data'
                return data;
            })
            .catch(error => {
                // Manejar errores aquí si es necesario
                console.error("Error al obtener eventos:", error);
                throw error; // Re-lanza el error para que sea manejado por el componente que consume el servicio
            });
    }

    getEventsFilteredNoCategories(title, location, paginationPage) {
        return request("GET", `events/filters2?title=${title}&location=${location}&page=${paginationPage}&size=10`, {})
            .then(response => response.data)
            .then(data => {
                // Acceder a la propiedad 'data'
                return data;
            })
            .catch(error => {
                // Manejar errores aquí si es necesario
                console.error("Error al obtener eventos:", error);
                throw error; // Re-lanza el error para que sea manejado por el componente que consume el servicio
            });
    }

    getEvents(paginationPage) {
        return request("GET", `events/all?page=${paginationPage}&size=10`, {})
            .then(response => response.data)
            .then(data => {
                // Acceder a la propiedad 'data'
                return data;
            })
            .catch(error => {
                // Manejar errores aquí si es necesario
                console.error("Error al obtener eventos:", error);
                throw error; // Re-lanza el error para que sea manejado por el componente que consume el servicio
            });
    }

    getEventsTitleContains(paginationPage, title) {
        return request("GET", `events/inTitle/${title}?page=${paginationPage}&size=10`, {})
            .then(response => response.data)
            .then(data => {
                // Acceder a la propiedad 'data'
                return data;
            })
            .catch(error => {
                // Manejar errores aquí si es necesario
                console.error("Error al obtener eventos:", error);
                throw error; // Re-lanza el error para que sea manejado por el componente que consume el servicio
            });
    }

    getCategories() {
        return request("GET", `events/categories`, {})
            .then(response => response.data)
            .then(data => {
                // Acceder a la propiedad 'data'
                return data;
            })
            .catch(error => {
                // Manejar errores aquí si es necesario
                throw error; // Re-lanza el error para que sea manejado por el componente que consume el servicio
            });
    }
}

export default new EventService();
