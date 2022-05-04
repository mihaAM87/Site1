import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { onOpen, onClose, onSend } from '../../../store/actions/contentSrc';
import { connect } from 'react-redux';
import { useDispatch, useStore } from 'react-redux';

export default function Modal() {
  const store = useStore();
  const dispatch = useDispatch();

  let { userName, userEmail, userPhone, onSend, onClose, visibleModel } =
    store.getState().content;

  const send = (userName, userEmail, userPhone) =>
    dispatch(onSend(userName, userEmail, userPhone));
  const close = () => dispatch(onClose());

  // создаем обработчик нажатия клавиши Esc
  const onKeydown = (key) => {
    switch (key) {
      case 'Escape':
        dispatch(close());
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  // https://ru.reactjs.org/docs/hooks-effect.html
  // React.useEffect(() => {
  //   document.addEventListener('keydown', onKeydown);
  //   return () => document.removeEventListener('keydown', onKeydown);
  // });

  // если компонент невидим, то не отображаем его
  // if (!visibleModel) return null;

  // или возвращаем верстку модального окна
  return (
    <div className="modal" onClick={close}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <h3>Закзать</h3>
            <h3>Звонок</h3>
          </div>
          <span className="modal-close" onClick={close}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <Form>
              <Form.Group>
                <Form.Text name={userName} placeholder="Имя" />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  name={userEmail}
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group>
                <Form.Text name={userPhone} placeholder="Телефон" />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={send.bind(this, userName, userEmail, userPhone)}>
            Записаться
          </button>
          <button onClick={close}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}
// интерфейс для пропсов
