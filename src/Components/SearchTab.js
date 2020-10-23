import React from 'react'

function SearchTab(props) {
    
    const {onValueChanged} = props;

    let value = "";

    function searchByName(params) {
        onValueChanged(params);
    }

    return (
        <form>
            <label>
                Pokemon name:
            <input type="text" onChange={e=>searchByName(e.target.value)}/>
            </label>
    </form>
    )
}

export default SearchTab
