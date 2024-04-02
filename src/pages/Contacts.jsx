import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { useEffect } from "react";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      {loading && <b>Loading...</b>}
      {error && <b>Server Error</b>}
      <ContactList />
    </div>
  );
}