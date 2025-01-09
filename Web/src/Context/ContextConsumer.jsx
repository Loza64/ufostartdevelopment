import { useState, createContext, useContext, useEffect } from "react";
import { GetProjects, NewMessage } from "../Api/Api";
import { questions } from "./QuestionsData";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const context = createContext(null);

export default function ContextProvider({ children }) {

  const [Projects, setProjects] = useState([]);
  const [loadProjects, setLoadProjects] = useState(false)

  const [Questions, setQuestions] = useState([]);

  const [loadMessage, setLoadMessage] = useState(false)

  const [open, setOpen] = useState(false)
  const [Details, setDetails] = useState([])

  const getQuestions = () => { setQuestions(questions) }

  const Messages = async (Contact) => {
    setLoadMessage(true);
    try {
      const { data } = await NewMessage(Contact);
      const { state, details } = data;
      return { state, details };
    } catch ({ response, message }) {
      if (response) {
        return { state: false, details: response.data?.details || 'Error desconocido' };
      }
      return { state: false, details: message || 'Error desconocido' };
    } finally {
      setLoadMessage(false);
    }
  };

  const getProjects = async () => {
    setLoadProjects(true);
    try {
      const { data } = await GetProjects();
      setProjects(data)
    } catch ({ response, message }) {
      if (response) {
        toast.error(response.data?.details || `Error: ${response.status}`, { position: 'bottom-left' });
        return;
      }
      toast.error(message || 'Error desconocido', { position: 'bottom-left' });
    } finally {
      setLoadProjects(false);
    }
  };

  useEffect(() => { getQuestions() }, []);

  const values = {
    getProjects, Projects,
    Messages, Questions,
    loadMessage, loadProjects,
    open, setOpen, Details, setDetails
  }

  return (
    <context.Provider value={values}>
      {children}
    </context.Provider>
  )
}

export const ContextConsumer = () => {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error("Context must be used within a ContextConsumer");
  }
  return contextValue;
} 