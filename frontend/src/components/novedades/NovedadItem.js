import React from 'react';
import '../../styles/NovedadesPage.css';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='novedades'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img className="img-fluid" src={imagen} alt="..." />
            <div dangerouslySetInnerHTML={{ __html: body }}  />
            <hr/>
        </div>
    );
}

export default NovedadItem;