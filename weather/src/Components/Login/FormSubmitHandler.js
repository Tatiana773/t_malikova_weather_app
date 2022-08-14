
    export const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };
    export const isValidName = (name) => {
        return /^[A-Za-z]+$/.test(name);
    };
    export const isValidTel = (tel) => {
        return /(^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])).{15}/.test(tel);
    };
    export const isValidPassword = (password) => {
        return /[0-9]{6}/.test(password);
    };
    export const isValidCode = (code) => {
        return /[0-9]{4}/.test(code);
    };
    
