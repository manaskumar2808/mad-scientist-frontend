import React from 'react';
import { Container, Option, CheckSection, ThankText } from './styles';
import { Modal as AntModal } from 'antd';
import { BsCheckCircle } from 'react-icons/bs';
import { constants } from '../../utilities/specifications';

const Modal = ({ title, visible, onClose, onOk, onSelect, done = false, options = [] }) => {
    return (
        <Container>
            <AntModal
                visible={visible}
                title={title}
                onOk={onOk}
                onCancel={onClose}
                footer={null}
                bodyStyle={{ 
                    padding: 0,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                }}
                centered
                
            >
                {
                    done &&
                    <CheckSection>
                        <BsCheckCircle size={50} color={constants.color.success} />
                        <ThankText>
                            Thanks for providing us with reports to make the application a clean and happy community.
                        </ThankText>
                    </CheckSection>
                }
                {options.map(option => <Option
                    key={option.id}
                    danger={option.danger}
                    onClick={() => onSelect(option.value)}
                >
                    {option.value}
                </Option>)}
            </AntModal>
        </Container>
    );
}

export default Modal;