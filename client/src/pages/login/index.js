import React from "react";
import { withRouter } from 'react-router';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css';
import Api from  '../../api';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
    }
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.Component {
    login = async (values) => {
        let res = await Api.user.login(values);
        if (res.code === 1) {
            message.success('登陆成功！')
            this.props.history.push('/welcome')
        } else {
            message.error(res.message);
        }
    }
    onFinish = (values) => {
        this.login(values)
    }
    handleRegister= () => {
        this.props.history.push('/register')
    }
    render () {
        return (
            <div className='user_wrapper'>
                <div className='user_title'>登录</div>
                <Form
                    {...formItemLayout}
                    name="normal_login"
                    style={{ marginLeft: "90px" }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input style={{ width: '400px' }} prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password style={{ width: '400px' }} prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        className='btn'
                    >
                        <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                            登录
                        </Button>
                        <Button onClick={this.handleRegister}>
                            没有账号，去注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default withRouter(Login);