import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Genre({ match }) {
    let category = match.params.category;
    const { listPhimLeMoiCapNhat } = useSelector(state => state.filmReducer)

    const renderFilm = () => {
        return listPhimLeMoiCapNhat.map((film, index) => {
            return <div className="small" key={index}>
                <NavLink title={film.name} to={`/info/${film.name}`}>
                    <img src={film.src} alt="" />
                    <span className='label'>HD-Vietsub</span>
                    <p>{film.name}</p>
                </NavLink>
            </div>
        })
    }

    return (
        <div className='container'>
            <h4 className='mr-5'>
                PHIM HÀNH ĐỘNG
            </h4>

            <div className="">
                <i className="fa fa-home ml-3 mr-2 pt-2 pb-2 color" />
                <p className='m-0 mr-2 pt-2 pb-2 color'>Phim Mới</p>
                <i className="fa fa-angle-right mr-2 pt-2 pb-2 color" />
                <p className='m-0 mr-2 pt-2 pb-2'>{category}</p>
            </div>

            {renderFilm()}
        </div>
    )
}
