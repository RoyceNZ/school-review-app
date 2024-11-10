import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { useSelector } from 'react-redux';


const SchoolDetailPage = () => {
    const selectedSchool = useSelector((state) => state.selectedSchool.selectedSchool);

    console.log('ss',selectedSchool);


    // useEffect(() => {
    //     if (selectedSchool) {
    //         fetch(`https://api.skolverket.se/skolenhetsregistret/v1/skolenhet/${selectedSchool.Skolenhetskod}`, {
    //             headers: {
    //                 'accept': 'application/json'
    //             },
    //             mode: 'no-cors'
    //         }).then(response => response.json())
    //             .then(data => {
    //                 console.log(data);
    //                 // Handle the data from the API
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching school details:', error);
    //             });
    //     }
    // }, [selectedSchool]);

    const response = fetch(`https://api.skolverket.se/skolenhetsregistret/v1/skolenhet/${selectedSchool.Skolenhetskod}`, {
        headers: {
            'accept': 'application/json'
        }, 
        method: 'GET',
    }).then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(data));
        // Handle the data from
    })
    .catch(error => {
        console.error('Error fetching school details:', error);
    });
    
    if (!selectedSchool) {
        return <div>No school selected</div>;
    }



    return (
        <Card>
            <CardMedia
                component="img"
                alt={selectedSchool.Skolenhetsnamn}
                height="140"
                image={selectedSchool.Skolenhetsnamn}
                title={selectedSchool.Skolenhetsnamn}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Name: {selectedSchool.Skolenhetsnamn}
                </Typography>
                  
                    
            </CardContent>
        </Card>
    );
};




export default SchoolDetailPage;


