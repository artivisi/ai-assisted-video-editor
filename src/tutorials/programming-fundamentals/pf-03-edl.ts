import { SilenceDetectionResult, EditDecisionList, edlToRemotionSequences } from "../silence-types";

// Silence detection result for footage/programming-fundamentals/pf-03-camera-silence.txt
export const pf_03_cameraSilenceResult: SilenceDetectionResult = {
  segments: [
  {
    "start": 0,
    "end": 1.501229,
    "type": "silence"
  },
  {
    "start": 1.501229,
    "end": 21.302271,
    "type": "speech"
  },
  {
    "start": 21.302271,
    "end": 21.901833,
    "type": "silence"
  },
  {
    "start": 21.901833,
    "end": 22.761083,
    "type": "speech"
  },
  {
    "start": 22.761083,
    "end": 23.675437,
    "type": "silence"
  },
  {
    "start": 23.675437,
    "end": 101.327125,
    "type": "speech"
  },
  {
    "start": 101.327125,
    "end": 101.885792,
    "type": "silence"
  },
  {
    "start": 101.885792,
    "end": 105.502146,
    "type": "speech"
  },
  {
    "start": 105.502146,
    "end": 106.345271,
    "type": "silence"
  },
  {
    "start": 106.345271,
    "end": 150.426708,
    "type": "speech"
  },
  {
    "start": 150.426708,
    "end": 151.419625,
    "type": "silence"
  },
  {
    "start": 151.419625,
    "end": 196.53725,
    "type": "speech"
  },
  {
    "start": 196.53725,
    "end": 197.310208,
    "type": "silence"
  },
  {
    "start": 197.310208,
    "end": 259.265604,
    "type": "speech"
  },
  {
    "start": 259.265604,
    "end": 260.19275,
    "type": "silence"
  },
  {
    "start": 260.19275,
    "end": 318.816417,
    "type": "speech"
  },
  {
    "start": 318.816417,
    "end": 319.668208,
    "type": "silence"
  },
  {
    "start": 319.668208,
    "end": 350.714646,
    "type": "speech"
  },
  {
    "start": 350.714646,
    "end": 351.873542,
    "type": "silence"
  },
  {
    "start": 351.873542,
    "end": 406.931042,
    "type": "speech"
  },
  {
    "start": 406.931042,
    "end": 407.925937,
    "type": "silence"
  },
  {
    "start": 407.925937,
    "end": 453.548896,
    "type": "speech"
  },
  {
    "start": 453.548896,
    "end": 454.59125,
    "type": "silence"
  },
  {
    "start": 454.59125,
    "end": 466.045292,
    "type": "speech"
  },
  {
    "start": 466.045292,
    "end": 466.548542,
    "type": "silence"
  },
  {
    "start": 466.548542,
    "end": 486.418146,
    "type": "speech"
  },
  {
    "start": 486.418146,
    "end": 486.930896,
    "type": "silence"
  },
  {
    "start": 486.930896,
    "end": 522.987708,
    "type": "speech"
  },
  {
    "start": 522.987708,
    "end": 523.667854,
    "type": "silence"
  },
  {
    "start": 523.667854,
    "end": 546.936646,
    "type": "speech"
  },
  {
    "start": 546.936646,
    "end": 548.046479,
    "type": "silence"
  },
  {
    "start": 548.046479,
    "end": 605.732396,
    "type": "speech"
  },
  {
    "start": 605.732396,
    "end": 606.609896,
    "type": "silence"
  },
  {
    "start": 606.609896,
    "end": 610.640417,
    "type": "speech"
  },
  {
    "start": 610.640417,
    "end": 612.212375,
    "type": "silence"
  },
  {
    "start": 612.212375,
    "end": 612.212521,
    "type": "speech"
  },
  {
    "start": 612.212521,
    "end": 613.498062,
    "type": "silence"
  },
  {
    "start": 613.498062,
    "end": 648.302792,
    "type": "speech"
  },
  {
    "start": 648.302792,
    "end": 648.820146,
    "type": "silence"
  },
  {
    "start": 648.820146,
    "end": 693.137292,
    "type": "speech"
  },
  {
    "start": 693.137292,
    "end": 693.650458,
    "type": "silence"
  },
  {
    "start": 693.650458,
    "end": 712.301125,
    "type": "speech"
  },
  {
    "start": 712.301125,
    "end": 712.971625,
    "type": "silence"
  },
  {
    "start": 712.971625,
    "end": 750.468083,
    "type": "speech"
  },
  {
    "start": 750.468083,
    "end": 751.196854,
    "type": "silence"
  },
  {
    "start": 751.196854,
    "end": 756.275646,
    "type": "speech"
  },
  {
    "start": 756.275646,
    "end": 757.68,
    "type": "silence"
  },
  {
    "start": 757.68,
    "end": 762.68,
    "type": "speech"
  }
],
  totalDuration: 762.68,
  speechDuration: 741.15,
  silenceDuration: 21.53,
  silencePercentage: 2.8,
};

// Edit decision list (what to keep/remove)
export const pf_03_cameraEdl: EditDecisionList = {
  sourceFile: "footage/programming-fundamentals/pf-03-camera-silence.txt",
  cuts: [
  {
    "originalStart": 1.4012289999999998,
    "originalEnd": 21.452271,
    "newStart": 0,
    "newEnd": 20.051042,
    "type": "keep"
  },
  {
    "originalStart": 21.801833,
    "originalEnd": 22.911082999999998,
    "newStart": 20.051042,
    "newEnd": 21.160292,
    "type": "keep"
  },
  {
    "originalStart": 23.575436999999997,
    "originalEnd": 101.477125,
    "newStart": 21.160292,
    "newEnd": 99.06198,
    "type": "keep"
  },
  {
    "originalStart": 101.785792,
    "originalEnd": 105.652146,
    "newStart": 99.06198,
    "newEnd": 102.928334,
    "type": "keep"
  },
  {
    "originalStart": 106.245271,
    "originalEnd": 150.576708,
    "newStart": 102.928334,
    "newEnd": 147.259771,
    "type": "keep"
  },
  {
    "originalStart": 151.319625,
    "originalEnd": 196.68725,
    "newStart": 147.259771,
    "newEnd": 192.627396,
    "type": "keep"
  },
  {
    "originalStart": 197.210208,
    "originalEnd": 259.415604,
    "newStart": 192.627396,
    "newEnd": 254.83279199999998,
    "type": "keep"
  },
  {
    "originalStart": 260.09274999999997,
    "originalEnd": 318.966417,
    "newStart": 254.83279199999998,
    "newEnd": 313.706459,
    "type": "keep"
  },
  {
    "originalStart": 319.56820799999997,
    "originalEnd": 350.864646,
    "newStart": 313.706459,
    "newEnd": 345.002897,
    "type": "keep"
  },
  {
    "originalStart": 351.77354199999996,
    "originalEnd": 407.08104199999997,
    "newStart": 345.002897,
    "newEnd": 400.310397,
    "type": "keep"
  },
  {
    "originalStart": 407.82593699999995,
    "originalEnd": 453.698896,
    "newStart": 400.310397,
    "newEnd": 446.18335600000006,
    "type": "keep"
  },
  {
    "originalStart": 454.49125,
    "originalEnd": 466.195292,
    "newStart": 446.18335600000006,
    "newEnd": 457.8873980000001,
    "type": "keep"
  },
  {
    "originalStart": 466.448542,
    "originalEnd": 486.56814599999996,
    "newStart": 457.8873980000001,
    "newEnd": 478.00700200000006,
    "type": "keep"
  },
  {
    "originalStart": 486.830896,
    "originalEnd": 523.137708,
    "newStart": 478.00700200000006,
    "newEnd": 514.3138140000001,
    "type": "keep"
  },
  {
    "originalStart": 523.567854,
    "originalEnd": 547.086646,
    "newStart": 514.3138140000001,
    "newEnd": 537.832606,
    "type": "keep"
  },
  {
    "originalStart": 547.946479,
    "originalEnd": 605.882396,
    "newStart": 537.832606,
    "newEnd": 595.7685230000001,
    "type": "keep"
  },
  {
    "originalStart": 606.509896,
    "originalEnd": 610.7904169999999,
    "newStart": 595.7685230000001,
    "newEnd": 600.049044,
    "type": "keep"
  },
  {
    "originalStart": 612.1123749999999,
    "originalEnd": 612.362521,
    "newStart": 600.049044,
    "newEnd": 600.2991900000001,
    "type": "keep"
  },
  {
    "originalStart": 613.398062,
    "originalEnd": 648.4527919999999,
    "newStart": 600.2991900000001,
    "newEnd": 635.35392,
    "type": "keep"
  },
  {
    "originalStart": 648.720146,
    "originalEnd": 693.287292,
    "newStart": 635.35392,
    "newEnd": 679.921066,
    "type": "keep"
  },
  {
    "originalStart": 693.5504579999999,
    "originalEnd": 712.4511249999999,
    "newStart": 679.921066,
    "newEnd": 698.821733,
    "type": "keep"
  },
  {
    "originalStart": 712.871625,
    "originalEnd": 750.618083,
    "newStart": 698.821733,
    "newEnd": 736.568191,
    "type": "keep"
  },
  {
    "originalStart": 751.096854,
    "originalEnd": 756.425646,
    "newStart": 736.568191,
    "newEnd": 741.896983,
    "type": "keep"
  },
  {
    "originalStart": 757.5799999999999,
    "originalEnd": 762.68,
    "newStart": 741.896983,
    "newEnd": 746.996983,
    "type": "keep"
  }
],
  originalDuration: 762.68,
  outputDuration: 747.00,
  timeSaved: 15.68,
};

// Remotion sequences at 30 fps
export const pf_03_cameraSequences = edlToRemotionSequences(pf_03_cameraEdl, 30);

// Summary
// Original: 12m 42s
// After cuts: 12m 26s
// Time saved: 0m 15s (2.1%)
