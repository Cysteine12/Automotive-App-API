module.exports = {
    ensureAdmin: (req, res, next) => {
        if (req.isAuthenticated() && req.user.role === 'admin') {
            return next()
        } else {
            res.status(200).json({
                msg: 'Unauthenticated user route',
                access: false
            })
        }
    },
    ensureServiceTechnician: (req, res, next) => {
        if (req.isAuthenticated() && req.user.role === 'service-technician') {
            return next()
        } else {
            res.status(200).json({
                msg: 'Unauthenticated user route',
                access: false
            })
        }
    },
    ensureInsuranceCompany: (req, res, next) => {
        if (req.isAuthenticated() && req.user.role === 'insurance-company') {
            return next()
        } else {
            res.status(200).json({
                msg: 'Unauthenticated user route',
                access: false
            })
        }
    },
}