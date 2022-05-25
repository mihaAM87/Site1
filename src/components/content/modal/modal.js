import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useStore } from 'react-redux';
import classes from './modal.module.scss';
import { ModalContext } from '../../../context/modal/modalContext';
import emailjs from 'emailjs-com';

export default function Modal() {
  const store = useStore();
  const dispatch = useDispatch();
  const { modal, hide } = useContext(ModalContext);

  let { userName, userEmail, userPhone } = store.getState().content;

  // создаем обработчик нажатия клавиши Esc
  const onKeydown = (key) => {
    switch (key) {
      case 'Escape':
        hide();
        break;
    }
  };

  const mainClasses = [];
  mainClasses.push('row');
  mainClasses.push(classes.modal);

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  // https://ru.reactjs.org/docs/hooks-effect.html
  // React.useEffect(() => {
  //   document.addEventListener('keydown', onKeydown);
  //   return () => document.removeEventListener('keydown', onKeydown);
  // });

  // если компонент невидим, то не отображаем его
  if (!modal) return null;

  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        'service_14jmwku',
        'template_f31ex0a',
        e.target,
        'XYNOX-L544CmbvKdh'
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
    hide();
  };

  // или возвращаем верстку модального окна
  return (
    <div className={mainClasses.join(' ')}>
      <Form className="contact-form" onSubmit={sendEmail}>
        <div className="row">
          <div className="row">
            <div>
              <h3>Закзать</h3>
              <h3>Звонок</h3>
            </div>
            <span className="modal-close" onClick={hide}>
              &times;
            </span>
          </div>
          <div className="row">
            <div className="row">
              <Form.Group>
                <Form.Control
                  name="from_name"
                  id="from_name"
                  type="text"
                  placeholder="Имя"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  name="from_email"
                  id="from_email"
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="from_phone"
                  id="from_phone"
                  type="text"
                  placeholder="Телефон"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button class="form-control btn btn-success" type="submit">
                Записаться
              </button>
            </div>
            <div className="col-md-6">
              <button class="form-control btn btn-primary" onClick={hide}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
// интерфейс для пропсов
