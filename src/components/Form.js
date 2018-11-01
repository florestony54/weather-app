import React from "react";

const Form = props =>(
    <form onSubmit={props.getWeather}>
        <input type='text' autocomplete='off' name='city' placeholder='City' />
        <input type='text' autocomplete='off' name='country' placeholder='Country' />
        <button>Get Weather</button>
    </form>
);

export default Form;