import React from "react";
import PropTypes from 'prop-types';
import { List, ListItem } from "./ContactsList.styled";
import { Button } from '../Buttons/Buttons.styled';


export const ContactsList = ({ contacts, deleteId }) => (
    <div>
        <List>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    {name} - {number}{" "}
                    <Button type="button" onClick={() => deleteId(id)}>
                        Delete
                    </Button>
                </ListItem>
            ))}
        </List>
    </div>
);
    


ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
    deleteId: PropTypes.func,
};