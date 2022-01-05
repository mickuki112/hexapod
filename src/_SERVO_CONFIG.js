// See configurable parameters at: http://johnny-five.io/api/servo/

const controller = "PCA9685"
const address = 0x41

const servoConfig = {
    rightFront: {
        alpha: { controller, pin: 15 ,address},
        beta: { controller, pin: 14 ,address},
        gamma: { controller, pin: 13 ,address},
    },
    rightMiddle: {
        alpha: { controller, pin: 11 ,address},
        beta: { controller, pin: 10 ,address},
        gamma: { controller, pin: 9 ,address},
    },
    rightBack: {
        alpha: { controller, pin: 7 ,address},
        beta: { controller, pin: 6 ,address},
        gamma: { controller, pin: 5 ,address},
    },
    leftFront: {
        alpha: { controller, pin: 0 },
        beta: { controller, pin: 1 },
        gamma: { controller, pin: 2 },
    },
    leftMiddle: {
        alpha: { controller, pin: 4 },
        beta: { controller, pin: 5 },
        gamma: { controller, pin: 6 },
    },
    leftBack: {
        alpha: { controller, pin: 8 },
        beta: { controller, pin: 9 },
        gamma: { controller, pin: 10 },
    },
}

module.exports = { servoConfig }
