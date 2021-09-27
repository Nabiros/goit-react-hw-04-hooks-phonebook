import React from 'react';
import { Wrapper, Label, Input } from "./Filter.styled";
import PropTypes from 'prop-types';

    
export const Filter = ({getFilterName, value}) => {
    getFilterName = (e) => {
        const { onChange } = this.props;

        return onChange(e.currentTarget.value);
};

    return (
        <Wrapper>
                <Label htmlFor="filter">Find contacts by name</Label>
                <Input
                    type="text"
                    name="filter"
                    value={value}
                    onChange={getFilterName}
                />
            </Wrapper>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}