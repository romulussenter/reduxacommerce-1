import React from 'react';
import { connect } from 'react-redux';

const SearchBar = props => {
    return (
        <div>
            <input type="text"  
                value={props.searchTerm}
                onChange={(e) => props.updateSearch(e.target.value)}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        searchTerm: state.search
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateSearch: term => dispatch({type: 'UPDATE_SEARCH', payload: {value: term}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);