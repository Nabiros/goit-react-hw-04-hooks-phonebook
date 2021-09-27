import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { PrimaryTitle, SecondaryTitle } from "./App.styled.jsx";
import { ContactsForm } from "../ContactsForm/ContactsForm.jsx";
import { ContactsList } from "../ContactsList/ContactsList.jsx";
import { Filter } from "../Filter/Filter.jsx";
import { Notify } from "notiflix";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const currentContacts = JSON.parse(localStorage.getItem("contacts")) ?? "";
    currentContacts && setContacts(currentContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.warning(name + " is already in contacts.");
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    setContacts((prevState) => [newContact, ...prevState]);
  };
  const removeContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const onChangeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const changeBlur = (e) => {
    e.currentTarget.value = "";
    setFilter("");
  };

  const showContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactsForm onSubmit={formSubmit} />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter value={filter} onChange={onChangeFilter} onBlur={changeBlur} />
      <ContactsList contacts={showContacts()} deleteId={removeContact} />
    </>
  );
}
