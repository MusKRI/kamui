"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  Transition,
  TargetAndTransition,
} from "motion/react";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/classes";
import { createEaseFromArray } from "@/lib/shared/easing";

const animationPresets = {
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateX(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(50deg) scale(0.8)`,
    },
  },
  "bottom-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(-50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateX(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateX(-50deg) scale(0.8)`,
    },
  },
  "right-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateY(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(50deg) scale(0.8)`,
    },
  },
  "left-flip": {
    initial: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(-50deg) scale(0.8)`,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transform: `perspective(1000px) rotateY(0deg) scale(1)`,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transform: `perspective(1000px) rotateY(-50deg) scale(0.8)`,
    },
  },
  scale: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)",
    },
    animate: {
      opacity: 1,
      transform: "scale(1)",
    },
    exit: {
      opacity: 0,
      transform: "scale(0.8)",
    },
  },
  "top-slide": {
    initial: {
      opacity: 0,
      transform: "translateY(-100px)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateY(-100px)",
    },
  },
  "bottom-slide": {
    initial: {
      opacity: 0,
      transform: "translateY(100px)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateY(100px)",
    },
  },
  "left-slide": {
    initial: {
      opacity: 0,
      transform: "translateX(-100px)",
    },
    animate: {
      opacity: 1,
      transform: "translateX(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateX(-100px)",
    },
  },
  "right-slide": {
    initial: {
      opacity: 0,
      transform: "translateX(100px)",
    },
    animate: {
      opacity: 1,
      transform: "translateX(0)",
    },
    exit: {
      opacity: 0,
      transform: "translateX(100px)",
    },
  },
  "top-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
    },
  },
  "bottom-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(100% 0 0 0)",
    },
  },
  "left-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    },
  },
  "right-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(0 0 0 100%)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0 0 0 0%)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(0 0 0 100%)",
    },
  },
  "center-wipe": {
    initial: {
      opacity: 0,
      clipPath: "inset(50% 50% 50% 50%)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(50% 50% 50% 50%)",
    },
  },

  burst: {
    initial: {
      opacity: 0,
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      filter: "blur(2px)",
    },
    animate: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      filter: "blur(2px)",
    },
  },
  // "burst-scale": {
  //   initial: {
  //     opacity: 0,
  //     scale: 0.2,
  //     filter: "blur(12px)",
  //     transformOrigin: "top center",
  //     clipPath: "polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)",
  //   },
  //   animate: {
  //     opacity: 1,
  //     scale: 1,
  //     filter: "blur(0px)",
  //     transformOrigin: "top center",
  //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //   },
  //   exit: {
  //     opacity: 0,
  //     scale: 0.2,
  //     filter: "blur(12px)",
  //     transformOrigin: "top center",
  //     clipPath: "polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)",
  //   },
  // },
};

const transitionPresets = {
  springSnappy: {
    type: "tween",
    duration: 0.66,
    ease: createEaseFromArray([
      0, 0.0088, 0.0327, 0.068, 0.1117, 0.1614, 0.2149, 0.2706, 0.327, 0.3831,
      0.4379, 0.4907, 0.5412, 0.5889, 0.6336, 0.6751, 0.7135, 0.7487, 0.7809,
      0.81, 0.8362, 0.8597, 0.8807, 0.8994, 0.9158, 0.9302, 0.9428, 0.9537,
      0.9632, 0.9712, 0.9781, 0.9839, 0.9888, 0.9928, 0.9961, 0.9988, 1.001,
      1.0026, 1.0039, 1.0049, 1.0055, 1.006, 1.0062, 1.0063, 1.0062, 1.0061,
      1.0059, 1.0056, 1.0053, 1.005, 1.0046, 1.0043, 1.0039, 1.0036, 1.0032,
      1.0029, 1.0026, 1.0023, 1.0021, 1.0018, 1.0016, 1.0014, 1.0012, 1.0011,
      1.0009, 1.0008, 1.0006, 1.0005, 1.0005, 1.0004, 1.0003, 1.0002, 1.0002,
      1.0001, 1.0001, 1.0001, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1,
    ]),
  },
  springBouncy: {
    type: "tween",
    duration: 0.7,
    ease: createEaseFromArray([
      0, 0.0114, 0.0427, 0.0898, 0.149, 0.2169, 0.2906, 0.3673, 0.445, 0.5216,
      0.5958, 0.6663, 0.7321, 0.7926, 0.8474, 0.8962, 0.9389, 0.9758, 1.0069,
      1.0325, 1.053, 1.0689, 1.0805, 1.0884, 1.093, 1.0947, 1.0941, 1.0915,
      1.0873, 1.0819, 1.0756, 1.0687, 1.0614, 1.0541, 1.0468, 1.0397, 1.0329,
      1.0266, 1.0208, 1.0155, 1.0107, 1.0066, 1.003, 0.9999, 0.9974, 0.9953,
      0.9937, 0.9926, 0.9917, 0.9913, 0.991, 0.9911, 0.9913, 0.9916, 0.9921,
      0.9927, 0.9934, 0.994, 0.9947, 0.9954, 0.9961, 0.9968, 0.9974, 0.9979,
      0.9984, 0.9989, 0.9993, 0.9997, 1, 1.0002, 1.0004, 1.0006, 1.0007, 1.0008,
      1.0008, 1.0008, 1.0008, 1.0008, 1.0008, 1.0008, 1.0007, 1.0006, 1.0006,
      1.0005, 1.0004, 1.0004, 1.0003, 1.0003, 1.0002, 1.0002, 1.0001, 1.0001, 1,
      1, 1, 1, 0.9999, 0.9999, 0.9999, 0.9999, 1,
    ]),
  },
  powerIn: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.0004, 0.0014, 0.0028, 0.0045, 0.0065, 0.0089, 0.0115, 0.0144, 0.0175,
      0.0209, 0.0245, 0.0284, 0.0325, 0.0368, 0.0413, 0.046, 0.051, 0.0561,
      0.0614, 0.0669, 0.0727, 0.0786, 0.0847, 0.0909, 0.0974, 0.104, 0.1108,
      0.1178, 0.125, 0.1323, 0.1398, 0.1475, 0.1553, 0.1633, 0.1714, 0.1797,
      0.1882, 0.1968, 0.2056, 0.2145, 0.2236, 0.2328, 0.2422, 0.2518, 0.2615,
      0.2713, 0.2813, 0.2914, 0.3017, 0.3121, 0.3226, 0.3333, 0.3442, 0.3552,
      0.3663, 0.3775, 0.3889, 0.4005, 0.4121, 0.4239, 0.4359, 0.4479, 0.4601,
      0.4725, 0.4849, 0.4975, 0.5103, 0.5231, 0.5361, 0.5492, 0.5625, 0.5759,
      0.5894, 0.603, 0.6167, 0.6306, 0.6446, 0.6587, 0.673, 0.6874, 0.7019,
      0.7165, 0.7312, 0.7461, 0.7611, 0.7762, 0.7914, 0.8067, 0.8222, 0.8378,
      0.8535, 0.8693, 0.8852, 0.9013, 0.9174, 0.9337, 0.9501, 0.9666, 0.9833, 1,
    ]),
  },
  powerOut: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.0167, 0.0334, 0.0499, 0.0663, 0.0826, 0.0987, 0.1148, 0.1307, 0.1465,
      0.1622, 0.1778, 0.1933, 0.2086, 0.2238, 0.2389, 0.2539, 0.2688, 0.2835,
      0.2981, 0.3126, 0.327, 0.3413, 0.3554, 0.3694, 0.3833, 0.397, 0.4106,
      0.4241, 0.4375, 0.4508, 0.4639, 0.4769, 0.4897, 0.5025, 0.5151, 0.5275,
      0.5399, 0.5521, 0.5641, 0.5761, 0.5879, 0.5995, 0.6111, 0.6225, 0.6337,
      0.6448, 0.6558, 0.6667, 0.6774, 0.6879, 0.6983, 0.7086, 0.7187, 0.7287,
      0.7385, 0.7482, 0.7578, 0.7672, 0.7764, 0.7855, 0.7944, 0.8032, 0.8118,
      0.8203, 0.8286, 0.8367, 0.8447, 0.8525, 0.8602, 0.8677, 0.875, 0.8822,
      0.8892, 0.896, 0.9026, 0.9091, 0.9153, 0.9214, 0.9273, 0.9331, 0.9386,
      0.9439, 0.949, 0.954, 0.9587, 0.9632, 0.9675, 0.9716, 0.9755, 0.9791,
      0.9825, 0.9856, 0.9885, 0.9911, 0.9935, 0.9955, 0.9972, 0.9986, 0.9996, 1,
    ]),
  },
  powerInOut: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.0007, 0.0022, 0.0044, 0.0072, 0.0104, 0.0142, 0.0184, 0.023, 0.028,
      0.0335, 0.0393, 0.0455, 0.052, 0.0589, 0.0662, 0.0737, 0.0816, 0.0899,
      0.0984, 0.1073, 0.1164, 0.1259, 0.1356, 0.1457, 0.156, 0.1667, 0.1776,
      0.1888, 0.2002, 0.212, 0.224, 0.2362, 0.2488, 0.2616, 0.2746, 0.2879,
      0.3015, 0.3153, 0.3294, 0.3437, 0.3582, 0.373, 0.3881, 0.4034, 0.4189,
      0.4346, 0.4506, 0.4669, 0.4833, 0.5, 0.5167, 0.5331, 0.5494, 0.5654,
      0.5811, 0.5966, 0.6119, 0.627, 0.6418, 0.6563, 0.6706, 0.6847, 0.6985,
      0.7121, 0.7254, 0.7384, 0.7512, 0.7638, 0.776, 0.788, 0.7998, 0.8112,
      0.8224, 0.8333, 0.844, 0.8543, 0.8644, 0.8741, 0.8836, 0.8927, 0.9016,
      0.9101, 0.9184, 0.9263, 0.9338, 0.9411, 0.948, 0.9545, 0.9607, 0.9665,
      0.972, 0.977, 0.9816, 0.9858, 0.9896, 0.9928, 0.9956, 0.9978, 0.9993, 1,
    ]),
  },
  powerOutIn: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.0167, 0.0331, 0.0494, 0.0654, 0.0811, 0.0966, 0.1119, 0.127, 0.1418,
      0.1563, 0.1706, 0.1847, 0.1985, 0.2121, 0.2254, 0.2384, 0.2512, 0.2638,
      0.276, 0.288, 0.2998, 0.3112, 0.3224, 0.3333, 0.344, 0.3543, 0.3644,
      0.3741, 0.3836, 0.3927, 0.4016, 0.4101, 0.4184, 0.4263, 0.4338, 0.4411,
      0.448, 0.4545, 0.4607, 0.4665, 0.472, 0.477, 0.4816, 0.4858, 0.4896,
      0.4928, 0.4956, 0.4978, 0.4993, 0.5, 0.5007, 0.5022, 0.5044, 0.5072,
      0.5104, 0.5142, 0.5184, 0.523, 0.528, 0.5335, 0.5393, 0.5455, 0.552,
      0.5589, 0.5662, 0.5737, 0.5816, 0.5899, 0.5984, 0.6073, 0.6164, 0.6259,
      0.6356, 0.6457, 0.656, 0.6667, 0.6776, 0.6888, 0.7002, 0.712, 0.724,
      0.7362, 0.7488, 0.7616, 0.7746, 0.7879, 0.8015, 0.8153, 0.8294, 0.8437,
      0.8582, 0.873, 0.8881, 0.9034, 0.9189, 0.9346, 0.9506, 0.9669, 0.9833, 1,
    ]),
  },
  inSine: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.0001, 0.0005, 0.0011, 0.002, 0.0031, 0.0044, 0.006, 0.0079, 0.01,
      0.0123, 0.0149, 0.0177, 0.0208, 0.0241, 0.0276, 0.0314, 0.0354, 0.0397,
      0.0442, 0.0489, 0.0539, 0.0591, 0.0646, 0.0702, 0.0761, 0.0822, 0.0886,
      0.0952, 0.102, 0.109, 0.1162, 0.1237, 0.1314, 0.1393, 0.1474, 0.1557,
      0.1642, 0.1729, 0.1819, 0.191, 0.2003, 0.2098, 0.2196, 0.2295, 0.2396,
      0.2499, 0.2604, 0.271, 0.2819, 0.2929, 0.3041, 0.3155, 0.327, 0.3387,
      0.3506, 0.3626, 0.3748, 0.3871, 0.3996, 0.4122, 0.425, 0.4379, 0.451,
      0.4642, 0.4775, 0.491, 0.5045, 0.5182, 0.5321, 0.546, 0.5601, 0.5742,
      0.5885, 0.6029, 0.6173, 0.6319, 0.6465, 0.6613, 0.6761, 0.691, 0.706,
      0.721, 0.7361, 0.7513, 0.7666, 0.7819, 0.7972, 0.8126, 0.8281, 0.8436,
      0.8591, 0.8747, 0.8903, 0.9059, 0.9215, 0.9372, 0.9529, 0.9686, 0.9843, 1,
    ]),
  },
  outSine: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.0157, 0.0314, 0.0471, 0.0628, 0.0785, 0.0941, 0.1097, 0.1253, 0.1409,
      0.1564, 0.1719, 0.1874, 0.2028, 0.2181, 0.2334, 0.2487, 0.2639, 0.279,
      0.294, 0.309, 0.3239, 0.3387, 0.3535, 0.3681, 0.3827, 0.3971, 0.4115,
      0.4258, 0.4399, 0.454, 0.4679, 0.4818, 0.4955, 0.509, 0.5225, 0.5358,
      0.549, 0.5621, 0.575, 0.5878, 0.6004, 0.6129, 0.6252, 0.6374, 0.6494,
      0.6613, 0.673, 0.6845, 0.6959, 0.7071, 0.7181, 0.729, 0.7396, 0.7501,
      0.7604, 0.7705, 0.7804, 0.7902, 0.7997, 0.809, 0.8181, 0.8271, 0.8358,
      0.8443, 0.8526, 0.8607, 0.8686, 0.8763, 0.8838, 0.891, 0.898, 0.9048,
      0.9114, 0.9178, 0.9239, 0.9298, 0.9354, 0.9409, 0.9461, 0.9511, 0.9558,
      0.9603, 0.9646, 0.9686, 0.9724, 0.9759, 0.9792, 0.9823, 0.9851, 0.9877,
      0.99, 0.9921, 0.994, 0.9956, 0.9969, 0.998, 0.9989, 0.9995, 0.9999, 1,
    ]),
  },
  inOutSine: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.0002, 0.001, 0.0022, 0.0039, 0.0062, 0.0089, 0.012, 0.0157, 0.0199,
      0.0245, 0.0296, 0.0351, 0.0411, 0.0476, 0.0545, 0.0618, 0.0696, 0.0778,
      0.0865, 0.0955, 0.1049, 0.1147, 0.1249, 0.1355, 0.1464, 0.1577, 0.1693,
      0.1813, 0.1935, 0.2061, 0.219, 0.2321, 0.2455, 0.2591, 0.273, 0.2871,
      0.3014, 0.3159, 0.3306, 0.3455, 0.3605, 0.3757, 0.3909, 0.4063, 0.4218,
      0.4373, 0.4529, 0.4686, 0.4843, 0.5, 0.5157, 0.5314, 0.5471, 0.5627,
      0.5782, 0.5937, 0.6091, 0.6243, 0.6395, 0.6545, 0.6694, 0.6841, 0.6986,
      0.7129, 0.727, 0.7409, 0.7545, 0.7679, 0.781, 0.7939, 0.8065, 0.8187,
      0.8307, 0.8423, 0.8536, 0.8645, 0.8751, 0.8853, 0.8951, 0.9045, 0.9135,
      0.9222, 0.9304, 0.9382, 0.9455, 0.9524, 0.9589, 0.9649, 0.9704, 0.9755,
      0.9801, 0.9843, 0.988, 0.9911, 0.9938, 0.9961, 0.9978, 0.999, 0.9998, 1,
    ]),
  },
  outInSine: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.0157, 0.0314, 0.0471, 0.0627, 0.0782, 0.0937, 0.1091, 0.1243, 0.1395,
      0.1545, 0.1694, 0.1841, 0.1986, 0.2129, 0.227, 0.2409, 0.2545, 0.2679,
      0.281, 0.2939, 0.3065, 0.3187, 0.3307, 0.3423, 0.3536, 0.3645, 0.3751,
      0.3853, 0.3951, 0.4045, 0.4135, 0.4222, 0.4304, 0.4382, 0.4455, 0.4524,
      0.4589, 0.4649, 0.4704, 0.4755, 0.4801, 0.4843, 0.488, 0.4911, 0.4938,
      0.4961, 0.4978, 0.499, 0.4998, 0.5, 0.5002, 0.501, 0.5022, 0.5039, 0.5062,
      0.5089, 0.512, 0.5157, 0.5199, 0.5245, 0.5296, 0.5351, 0.5411, 0.5476,
      0.5545, 0.5618, 0.5696, 0.5778, 0.5865, 0.5955, 0.6049, 0.6147, 0.6249,
      0.6355, 0.6464, 0.6577, 0.6693, 0.6813, 0.6935, 0.7061, 0.719, 0.7321,
      0.7455, 0.7591, 0.773, 0.7871, 0.8014, 0.8159, 0.8306, 0.8455, 0.8605,
      0.8757, 0.8909, 0.9063, 0.9218, 0.9373, 0.9529, 0.9686, 0.9843, 1,
    ]),
  },
  inExpo: {
    type: "tween",
    duration: 0.35,
    ease: createEaseFromArray([
      0, 0.001, 0.0011, 0.0012, 0.0013, 0.0014, 0.0015, 0.0016, 0.0017, 0.0018,
      0.002, 0.0021, 0.0022, 0.0024, 0.0026, 0.0028, 0.003, 0.0032, 0.0034,
      0.0036, 0.0039, 0.0042, 0.0045, 0.0048, 0.0052, 0.0055, 0.0059, 0.0063,
      0.0068, 0.0073, 0.0078, 0.0084, 0.009, 0.0096, 0.0103, 0.011, 0.0118,
      0.0127, 0.0136, 0.0146, 0.0156, 0.0167, 0.0179, 0.0192, 0.0206, 0.0221,
      0.0237, 0.0254, 0.0272, 0.0292, 0.0313, 0.0335, 0.0359, 0.0385, 0.0412,
      0.0442, 0.0474, 0.0508, 0.0544, 0.0583, 0.0625, 0.067, 0.0718, 0.0769,
      0.0825, 0.0884, 0.0947, 0.1015, 0.1088, 0.1166, 0.125, 0.134, 0.1436,
      0.1539, 0.1649, 0.1768, 0.1895, 0.2031, 0.2176, 0.2333, 0.25, 0.2679,
      0.2872, 0.3078, 0.3299, 0.3536, 0.3789, 0.4061, 0.4353, 0.4665, 0.5,
      0.5359, 0.5743, 0.6156, 0.6598, 0.7071, 0.7579, 0.8123, 0.8706, 0.933, 1,
    ]),
  },
  outExpo: {
    type: "tween",
    duration: 0.65,
    ease: createEaseFromArray([
      0, 0.067, 0.1294, 0.1877, 0.2421, 0.2929, 0.3402, 0.3844, 0.4257, 0.4641,
      0.5, 0.5335, 0.5647, 0.5939, 0.6211, 0.6464, 0.6701, 0.6922, 0.7128,
      0.7321, 0.75, 0.7667, 0.7824, 0.7969, 0.8105, 0.8232, 0.8351, 0.8461,
      0.8564, 0.866, 0.875, 0.8834, 0.8912, 0.8985, 0.9053, 0.9116, 0.9175,
      0.9231, 0.9282, 0.933, 0.9375, 0.9417, 0.9456, 0.9492, 0.9526, 0.9558,
      0.9588, 0.9615, 0.9641, 0.9665, 0.9688, 0.9708, 0.9728, 0.9746, 0.9763,
      0.9779, 0.9794, 0.9808, 0.9821, 0.9833, 0.9844, 0.9854, 0.9864, 0.9873,
      0.9882, 0.989, 0.9897, 0.9904, 0.991, 0.9916, 0.9922, 0.9927, 0.9932,
      0.9937, 0.9941, 0.9945, 0.9948, 0.9952, 0.9955, 0.9958, 0.9961, 0.9964,
      0.9966, 0.9968, 0.997, 0.9972, 0.9974, 0.9976, 0.9978, 0.9979, 0.998,
      0.9982, 0.9983, 0.9984, 0.9985, 0.9986, 0.9987, 0.9988, 0.9989, 0.999, 1,
    ]),
  },
  inOutExpo: {
    type: "tween",
    duration: 0.65,
    ease: createEaseFromArray([
      0, 0.0006, 0.0006, 0.0007, 0.0009, 0.001, 0.0011, 0.0013, 0.0015, 0.0017,
      0.002, 0.0022, 0.0026, 0.003, 0.0034, 0.0039, 0.0045, 0.0052, 0.0059,
      0.0068, 0.0078, 0.009, 0.0103, 0.0118, 0.0136, 0.0156, 0.0179, 0.0206,
      0.0237, 0.0272, 0.0313, 0.0359, 0.0412, 0.0474, 0.0544, 0.0625, 0.0718,
      0.0825, 0.0947, 0.1088, 0.125, 0.1436, 0.1649, 0.1895, 0.2176, 0.25,
      0.2872, 0.3299, 0.3789, 0.4353, 0.5, 0.5647, 0.6211, 0.6701, 0.7128, 0.75,
      0.7824, 0.8105, 0.8351, 0.8564, 0.875, 0.8912, 0.9053, 0.9175, 0.9282,
      0.9375, 0.9456, 0.9526, 0.9588, 0.9641, 0.9688, 0.9728, 0.9763, 0.9794,
      0.9821, 0.9844, 0.9864, 0.9882, 0.9897, 0.991, 0.9922, 0.9932, 0.9941,
      0.9948, 0.9955, 0.9961, 0.9966, 0.997, 0.9974, 0.9978, 0.998, 0.9983,
      0.9985, 0.9987, 0.9989, 0.999, 0.9991, 0.9993, 0.9994, 0.9994, 1,
    ]),
  },
  in: {
    type: "tween",
    duration: 0.5,
    ease: [0.5, 0, 0.9, 0.3],
  },
  out: {
    type: "tween",
    duration: 0.5,
    ease: [0.1, 0.7, 0.5, 1],
  },
  inOut: {
    type: "tween",
    duration: 0.5,
    ease: [0.7, 0.1, 0.5, 0.9],
  },
  outIn: {
    type: "tween",
    duration: 0.5,
    ease: [0.1, 0.7, 0.9, 0.5],
  },
  inQuad: {
    type: "tween",
    duration: 0.5,
    ease: [0.55, 0.085, 0.68, 0.53],
  },
  outQuad: {
    type: "tween",
    duration: 0.45,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  inOutQuad: {
    type: "tween",
    duration: 0.4,
    ease: [0.455, 0.03, 0.515, 0.955],
  },
  inCubic: {
    type: "tween",
    duration: 0.5,
    ease: [0.55, 0.055, 0.675, 0.19],
  },
  outCubic: {
    type: "tween",
    duration: 0.5,
    ease: [0.215, 0.61, 0.355, 1],
  },
  inOutCubic: {
    type: "tween",
    duration: 0.5,
    ease: [0.645, 0.045, 0.355, 1],
  },
  inQuart: {
    type: "tween",
    duration: 0.5,
    ease: [0.895, 0.03, 0.685, 0.22],
  },
  outQuart: {
    type: "tween",
    duration: 0.5,
    ease: [0.165, 0.84, 0.44, 1],
  },
  inOutQuart: {
    type: "tween",
    duration: 0.5,
    ease: [0.77, 0, 0.175, 1],
  },
  inQuint: {
    type: "tween",
    duration: 0.5,
    ease: [0.755, 0.05, 0.855, 0.06],
  },
  outQuint: {
    type: "tween",
    duration: 0.5,
    ease: [0.23, 1, 0.32, 1],
  },
  inOutQuint: {
    type: "tween",
    duration: 0.5,
    ease: [0.86, 0, 0.07, 1],
  },
} as const;

type AnimationPreset = keyof typeof animationPresets;
type TransitionPreset = keyof typeof transitionPresets;

interface CustomAnimation {
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
}

interface DialogContextType {
  isOpen?: boolean;
}

const DialogContext = React.createContext<DialogContextType>({});

interface DialogProps
  extends React.ComponentProps<typeof DialogPrimitive.Root> {}

function Dialog(props: DialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (props?.open !== undefined) setIsOpen(props.open);
  }, [props?.open]);

  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      setIsOpen(open);
      props.onOpenChange?.(open);
    },
    [props]
  );

  return (
    <DialogContext.Provider
      value={{
        isOpen,
      }}
    >
      <DialogPrimitive.Root
        data-slot="dialog"
        {...props}
        onOpenChange={handleOpenChange}
      />
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps
  extends React.ComponentProps<typeof DialogPrimitive.Trigger> {}

function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

interface DialogPortalProps
  extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

interface DialogCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {}

function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 pointer-events-none bg-black/50 backdrop-blur-[1px]",
        className
      )}
      {...props}
    />
  );
}

interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  animationPreset?: AnimationPreset;
  transitionPreset?: TransitionPreset;
  animation?: CustomAnimation;
  transition?: Transition;
  reduceMotion?: boolean;
  showCloseButton?: boolean;
}

function DialogContent({
  className,
  children,
  animationPreset = "scale",
  animation,
  transitionPreset = "outQuad",
  transition,
  reduceMotion = false,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  const { isOpen } = React.useContext(DialogContext);

  const animationConfig = React.useMemo(() => {
    if (reduceMotion) {
      return animationPresets.none;
    }

    if (animation) {
      return animation;
    }

    if (animationPreset) {
      return animationPresets[animationPreset];
    }

    return animationPresets.fade;
  }, [animation, animationPreset, reduceMotion]);

  const transitionConfig = React.useMemo(() => {
    if (reduceMotion) {
      return {};
    }

    if (transition) {
      return transition;
    }

    if (transitionPreset) {
      return transitionPresets[transitionPreset];
    }

    return transitionPresets.outQuad;
  }, [transition, transitionPreset, reduceMotion]);

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      <AnimatePresence mode="wait">
        {isOpen && (
          <DialogPortal forceMount data-slot="dialog-portal">
            <DialogOverlay asChild forceMount>
              <motion.div
                key="dialog-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </DialogOverlay>

            <DialogPrimitive.Content asChild forceMount {...props}>
              <div className="pure-ui">
                <motion.div
                  key="dialog-content"
                  initial={animationConfig.initial}
                  animate={animationConfig.animate}
                  exit={animationConfig.exit}
                  transition={transitionConfig}
                  style={{
                    willChange: "transform, opacity, filter, clipPath",
                    perspective: "1000px",
                  }}
                  className="pointer-events-auto fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-(--border) p-6 shadow-lg duration-200 sm:max-w-lg bg-(--muted)"
                >
                  {children}
                  {showCloseButton && (
                    <DialogPrimitive.Close
                      data-slot="dialog-close"
                      className="ring-offset-(--background) focus:ring-(--focus) data-[state=open]:bg-(--accent) data-[state=open]:text-(--muted-foreground) absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                      <XIcon />
                      <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                  )}
                </motion.div>
              </div>
            </DialogPrimitive.Content>
          </DialogPortal>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}
function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-(--muted-foreground) text-sm", className)}
      {...props}
    />
  );
}
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
