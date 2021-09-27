import { useState } from "react";
import { Form, Label, Input} from './ContactsForm.styled';
import { Button } from '../Buttons/Buttons.styled';
import { v4 as uuidv4 } from 'uuid';

export function ContactsForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameId = uuidv4();
    const numberId = uuidv4();

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default: return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    };

   return (
            <Form action="" onSubmit={handleSubmit}>
                <Label htmlFor={nameId}>Name</Label>
                <Input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id={nameId}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
                
                <Label htmlFor={numberId}>Number</Label>
                <Input
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    id={numberId}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required/>
                
                <Button type="submit"> Add contact</Button>
            </Form>
        );
}