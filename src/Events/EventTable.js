import React, { useState, useEffect } from 'react';
import EventTableBody from './EventTableBody';
import EventTableHeader from './EventTableHeader';
import EventService from '../Services/EventService';

const EventTable = () => {
    const [nameValue, setNameValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [categoriesValue, setCategoriesValue] = useState([]);
    const [selected, setSelected] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        EventService.getCategories()
            .then(response => {
                setCategories(response);
            })
            .catch(error => {
                console.error("Error al obtener eventos:", error);
            });
    }, []);

    return (
        <>
            <EventTableHeader
                handleName={[nameValue, setNameValue]}
                handleLocation={[locationValue, setLocationValue]}
                handleCategories={[categoriesValue, setCategoriesValue]}
                handleSelected={[selected, setSelected]}
                values={categories}
            />
            <EventTableBody
                name={nameValue}
                location={locationValue}
                categories={categoriesValue}
            />
        </>
    );
}

export default EventTable;
