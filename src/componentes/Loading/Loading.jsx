import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Loading({ Loading }) {
    if (Loading) {
        return (
            <div>
                <h2>Loading</h2>
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
            </div>
        );
    } else {
        return <h2>No está cargando</h2>;
    }
}

export default Loading;