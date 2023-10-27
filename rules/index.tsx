import * as yup from "yup";

export const singup = yup.object().shape({
    username: yup
        .string()
        .min(5, "At least should be five characters short")
        .required("Please enter an username"),
    email: yup
        .string()
        .required("Please enter a valid email")
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email"),
    password: yup
        .string()
        .required('Please enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
        ),
    confirmPassword: yup
        .string()
        .required('Passwords must match')
        .oneOf([yup.ref('password')], 'Passwords must match')
})

export const login = yup.object().shape({
    username: yup
        .string()
        .required("Please Enter your username"),
    password: yup
        .string()
        .required('Please Enter your password')
})