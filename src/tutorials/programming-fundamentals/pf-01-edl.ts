import { SilenceDetectionResult, EditDecisionList, edlToRemotionSequences } from "../silence-types";

// Silence detection result for footage/programming-fundamentals/pf-01-camera-silence.txt
export const pf_01_cameraSilenceResult: SilenceDetectionResult = {
  segments: [
  {
    "start": 0,
    "end": 1.874812,
    "type": "silence"
  },
  {
    "start": 1.874812,
    "end": 1.934958,
    "type": "speech"
  },
  {
    "start": 1.934958,
    "end": 3.156167,
    "type": "silence"
  },
  {
    "start": 3.156167,
    "end": 105.061125,
    "type": "speech"
  },
  {
    "start": 105.061125,
    "end": 106.741604,
    "type": "silence"
  },
  {
    "start": 106.741604,
    "end": 204.650854,
    "type": "speech"
  },
  {
    "start": 204.650854,
    "end": 205.271333,
    "type": "silence"
  },
  {
    "start": 205.271333,
    "end": 239.53575,
    "type": "speech"
  },
  {
    "start": 239.53575,
    "end": 240.357542,
    "type": "silence"
  },
  {
    "start": 240.357542,
    "end": 300.993292,
    "type": "speech"
  },
  {
    "start": 300.993292,
    "end": 301.508542,
    "type": "silence"
  },
  {
    "start": 301.508542,
    "end": 301.508938,
    "type": "speech"
  },
  {
    "start": 301.508938,
    "end": 302.201646,
    "type": "silence"
  },
  {
    "start": 302.201646,
    "end": 304.9775,
    "type": "speech"
  },
  {
    "start": 304.9775,
    "end": 306.105458,
    "type": "silence"
  },
  {
    "start": 306.105458,
    "end": 322.761729,
    "type": "speech"
  },
  {
    "start": 322.761729,
    "end": 323.576167,
    "type": "silence"
  },
  {
    "start": 323.576167,
    "end": 337.579833,
    "type": "speech"
  },
  {
    "start": 337.579833,
    "end": 338.080833,
    "type": "silence"
  },
  {
    "start": 338.080833,
    "end": 343.493458,
    "type": "speech"
  },
  {
    "start": 343.493458,
    "end": 344.69975,
    "type": "silence"
  },
  {
    "start": 344.69975,
    "end": 373.193729,
    "type": "speech"
  },
  {
    "start": 373.193729,
    "end": 374.275125,
    "type": "silence"
  },
  {
    "start": 374.275125,
    "end": 434.724396,
    "type": "speech"
  },
  {
    "start": 434.724396,
    "end": 435.25475,
    "type": "silence"
  },
  {
    "start": 435.25475,
    "end": 502.294083,
    "type": "speech"
  },
  {
    "start": 502.294083,
    "end": 502.931229,
    "type": "silence"
  },
  {
    "start": 502.931229,
    "end": 516.121021,
    "type": "speech"
  },
  {
    "start": 516.121021,
    "end": 516.624,
    "type": "silence"
  },
  {
    "start": 516.624,
    "end": 519.494792,
    "type": "speech"
  },
  {
    "start": 519.494792,
    "end": 520.126417,
    "type": "silence"
  },
  {
    "start": 520.126417,
    "end": 589.431125,
    "type": "speech"
  },
  {
    "start": 589.431125,
    "end": 590.244312,
    "type": "silence"
  },
  {
    "start": 590.244312,
    "end": 622.781604,
    "type": "speech"
  },
  {
    "start": 622.781604,
    "end": 623.332104,
    "type": "silence"
  },
  {
    "start": 623.332104,
    "end": 736.832875,
    "type": "speech"
  },
  {
    "start": 736.832875,
    "end": 737.643833,
    "type": "silence"
  },
  {
    "start": 737.643833,
    "end": 787.165479,
    "type": "speech"
  },
  {
    "start": 787.165479,
    "end": 787.670958,
    "type": "silence"
  },
  {
    "start": 787.670958,
    "end": 804.360083,
    "type": "speech"
  },
  {
    "start": 804.360083,
    "end": 804.892521,
    "type": "silence"
  },
  {
    "start": 804.892521,
    "end": 829.143958,
    "type": "speech"
  },
  {
    "start": 829.143958,
    "end": 830.176542,
    "type": "silence"
  },
  {
    "start": 830.176542,
    "end": 852.616833,
    "type": "speech"
  },
  {
    "start": 852.616833,
    "end": 853.134708,
    "type": "silence"
  },
  {
    "start": 853.134708,
    "end": 914.573312,
    "type": "speech"
  },
  {
    "start": 914.573312,
    "end": 915.484583,
    "type": "silence"
  },
  {
    "start": 915.484583,
    "end": 1002.979104,
    "type": "speech"
  },
  {
    "start": 1002.979104,
    "end": 1003.573229,
    "type": "silence"
  },
  {
    "start": 1003.573229,
    "end": 1015.608187,
    "type": "speech"
  },
  {
    "start": 1015.608187,
    "end": 1016.549458,
    "type": "silence"
  },
  {
    "start": 1016.549458,
    "end": 1039.436229,
    "type": "speech"
  },
  {
    "start": 1039.436229,
    "end": 1040.03175,
    "type": "silence"
  },
  {
    "start": 1040.03175,
    "end": 1059.006021,
    "type": "speech"
  },
  {
    "start": 1059.006021,
    "end": 1059.540396,
    "type": "silence"
  },
  {
    "start": 1059.540396,
    "end": 1059.8055,
    "type": "speech"
  },
  {
    "start": 1059.8055,
    "end": 1060.315354,
    "type": "silence"
  },
  {
    "start": 1060.315354,
    "end": 1101.178417,
    "type": "speech"
  },
  {
    "start": 1101.178417,
    "end": 1101.680958,
    "type": "silence"
  },
  {
    "start": 1101.680958,
    "end": 1130.622437,
    "type": "speech"
  },
  {
    "start": 1130.622437,
    "end": 1131.941958,
    "type": "silence"
  },
  {
    "start": 1131.941958,
    "end": 1148.804646,
    "type": "speech"
  },
  {
    "start": 1148.804646,
    "end": 1149.332,
    "type": "silence"
  },
  {
    "start": 1149.332,
    "end": 1158.156896,
    "type": "speech"
  },
  {
    "start": 1158.156896,
    "end": 1158.798437,
    "type": "silence"
  },
  {
    "start": 1158.798437,
    "end": 1226.120521,
    "type": "speech"
  },
  {
    "start": 1226.120521,
    "end": 1227.305792,
    "type": "silence"
  },
  {
    "start": 1227.305792,
    "end": 1279.091542,
    "type": "speech"
  },
  {
    "start": 1279.091542,
    "end": 1279.811521,
    "type": "silence"
  },
  {
    "start": 1279.811521,
    "end": 1325.3775,
    "type": "speech"
  },
  {
    "start": 1325.3775,
    "end": 1326.246583,
    "type": "silence"
  },
  {
    "start": 1326.246583,
    "end": 1333.878167,
    "type": "speech"
  },
  {
    "start": 1333.878167,
    "end": 1335.279729,
    "type": "silence"
  },
  {
    "start": 1335.279729,
    "end": 1400.425646,
    "type": "speech"
  },
  {
    "start": 1400.425646,
    "end": 1400.999854,
    "type": "silence"
  },
  {
    "start": 1400.999854,
    "end": 1412.425229,
    "type": "speech"
  },
  {
    "start": 1412.425229,
    "end": 1413.283854,
    "type": "silence"
  },
  {
    "start": 1413.283854,
    "end": 1413.902125,
    "type": "speech"
  },
  {
    "start": 1413.902125,
    "end": 1414.865312,
    "type": "silence"
  },
  {
    "start": 1414.865312,
    "end": 1474.450958,
    "type": "speech"
  },
  {
    "start": 1474.450958,
    "end": 1475.429208,
    "type": "silence"
  },
  {
    "start": 1475.429208,
    "end": 1483.28625,
    "type": "speech"
  },
  {
    "start": 1483.28625,
    "end": 1484.112458,
    "type": "silence"
  },
  {
    "start": 1484.112458,
    "end": 1513.377937,
    "type": "speech"
  },
  {
    "start": 1513.377937,
    "end": 1513.934917,
    "type": "silence"
  },
  {
    "start": 1513.934917,
    "end": 1519.846812,
    "type": "speech"
  },
  {
    "start": 1519.846812,
    "end": 1520.360146,
    "type": "silence"
  },
  {
    "start": 1520.360146,
    "end": 1525.834583,
    "type": "speech"
  },
  {
    "start": 1525.834583,
    "end": 1526.525437,
    "type": "silence"
  },
  {
    "start": 1526.525437,
    "end": 1526.525938,
    "type": "speech"
  },
  {
    "start": 1526.525938,
    "end": 1527.055042,
    "type": "silence"
  },
  {
    "start": 1527.055042,
    "end": 1528.883187,
    "type": "speech"
  },
  {
    "start": 1528.883187,
    "end": 1530.211937,
    "type": "silence"
  },
  {
    "start": 1530.211937,
    "end": 1530.883812,
    "type": "speech"
  },
  {
    "start": 1530.883812,
    "end": 1531.511792,
    "type": "silence"
  },
  {
    "start": 1531.511792,
    "end": 1547.75,
    "type": "speech"
  },
  {
    "start": 1547.75,
    "end": 1548.394958,
    "type": "silence"
  },
  {
    "start": 1548.394958,
    "end": 1612.753,
    "type": "speech"
  },
  {
    "start": 1612.753,
    "end": 1613.513625,
    "type": "silence"
  },
  {
    "start": 1613.513625,
    "end": 1616.812062,
    "type": "speech"
  },
  {
    "start": 1616.812062,
    "end": 1617.370646,
    "type": "silence"
  },
  {
    "start": 1617.370646,
    "end": 1661.683396,
    "type": "speech"
  },
  {
    "start": 1661.683396,
    "end": 1662.377646,
    "type": "silence"
  },
  {
    "start": 1662.377646,
    "end": 1719.664375,
    "type": "speech"
  },
  {
    "start": 1719.664375,
    "end": 1720.509042,
    "type": "silence"
  },
  {
    "start": 1720.509042,
    "end": 1741.1975,
    "type": "speech"
  },
  {
    "start": 1741.1975,
    "end": 1741.991854,
    "type": "silence"
  },
  {
    "start": 1741.991854,
    "end": 1763.650729,
    "type": "speech"
  },
  {
    "start": 1763.650729,
    "end": 1764.680854,
    "type": "silence"
  },
  {
    "start": 1764.680854,
    "end": 1764.680896,
    "type": "speech"
  },
  {
    "start": 1764.680896,
    "end": 1766.04,
    "type": "silence"
  },
  {
    "start": 1766.04,
    "end": 1771.04,
    "type": "speech"
  }
],
  totalDuration: 1771.04,
  speechDuration: 1725.43,
  silenceDuration: 45.61,
  silencePercentage: 2.6,
};

// Edit decision list (what to keep/remove)
export const pf_01_cameraEdl: EditDecisionList = {
  sourceFile: "footage/programming-fundamentals/pf-01-camera-silence.txt",
  cuts: [
  {
    "originalStart": 1.7748119999999998,
    "originalEnd": 2.084958,
    "newStart": 0,
    "newEnd": 0.31014600000000003,
    "type": "keep"
  },
  {
    "originalStart": 3.056167,
    "originalEnd": 105.21112500000001,
    "newStart": 0.31014600000000003,
    "newEnd": 102.46510400000001,
    "type": "keep"
  },
  {
    "originalStart": 106.641604,
    "originalEnd": 204.80085400000002,
    "newStart": 102.46510400000001,
    "newEnd": 200.62435400000004,
    "type": "keep"
  },
  {
    "originalStart": 205.171333,
    "originalEnd": 239.68575,
    "newStart": 200.62435400000004,
    "newEnd": 235.13877100000005,
    "type": "keep"
  },
  {
    "originalStart": 240.257542,
    "originalEnd": 301.143292,
    "newStart": 235.13877100000005,
    "newEnd": 296.02452100000005,
    "type": "keep"
  },
  {
    "originalStart": 301.40854199999995,
    "originalEnd": 301.658938,
    "newStart": 296.02452100000005,
    "newEnd": 296.2749170000001,
    "type": "keep"
  },
  {
    "originalStart": 302.10164599999996,
    "originalEnd": 305.1275,
    "newStart": 296.2749170000001,
    "newEnd": 299.3007710000001,
    "type": "keep"
  },
  {
    "originalStart": 306.005458,
    "originalEnd": 322.911729,
    "newStart": 299.3007710000001,
    "newEnd": 316.2070420000001,
    "type": "keep"
  },
  {
    "originalStart": 323.476167,
    "originalEnd": 337.729833,
    "newStart": 316.2070420000001,
    "newEnd": 330.4607080000001,
    "type": "keep"
  },
  {
    "originalStart": 337.98083299999996,
    "originalEnd": 343.64345799999995,
    "newStart": 330.4607080000001,
    "newEnd": 336.1233330000001,
    "type": "keep"
  },
  {
    "originalStart": 344.59975,
    "originalEnd": 373.343729,
    "newStart": 336.1233330000001,
    "newEnd": 364.86731200000014,
    "type": "keep"
  },
  {
    "originalStart": 374.175125,
    "originalEnd": 434.874396,
    "newStart": 364.86731200000014,
    "newEnd": 425.56658300000015,
    "type": "keep"
  },
  {
    "originalStart": 435.15475,
    "originalEnd": 502.444083,
    "newStart": 425.56658300000015,
    "newEnd": 492.85591600000015,
    "type": "keep"
  },
  {
    "originalStart": 502.83122899999995,
    "originalEnd": 516.271021,
    "newStart": 492.85591600000015,
    "newEnd": 506.2957080000002,
    "type": "keep"
  },
  {
    "originalStart": 516.524,
    "originalEnd": 519.6447919999999,
    "newStart": 506.2957080000002,
    "newEnd": 509.41650000000016,
    "type": "keep"
  },
  {
    "originalStart": 520.0264169999999,
    "originalEnd": 589.5811249999999,
    "newStart": 509.41650000000016,
    "newEnd": 578.9712080000002,
    "type": "keep"
  },
  {
    "originalStart": 590.144312,
    "originalEnd": 622.931604,
    "newStart": 578.9712080000002,
    "newEnd": 611.7585000000001,
    "type": "keep"
  },
  {
    "originalStart": 623.2321039999999,
    "originalEnd": 736.9828749999999,
    "newStart": 611.7585000000001,
    "newEnd": 725.5092710000001,
    "type": "keep"
  },
  {
    "originalStart": 737.543833,
    "originalEnd": 787.315479,
    "newStart": 725.5092710000001,
    "newEnd": 775.2809170000002,
    "type": "keep"
  },
  {
    "originalStart": 787.570958,
    "originalEnd": 804.510083,
    "newStart": 775.2809170000002,
    "newEnd": 792.2200420000001,
    "type": "keep"
  },
  {
    "originalStart": 804.792521,
    "originalEnd": 829.293958,
    "newStart": 792.2200420000001,
    "newEnd": 816.7214790000002,
    "type": "keep"
  },
  {
    "originalStart": 830.076542,
    "originalEnd": 852.766833,
    "newStart": 816.7214790000002,
    "newEnd": 839.4117700000002,
    "type": "keep"
  },
  {
    "originalStart": 853.034708,
    "originalEnd": 914.723312,
    "newStart": 839.4117700000002,
    "newEnd": 901.1003740000001,
    "type": "keep"
  },
  {
    "originalStart": 915.384583,
    "originalEnd": 1003.129104,
    "newStart": 901.1003740000001,
    "newEnd": 988.8448950000001,
    "type": "keep"
  },
  {
    "originalStart": 1003.473229,
    "originalEnd": 1015.758187,
    "newStart": 988.8448950000001,
    "newEnd": 1001.1298530000001,
    "type": "keep"
  },
  {
    "originalStart": 1016.4494579999999,
    "originalEnd": 1039.586229,
    "newStart": 1001.1298530000001,
    "newEnd": 1024.2666240000003,
    "type": "keep"
  },
  {
    "originalStart": 1039.9317500000002,
    "originalEnd": 1059.156021,
    "newStart": 1024.2666240000003,
    "newEnd": 1043.4908950000001,
    "type": "keep"
  },
  {
    "originalStart": 1059.4403960000002,
    "originalEnd": 1059.9555,
    "newStart": 1043.4908950000001,
    "newEnd": 1044.005999,
    "type": "keep"
  },
  {
    "originalStart": 1060.2153540000002,
    "originalEnd": 1101.3284170000002,
    "newStart": 1044.005999,
    "newEnd": 1085.119062,
    "type": "keep"
  },
  {
    "originalStart": 1101.580958,
    "originalEnd": 1130.772437,
    "newStart": 1085.119062,
    "newEnd": 1114.310541,
    "type": "keep"
  },
  {
    "originalStart": 1131.8419580000002,
    "originalEnd": 1148.9546460000001,
    "newStart": 1114.310541,
    "newEnd": 1131.423229,
    "type": "keep"
  },
  {
    "originalStart": 1149.2320000000002,
    "originalEnd": 1158.306896,
    "newStart": 1131.423229,
    "newEnd": 1140.4981249999998,
    "type": "keep"
  },
  {
    "originalStart": 1158.698437,
    "originalEnd": 1226.2705210000001,
    "newStart": 1140.4981249999998,
    "newEnd": 1208.070209,
    "type": "keep"
  },
  {
    "originalStart": 1227.2057920000002,
    "originalEnd": 1279.241542,
    "newStart": 1208.070209,
    "newEnd": 1260.1059589999998,
    "type": "keep"
  },
  {
    "originalStart": 1279.7115210000002,
    "originalEnd": 1325.5275000000001,
    "newStart": 1260.1059589999998,
    "newEnd": 1305.9219379999997,
    "type": "keep"
  },
  {
    "originalStart": 1326.1465830000002,
    "originalEnd": 1334.0281670000002,
    "newStart": 1305.9219379999997,
    "newEnd": 1313.8035219999997,
    "type": "keep"
  },
  {
    "originalStart": 1335.1797290000002,
    "originalEnd": 1400.575646,
    "newStart": 1313.8035219999997,
    "newEnd": 1379.1994389999995,
    "type": "keep"
  },
  {
    "originalStart": 1400.899854,
    "originalEnd": 1412.575229,
    "newStart": 1379.1994389999995,
    "newEnd": 1390.8748139999996,
    "type": "keep"
  },
  {
    "originalStart": 1413.183854,
    "originalEnd": 1414.0521250000002,
    "newStart": 1390.8748139999996,
    "newEnd": 1391.7430849999996,
    "type": "keep"
  },
  {
    "originalStart": 1414.765312,
    "originalEnd": 1474.600958,
    "newStart": 1391.7430849999996,
    "newEnd": 1451.5787309999996,
    "type": "keep"
  },
  {
    "originalStart": 1475.329208,
    "originalEnd": 1483.4362500000002,
    "newStart": 1451.5787309999996,
    "newEnd": 1459.6857729999997,
    "type": "keep"
  },
  {
    "originalStart": 1484.0124580000002,
    "originalEnd": 1513.527937,
    "newStart": 1459.6857729999997,
    "newEnd": 1489.2012519999996,
    "type": "keep"
  },
  {
    "originalStart": 1513.8349170000001,
    "originalEnd": 1519.996812,
    "newStart": 1489.2012519999996,
    "newEnd": 1495.3631469999996,
    "type": "keep"
  },
  {
    "originalStart": 1520.260146,
    "originalEnd": 1525.9845830000002,
    "newStart": 1495.3631469999996,
    "newEnd": 1501.0875839999997,
    "type": "keep"
  },
  {
    "originalStart": 1526.425437,
    "originalEnd": 1526.675938,
    "newStart": 1501.0875839999997,
    "newEnd": 1501.3380849999996,
    "type": "keep"
  },
  {
    "originalStart": 1526.955042,
    "originalEnd": 1529.033187,
    "newStart": 1501.3380849999996,
    "newEnd": 1503.4162299999996,
    "type": "keep"
  },
  {
    "originalStart": 1530.1119370000001,
    "originalEnd": 1531.0338120000001,
    "newStart": 1503.4162299999996,
    "newEnd": 1504.3381049999996,
    "type": "keep"
  },
  {
    "originalStart": 1531.411792,
    "originalEnd": 1547.9,
    "newStart": 1504.3381049999996,
    "newEnd": 1520.8263129999996,
    "type": "keep"
  },
  {
    "originalStart": 1548.2949580000002,
    "originalEnd": 1612.903,
    "newStart": 1520.8263129999996,
    "newEnd": 1585.4343549999994,
    "type": "keep"
  },
  {
    "originalStart": 1613.4136250000001,
    "originalEnd": 1616.962062,
    "newStart": 1585.4343549999994,
    "newEnd": 1588.9827919999993,
    "type": "keep"
  },
  {
    "originalStart": 1617.2706460000002,
    "originalEnd": 1661.833396,
    "newStart": 1588.9827919999993,
    "newEnd": 1633.5455419999992,
    "type": "keep"
  },
  {
    "originalStart": 1662.277646,
    "originalEnd": 1719.8143750000002,
    "newStart": 1633.5455419999992,
    "newEnd": 1691.0822709999993,
    "type": "keep"
  },
  {
    "originalStart": 1720.409042,
    "originalEnd": 1741.3475,
    "newStart": 1691.0822709999993,
    "newEnd": 1712.0207289999994,
    "type": "keep"
  },
  {
    "originalStart": 1741.8918540000002,
    "originalEnd": 1763.800729,
    "newStart": 1712.0207289999994,
    "newEnd": 1733.9296039999992,
    "type": "keep"
  },
  {
    "originalStart": 1764.580854,
    "originalEnd": 1764.8308960000002,
    "newStart": 1733.9296039999992,
    "newEnd": 1734.1796459999994,
    "type": "keep"
  },
  {
    "originalStart": 1765.94,
    "originalEnd": 1771.04,
    "newStart": 1734.1796459999994,
    "newEnd": 1739.2796459999993,
    "type": "keep"
  }
],
  originalDuration: 1771.04,
  outputDuration: 1739.28,
  timeSaved: 31.76,
};

// Remotion sequences at 30 fps
export const pf_01_cameraSequences = edlToRemotionSequences(pf_01_cameraEdl, 30);

// Summary
// Original: 29m 31s
// After cuts: 28m 59s
// Time saved: 0m 31s (1.8%)
