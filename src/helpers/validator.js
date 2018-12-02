const checkPhone = (rule, value, callback) => {
    if (value === '') {
        callback()
    }
    if ((/^[0-9]{9,12}$/.test(value)) || value === undefined) {
        callback()
    } else if ((/^[0-9]{0,9}$/.test(value))) {
        callback('Jumlah karakter 9 - 12')
    }
}

const checkOtp = (rule, value, callback) => {
    if (value === '') {
        callback()
    }
    if ((/^[0-9]{6}$/.test(value)) || value === undefined) {
        callback()
    } else if ((/^[0-9]{0,6}$/.test(value))) {
        callback('Jumlah karakter OTP harus 6')
    }
}

const checkBankNo = (rule, value, callback) => {
    if (value === '') {
        callback()
    }
    if ((/^[0-9]{8,20}$/.test(value)) || value === undefined) {
        callback()
    } else if ((/^[0-9]{0,8}$/.test(value))) {
        callback('Jumlah karakter harus 8 - 20')
    }
}

const checkValidator = (rule, value, callback) => {
    if (value === '' || value === undefined) {
        callback()
    }
    if (rule.regex !== null) {
        const regex = new RegExp(rule.regex)
        if (regex.test(value)) {
            callback()
        } else {
            callback('Cek format input')
        }
    } else {
        callback()
    }
}

export default {
    checkPhone,
    checkOtp,
    checkBankNo,
    checkValidator
}
