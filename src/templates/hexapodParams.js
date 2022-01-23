// Previously all 100
const DEFAULT_DIMENSIONS = {
    front: 500,
    side: 800,
    middle: 700,
    coxia: 320,
    femur: 830,
    tibia: 1400,
}

const DEFAULT_BODY_DIMENSIONS = {
    front: DEFAULT_DIMENSIONS.front,
    side: DEFAULT_DIMENSIONS.side,
    middle: DEFAULT_DIMENSIONS.middle,
}
const DEFAULT_LEG_DIMENSIONS = {
    coxia: DEFAULT_DIMENSIONS.coxia,
    femur: DEFAULT_DIMENSIONS.femur,
    tibia: DEFAULT_DIMENSIONS.tibia,
}

const DEFAULT_POSE = {
    leftFront: { alpha: 0, beta: -6, gamma: -6 },
    rightFront: { alpha: 0, beta: -2, gamma: -14 },
    leftMiddle: { alpha: 0, beta: 4, gamma: -6 },
    rightMiddle: { alpha: 0, beta: 0, gamma: -6 },
    leftBack: { alpha: 0, beta: -3, gamma: -6 },
    rightBack: { alpha: 0, beta: -9, gamma: -6 },
}

const DEFAULT_PATTERN_PARAMS = { alpha: 0, beta: 0, gamma: 0 }

const DEFAULT_IK_PARAMS = {
    tx: 0,
    ty: 0,
    tz: 0,
    rx: 0,
    ry: 0,
    rz: 0,
    hipStance: 0,
    legStance: 0,
}

const DEFAULT_GAIT_PARAMS = {
    tx: 0,
    tz: 0,
    rx: 0,
    ry: 0,
    legStance: 0,
    hipStance: 20,
    hipSwing: 25,
    liftSwing: 40,
    stepCount: 5,
}

export {
    DEFAULT_DIMENSIONS,
    DEFAULT_LEG_DIMENSIONS,
    DEFAULT_BODY_DIMENSIONS,
    DEFAULT_POSE,
    DEFAULT_IK_PARAMS,
    DEFAULT_PATTERN_PARAMS,
    DEFAULT_GAIT_PARAMS,
}
