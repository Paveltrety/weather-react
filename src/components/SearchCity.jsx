import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, changeText } from '../redux/action/weatherAction';


const SearchCity = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => {
        return {
            textarea: state.weatherPage.textarea,
        }
    });

    let linkText = React.createRef();
    const onChangeCity = () => {
        let newCity = linkText.current.value;
        dispatch(changeText(newCity));
    }

    const sumbitCity = (event) => {
        dispatch(fetchWeather(state.textarea));
        event.preventDefault();
    }
    return (
        <>
            <form onSubmit={sumbitCity} className="search">
                <input type="text" ref={linkText} onChange={onChangeCity} value={state.textarea} placeholder="Введите город" className="search__input" />
            </form>
        </>
    )

}


export default SearchCity;
