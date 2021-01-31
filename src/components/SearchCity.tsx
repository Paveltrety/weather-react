import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather, changeText } from '../redux/action/weatherAction';
import { stateType } from '../redux/store';

const SearchCity = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: stateType) => {
        return {
            textarea: state.weatherPage.textarea,
        }
    });

    let linkText = React.useRef<HTMLInputElement>(null);
    const onChangeCity = () => {
        let newCity = linkText.current!.value;
        dispatch(changeText(newCity));
    }

    const sumbitCity = (event: React.FormEvent<HTMLFormElement>) => {
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
