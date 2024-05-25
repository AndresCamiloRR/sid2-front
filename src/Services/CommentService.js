import { request } from '../axios_helper';

class CommentService {

    deleteComment(comment){
        return request("DELETE", `comments/deleteByComment`, comment);
    }

    createComment(eventName, text, author) {
        return request("POST", `comments/add`, {eventName:eventName, text:text, author:author})
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

    getCommentsFilteres(eventName, text, author){
        return request("GET", `comments/search?author=${author}&eventName=${eventName}&text=${text}`, {})
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
}

export default new CommentService();