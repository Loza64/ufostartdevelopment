import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContextConsumer } from "../../Context/ContextConsumer";
import { toast } from 'react-toastify';

export default function Formulario() {

  const { Messages, loadMessage } = ContextConsumer();
  const navigate = useNavigate();

  const TopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const expresiones = {
    name: /(?! )^[a-zA-ZÁ-ÿ\s]{10,40}(?<! )$/,
    email: /^(?! )\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+(?<! )$/,
    business: /^(?! )[a-zA-ZÁ-ÿ\s]{8,30}(?<! )$/,
    message: /^(?! )[a-zA-ZÀ-ÿ0-9\s.,()-.\s]{20,343}(?<! )$/,
  }

  const sendMessage = async (body) => {
    const { state, details } = await Messages(body)
    if (state) {
      toast.success(details, {
        position: 'bottom-left',
        autoClose: 1000 * 10, // 10 second
        style: {
          fontWeight: 'bold'
        }
      })
      TopScroll()
      navigate("/")
    } else {
      toast.error(details, { position: 'bottom-left' })
    }
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <Formik
          initialValues={{
            name: '',
            email: '',
            business: '',
            message: ''
          }}

          validate={(values) => {
            let errors = {};

            if (!expresiones.name.test(values.name)) {
              errors.name = 'El campo nombre debe de ser valido y tener minimo 10 caracteres ';
            }

            if (!expresiones.email.test(values.email)) {
              errors.email = "Dijite un email valido por favor";
            }

            if (!expresiones.business.test(values.business)) {
              errors.business = "Por favor dijite el nombre de su negocio correctamente";
            }

            if (!expresiones.message.test(values.message)) {
              errors.message = "El message debe tener entre 20 y 343 caracteres y solo se adminte letras, numeros, espacios y () . , -";
            }
            return errors;
          }}

          onSubmit={(values) => {
            sendMessage(values);
          }}
        >
          {
            ({ errors }) => (
              <Form>
                <Field type="text" className="data-input" placeholder="Ingrese su nombre" name="name" />
                <ErrorMessage name="name" component={() => (<label className="errormessage">{errors.name}</label>)} />

                <Field type="text" className="data-input" placeholder="Ingrese su correo" name="email" />
                <ErrorMessage name="email" component={() => (<label className="errormessage">{errors.email}</label>)} />

                <Field type="text" className="data-input" placeholder="Ingrese el nombre de su negocio" name="business" />
                <ErrorMessage name="business" component={() => (<label className="errormessage">{errors.business}</label>)} />

                <Field as="textarea" type="text" className="data-input data-textarea" placeholder="Ingrese un mensaje" name="message" rows="5" />
                <ErrorMessage name="message" component={() => (<label className="errormessage">{errors.message}</label>)} />

                <Field type="submit" className="submit" disabled={loadMessage} value={loadMessage ? "Enviando formulario..." : "Enviar mensage"} style={{ width: '100%' }} />
              </Form>
            )
          }
        </Formik>
        <div className="content">
          <label className='title'>INFORMACIÓN<span style={{ color: 'red', marginLeft: '10px' }}>DE CONTACTO</span></label>
          <label>
            <i className="fa fa-whatsapp"></i> +503 7626 3182
          </label>
          <label>
            <i className="fa fa-instagram"></i> ufostart.development
          </label>
          <label>
            <i className="fa fa-facebook"></i> UFOSTART DEVELOPMENT
          </label>
          <label>
            <i className="fa fa-youtube-play"></i> UFOSTART DEVELOPMENT
          </label>
          <label>
            <i className="fa fa-envelope"></i> ufostartservices@gmail.com
          </label>
          <label>
            <i className="fa fa-map-marker"></i> El Salvador, San Salvador, Ilopango
          </label>
        </div>
      </div>
    </div>
  );
}