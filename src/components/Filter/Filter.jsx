import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from "./Filter.styled";

    
export const Filter = ({ value, onChange, onBlur }) => {
    return (
        <Wrapper>
            <Label htmlFor="filter">Find contacts by name</Label>
            <Input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </Wrapper>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}