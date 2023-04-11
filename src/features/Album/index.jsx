import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac Hoa',
            thumnailUrl: 'https://media.istockphoto.com/id/1061974964/photo/blurred-abstract-photo-of-light-burst-among-trees-and-glitter-golden-bokeh-lights.jpg?b=1&s=170667a&w=0&k=20&c=04lzSaOWA5DEfgBZSqymJRPkBlHD_9voWMJdUzbeFO4='
        },
        {
            id: 2,
            name: 'Nhac Viet',
            thumnailUrl: 'https://media.istockphoto.com/id/474110360/photo/scenic-sunset-over-the-forest.jpg?b=1&s=170667a&w=0&k=20&c=SZ6l_BOgSVR-aVPSWp7Y5eLarrKdT0FE4sbvF1qpRos='
        },
        {
            id: 3,
            name: 'Nhac Anh',
            thumnailUrl: 'https://media.istockphoto.com/id/1061974964/photo/blurred-abstract-photo-of-light-burst-among-trees-and-glitter-golden-bokeh-lights.jpg?b=1&s=170667a&w=0&k=20&c=04lzSaOWA5DEfgBZSqymJRPkBlHD_9voWMJdUzbeFO4='
        }

    ]
    return (
        <div>
            <h2>Co the ban se thich</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;