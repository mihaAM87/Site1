import { Form } from 'react-bootstrap';
import { onSend } from '../../../store/actions/contentSrc';
import { useDispatch, useStore } from 'react-redux';
import classes from './modal.module.scss';
import { ModalContext } from '../../../context/modal/modalContext';

export default function Modal() {
  const store = useStore();
  const dispatch = useDispatch();
  const { modal, hide } = useContext(ModalContext);

  let { userName, userEmail, userPhone } = store.getState().content;

  const send = () => {
    dispatch(onSend(userName, userEmail, userPhone));
    hide();
  };

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

  // или возвращаем верстку модального окна
  return (
    <div className={mainClasses.join(' ')}>
      <Form>
        <div className="modal-dialog row">
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button class="form-control btn btn-success" onClick={send}>
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
