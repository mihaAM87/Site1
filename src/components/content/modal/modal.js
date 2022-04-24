import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { onClose, onSend } from '../../../store/actions/contentSrc';
import { connect } from 'react-redux';

class modal extends Component {
  static contextTypes = {
    userName: PropTypes.string,
    userEmail: PropTypes.string,
    userPhone: PropTypes.string,
    visible: PropTypes.bool,
  };

  state = {
    userName: '',
    userEmail: '',
    userPhone: '',
  };

  UNSAFE_componentWillMount() {}

  render() {
    let { userName, userEmail, userPhone, onSend, onClose, visible } =
      this.props;

    // создаем обработчик нажатия клавиши Esc
    const onKeydown = (key) => {
      switch (key) {
        case 'Escape':
          onClose();
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
    if (!visible) return null;

    // или возвращаем верстку модального окна
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-title">
              <h3>Закзать</h3>
              <h3>Звонок</h3>
            </div>
            <span className="modal-close" onClick={onClose}>
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
            <button onClick={onSend.bind(this, userName, userEmail, userPhone)}>
              Записаться
            </button>
            <button onClick={onClose}>Закрыть</button>
          </div>
        </div>
      </div>
    );
  }
  // интерфейс для пропсов
}
function mapStateToProps(state) {
  return {
    userName: state.content.userName,
    userEmail: state.content.userEmail,
    userPhone: state.content.userPhone,
    visible: state.content.visible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSend: (userName, userEmail, userPhone) =>
      dispatch(onSend(userName, userEmail, userPhone)),
    onClose: dispatch(onClose()),
    onOpen: dispatch(onOpen()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(modal);
