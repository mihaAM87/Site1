import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useStore } from 'react-redux';
import classes from './modal.module.scss';
import { ModalContext } from '../../../context/modal/modalContext';
import emailjs from 'emailjs-com';

export default function Modal() {
  const store = useStore();
  const { modal, hide } = useContext(ModalContext);

  const mainClasses = [];
  // mainClasses.push('row');
  mainClasses.push(classes.modal);

  const modalDialogClasses = [];
  mainClasses.push('contact-form');
  mainClasses.push(classes.modalDialog);

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

    const target = e.target;

    if (
      target?.from_name?.value &&
      target?.from_name?.value.trim() != '' &&
      ((target.from_email?.value && target?.from_email?.value.trim() != '') ||
        (target.from_phone?.value && target?.from_phone?.value.trim() != ''))
    ) {
      emailjs
        .sendForm(
          'service_14jmwku',
          'template_f31ex0a',
          target,
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
    }
  };

  // или возвращаем верстку модального окна
  return (
    <div className={mainClasses.join(' ')}>
      <Form onSubmit={sendEmail}>
        <div className={classes.modalHeader}>
          <div>
            <h3 className={classes.modalTitle}>Закзать</h3>
            <h3 className={classes.modalTitle}>Звонок</h3>
          </div>
          <span className={classes.modalClose} onClick={hide}>
            &times;
          </span>
        </div>
        <div className={classes.modalBody}>
          <div className={classes.modalContent}>
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
        <div className={classes.modalFooter}>
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
      </Form>
    </div>
  );
}
// интерфейс для пропсов
