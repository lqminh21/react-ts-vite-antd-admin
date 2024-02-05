import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { Text, Title, Link } = Typography;

type LoginProps = {
    username: string,
    password: string
}

export default function SignIn() {

  const onFinish = (values: LoginProps) => {
    console.log("Received values of form: ", values);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: "48px 16px",
      width: "380px"
    },
    footer: {
      marginTop: "24px",
      textAlign: "center",
      width: "100%"
    },
    forgotPassword: {
      float: "right"
    },
    header: {
      marginBottom: "32px"
    },
    section: {
      alignItems: "center",
      backgroundColor: "rgb(255, 255, 255)",
      display: "flex",
      height: "100vh",
      padding: "48px 16px",
      marginLeft: "auto",
      marginRight: "auto"
    },
    text: {
      color: "rgba(0, 0, 0, 0.65)"
    },
    title: {
      fontSize: "30px"
    }
  };

  return (
    <section id="signin" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
            <path
              d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
              fill="white"
            />
            <path
              d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
              fill="white"
            />
            <path
              d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
              fill="white"
            />
          </svg>

          <Title style={styles.title}>Sign in</Title>
          <Text style={styles.text}>
            Welcome back to AntBlocks UI! Please enter your details below to
            sign in.
          </Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a style={styles.forgotPassword} href="">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block="true" type="primary" htmlType="submit">
              Log in
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Don't have an account?</Text>{" "}
              <Link href="">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}