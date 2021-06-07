import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/login.module.scss";
import CustomButton from "../buttons/button";
import { signUpApiCall } from "../../service/auth";
import { getCookie } from "../../service/cookie";
import { RegisterUser } from "../../models/types";

const SignUp: React.SFC<{}> = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  const is_admin = () => {
    const access_token = getCookie("access_token");

    if (access_token) {
      router.push("/sensors");
    }
  };

  useEffect(() => {
    is_admin();
  }, []);

  const [usernameError, setUserameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [confirmPasswordError, setConfirmPasswordError] = useState(true);
  const [firstNameError, setFirstNameError] = useState(true);
  const [lastNameError, setLastNameError] = useState(true);

  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const formRef = useRef(null);
  const [signUpError, setSignUpError] = useState(null);

  const formHandler = (event) => {
    const { name, value } = event.target;
    let tempErrors = errors;
    switch (name) {
      case "username":
        tempErrors.username = value.length < 4 ? "Username is not valid" : "";
        setUserameError(tempErrors.username.length > 0 ? true : false);
        break;
      case "email":
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        tempErrors.email = re.test(value) ? "" : "Email is not valid";
        setEmailError(tempErrors.email.length > 0 ? true : false);
        break;
      case "password1":
        setPasswordValue(value.replace(/\s/g, ""));
        tempErrors.password =
          value.length < 8 ? "Password must be at least 8 characters" : "";
        setPasswordError(tempErrors.password.length > 0 ? true : false);
        tempErrors.confirmPassword =
          confirmPasswordValue === value ? "" : "Passwords do not match";
        setConfirmPasswordError(
          tempErrors.confirmPassword.length > 0 ? true : false
        );
        break;
      case "password2":
        setConfirmPasswordValue(value.replace(/\s/g, ""));
        tempErrors.confirmPassword =
          value === passwordValue ? "" : "Passwords do not match";
        setConfirmPasswordError(
          tempErrors.confirmPassword.length > 0 ? true : false
        );
        break;
      case "first_name":
        tempErrors.first_name =
          value.length < 1 ? "Please enter your first name" : "";
        setFirstNameError(tempErrors.first_name.length > 0 ? true : false);
        break;
      case "last_name":
        tempErrors.last_name =
          value.length < 1 ? "Please enter your last name" : "";
        setLastNameError(tempErrors.last_name.length > 0 ? true : false);
        break;

      default:
        break;
    }
    setErrors(tempErrors);
  };

  const sendRegister = async (event) => {
    event.preventDefault();
    setSignUpError(null);
    const formData = new FormData(formRef.current) as any;
    const userData = Object.fromEntries(formData) as RegisterUser;

    const res = await signUpApiCall(userData);

    if (res.error) {
      console.log(res.error);
      setSignUpError(res.error);
    } else if (res.user) {
      router.push("/sensors");
    }
  };
  return (
    <div>
      <Head>
        <title>SignUp</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={styles.login_card_container}>
        <h2 className={styles.login_header}>SignUp</h2>

        <div className={styles.form_container}>
          <form className={styles.login_form} ref={formRef}>
            {/* first name*/}
            <label>First Name</label>
            <br />
            <span className={styles.contact_form_error}>
              {errors.first_name}
            </span>
            <input
              name="first_name"
              type="text"
              className={styles.text_input}
              placeholder="First Name"
              onChange={formHandler}
            />

            {/*last name*/}
            <label>Last Name</label>
            <br />
            <span className={styles.contact_form_error}>
              {errors.last_name}
            </span>
            <input
              name="last_name"
              type="text"
              className={styles.text_input}
              placeholder="First Name"
              onChange={formHandler}
            />

            <label>Username</label>
            <br />
            <span className={styles.contact_form_error}>{errors.username}</span>
            <input
              name="username"
              type="text"
              className={styles.text_input}
              placeholder="Username"
              onChange={formHandler}
            />

            {/*email*/}
            <label>Email</label>
            <br />
            <span className={styles.contact_form_error}>{errors.email}</span>
            <div className={styles.input_container}>
              <input
                name="email"
                type="email"
                className={styles.text_input}
                placeholder="Email"
                onChange={formHandler}
              />
            </div>

            {/*password*/}
            <label>Password</label>
            <br />
            <span className={styles.contact_form_error}>{errors.password}</span>
            <div className={styles.input_container}>
              <input
                name="password1"
                type="password"
                value={passwordValue}
                className={styles.text_input}
                placeholder="Password"
                onChange={formHandler}
              />
            </div>

            {/*confirmpassword*/}
            <label> Confirm Password</label>
            <br />
            <span className={styles.contact_form_error}>
              {errors.confirmPassword}
            </span>
            <div className={styles.input_container}>
              <input
                name="password2"
                type="password"
                value={confirmPasswordValue}
                className={styles.text_input}
                placeholder="Password"
                onChange={formHandler}
              />
            </div>

            <CustomButton
              fill={true}
              clickAction={(event) => sendRegister(event)}
              disabled={
                usernameError ||
                emailError ||
                passwordError ||
                confirmPasswordError ||
                firstNameError ||
                lastNameError
              }
            >
              Sign up
            </CustomButton>

            {signUpError && (
              <div className={styles.auth_form_error}>
                <span> {signUpError} </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
