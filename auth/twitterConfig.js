const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'placeholderURL'
                                    :'http://localhost:3000'

module.exports = {
    'apikey' : 'D5X2oGz0DTpwy9aFQA4aGpCpj',
    'apisecret' : 'B9PXuiPOHOfLMm6bkLEtX8uGVyuCnV8nAv7EKqaeRoJ7Ll56WO',
    'callbackUrl' : `${url}/login/twitter/callback`
}
