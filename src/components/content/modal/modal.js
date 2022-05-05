import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { onOpen, onClose, onSend } from '../../../store/actions/contentSrc';
import { connect } from 'react-redux';
import { useDispatch, useStore } from 'react-redux';
import classes from './modal.module.scss';

export default function Modal() {
  const store = useStore();
  const dispatch = useDispatch();

  let { userName, userEmail, userPhone, visibleModel } =
    store.getState().content;

  const send = (userName, userEmail, userPhone) => {
    dispatch(onSend(userName, userEmail, userPhone));
    close();
  };
  const close = () => {
    dispatch(onClose());
  };

  // создаем обработчик нажатия клавиши Esc
  const onKeydown = (key) => {
    switch (key) {
      case 'Escape':
        close();
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
  if (!visibleModel) return null;

  // или возвращаем верстку модального окна
  return (
    <div className={mainClasses.join(' ')} onClick={close}>
      <div className="modal-dialog row" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header row">
          <div className="modal-title">
            <h3>Закзать</h3>
            <h3>Звонок</h3>
          </div>
          <span className="modal-close" onClick={close}>
            &times;
          </span>
        </div>
        <div className="modal-body row">
          <div className="modal-content row">
            <Form>
              <Form.Group>
                <Form.Control name={userName} type="text" placeholder="Имя" />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  name={userEmail}
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name={userPhone}
                  type="text"
                  placeholder="Телефон"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="modal-footer row">
          <div className="col-md-6">
            <button
              class="form-control btn btn-success"
              onClick={send.bind(this, userName, userEmail, userPhone)}
            >
              Записаться
            </button>
          </div>
          <div className="col-md-6">
            <button class="form-control btn btn-primary" onClick={close}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// интерфейс для пропсов
