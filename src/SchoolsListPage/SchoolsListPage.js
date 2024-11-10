import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import axios from 'axios';

const SchoolsListPage = () => {
    const [schools, setSchools] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                // const searchParams = new URLSearchParams(location.search);
                // const query = searchParams.get('query');
                // const response = await axios.get(`/api/schools?search=${query}`);
                setSchools([
                    { id: 1, name: 'School 1' },
                    { id: 2, name: 'School 2' },
                    { id: 3, name: 'School 3' },
                ]);
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };

        fetchSchools();
    }, [location.search]);

    return (
        <div>
            <h1>Schools List</h1>
            {schools.length > 0 ? (
                <ul>
                    {schools.map((school) => (
                        <li key={school.id}>{school.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No schools found</p>
            )}
        </div>
    );
};

export default SchoolsListPage;