import { SilenceDetectionResult, EditDecisionList, edlToRemotionSequences } from "../silence-types";

// Silence detection result for footage/programming-fundamentals/pf-02-camera-1-silence.txt
export const pf_02_camera_1SilenceResult: SilenceDetectionResult = {
  segments: [
  {
    "start": 0,
    "end": 2.363854,
    "type": "silence"
  },
  {
    "start": 2.363854,
    "end": 28.132042,
    "type": "speech"
  },
  {
    "start": 28.132042,
    "end": 28.646208,
    "type": "silence"
  },
  {
    "start": 28.646208,
    "end": 39.937646,
    "type": "speech"
  },
  {
    "start": 39.937646,
    "end": 40.781646,
    "type": "silence"
  },
  {
    "start": 40.781646,
    "end": 108.798375,
    "type": "speech"
  },
  {
    "start": 108.798375,
    "end": 109.365396,
    "type": "silence"
  },
  {
    "start": 109.365396,
    "end": 120.806417,
    "type": "speech"
  },
  {
    "start": 120.806417,
    "end": 121.324896,
    "type": "silence"
  },
  {
    "start": 121.324896,
    "end": 123.467312,
    "type": "speech"
  },
  {
    "start": 123.467312,
    "end": 123.969917,
    "type": "silence"
  },
  {
    "start": 123.969917,
    "end": 132.676521,
    "type": "speech"
  },
  {
    "start": 132.676521,
    "end": 133.497875,
    "type": "silence"
  },
  {
    "start": 133.497875,
    "end": 135.043958,
    "type": "speech"
  },
  {
    "start": 135.043958,
    "end": 136.965875,
    "type": "silence"
  },
  {
    "start": 136.965875,
    "end": 137.811667,
    "type": "speech"
  },
  {
    "start": 137.811667,
    "end": 139.408375,
    "type": "silence"
  },
  {
    "start": 139.408375,
    "end": 179.238708,
    "type": "speech"
  },
  {
    "start": 179.238708,
    "end": 180.034229,
    "type": "silence"
  },
  {
    "start": 180.034229,
    "end": 229.174646,
    "type": "speech"
  },
  {
    "start": 229.174646,
    "end": 229.676125,
    "type": "silence"
  },
  {
    "start": 229.676125,
    "end": 234.029583,
    "type": "speech"
  },
  {
    "start": 234.029583,
    "end": 237.058354,
    "type": "silence"
  },
  {
    "start": 237.058354,
    "end": 245.090812,
    "type": "speech"
  },
  {
    "start": 245.090812,
    "end": 245.591771,
    "type": "silence"
  },
  {
    "start": 245.591771,
    "end": 266.523875,
    "type": "speech"
  },
  {
    "start": 266.523875,
    "end": 267.100542,
    "type": "silence"
  },
  {
    "start": 267.100542,
    "end": 270.791938,
    "type": "speech"
  },
  {
    "start": 270.791938,
    "end": 271.640979,
    "type": "silence"
  },
  {
    "start": 271.640979,
    "end": 276.792854,
    "type": "speech"
  },
  {
    "start": 276.792854,
    "end": 277.579979,
    "type": "silence"
  },
  {
    "start": 277.579979,
    "end": 355.029583,
    "type": "speech"
  },
  {
    "start": 355.029583,
    "end": 355.788625,
    "type": "silence"
  },
  {
    "start": 355.788625,
    "end": 376.39075,
    "type": "speech"
  },
  {
    "start": 376.39075,
    "end": 377.612292,
    "type": "silence"
  },
  {
    "start": 377.612292,
    "end": 387.393854,
    "type": "speech"
  },
  {
    "start": 387.393854,
    "end": 388.090396,
    "type": "silence"
  },
  {
    "start": 388.090396,
    "end": 414.652833,
    "type": "speech"
  },
  {
    "start": 414.652833,
    "end": 415.360146,
    "type": "silence"
  },
  {
    "start": 415.360146,
    "end": 429.357208,
    "type": "speech"
  },
  {
    "start": 429.357208,
    "end": 431.605896,
    "type": "silence"
  },
  {
    "start": 431.605896,
    "end": 432.557521,
    "type": "speech"
  },
  {
    "start": 432.557521,
    "end": 433.561187,
    "type": "silence"
  },
  {
    "start": 433.561187,
    "end": 433.561208,
    "type": "speech"
  },
  {
    "start": 433.561208,
    "end": 434.184729,
    "type": "silence"
  },
  {
    "start": 434.184729,
    "end": 440.390688,
    "type": "speech"
  },
  {
    "start": 440.390688,
    "end": 441.240979,
    "type": "silence"
  },
  {
    "start": 441.240979,
    "end": 441.263917,
    "type": "speech"
  },
  {
    "start": 441.263917,
    "end": 442.131062,
    "type": "silence"
  },
  {
    "start": 442.131062,
    "end": 447.607354,
    "type": "speech"
  },
  {
    "start": 447.607354,
    "end": 448.660687,
    "type": "silence"
  },
  {
    "start": 448.660687,
    "end": 509.553958,
    "type": "speech"
  },
  {
    "start": 509.553958,
    "end": 510.245583,
    "type": "silence"
  },
  {
    "start": 510.245583,
    "end": 549.828667,
    "type": "speech"
  },
  {
    "start": 549.828667,
    "end": 550.394667,
    "type": "silence"
  },
  {
    "start": 550.394667,
    "end": 563.771896,
    "type": "speech"
  },
  {
    "start": 563.771896,
    "end": 564.543104,
    "type": "silence"
  },
  {
    "start": 564.543104,
    "end": 586.633833,
    "type": "speech"
  },
  {
    "start": 586.633833,
    "end": 587.540625,
    "type": "silence"
  },
  {
    "start": 587.540625,
    "end": 610.720687,
    "type": "speech"
  },
  {
    "start": 610.720687,
    "end": 611.244646,
    "type": "silence"
  },
  {
    "start": 611.244646,
    "end": 615.3755,
    "type": "speech"
  },
  {
    "start": 615.3755,
    "end": 615.910604,
    "type": "silence"
  },
  {
    "start": 615.910604,
    "end": 644.194937,
    "type": "speech"
  },
  {
    "start": 644.194937,
    "end": 644.931271,
    "type": "silence"
  },
  {
    "start": 644.931271,
    "end": 645.867833,
    "type": "speech"
  },
  {
    "start": 645.867833,
    "end": 646.561937,
    "type": "silence"
  },
  {
    "start": 646.561937,
    "end": 649.127313,
    "type": "speech"
  },
  {
    "start": 649.127313,
    "end": 649.7075,
    "type": "silence"
  },
  {
    "start": 649.7075,
    "end": 652.408021,
    "type": "speech"
  },
  {
    "start": 652.408021,
    "end": 653.309292,
    "type": "silence"
  },
  {
    "start": 653.309292,
    "end": 656.572979,
    "type": "speech"
  },
  {
    "start": 656.572979,
    "end": 657.141271,
    "type": "silence"
  },
  {
    "start": 657.141271,
    "end": 670.437729,
    "type": "speech"
  },
  {
    "start": 670.437729,
    "end": 670.947187,
    "type": "silence"
  },
  {
    "start": 670.947187,
    "end": 671.714187,
    "type": "speech"
  },
  {
    "start": 671.714187,
    "end": 672.337583,
    "type": "silence"
  },
  {
    "start": 672.337583,
    "end": 672.436354,
    "type": "speech"
  },
  {
    "start": 672.436354,
    "end": 673.071542,
    "type": "silence"
  },
  {
    "start": 673.071542,
    "end": 682.567771,
    "type": "speech"
  },
  {
    "start": 682.567771,
    "end": 683.304562,
    "type": "silence"
  },
  {
    "start": 683.304562,
    "end": 684.692958,
    "type": "speech"
  },
  {
    "start": 684.692958,
    "end": 686.377604,
    "type": "silence"
  },
  {
    "start": 686.377604,
    "end": 688.926271,
    "type": "speech"
  },
  {
    "start": 688.926271,
    "end": 691.373187,
    "type": "silence"
  },
  {
    "start": 691.373187,
    "end": 691.878458,
    "type": "speech"
  },
  {
    "start": 691.878458,
    "end": 692.564833,
    "type": "silence"
  },
  {
    "start": 692.564833,
    "end": 693.085458,
    "type": "speech"
  },
  {
    "start": 693.085458,
    "end": 693.938333,
    "type": "silence"
  },
  {
    "start": 693.938333,
    "end": 698.377417,
    "type": "speech"
  },
  {
    "start": 698.377417,
    "end": 699.491312,
    "type": "silence"
  },
  {
    "start": 699.491312,
    "end": 700.917937,
    "type": "speech"
  },
  {
    "start": 700.917937,
    "end": 701.457,
    "type": "silence"
  },
  {
    "start": 701.457,
    "end": 702.915188,
    "type": "speech"
  },
  {
    "start": 702.915188,
    "end": 708.816792,
    "type": "silence"
  },
  {
    "start": 708.816792,
    "end": 709.078,
    "type": "speech"
  },
  {
    "start": 709.078,
    "end": 710.955021,
    "type": "silence"
  },
  {
    "start": 710.955021,
    "end": 714.248146,
    "type": "speech"
  },
  {
    "start": 714.248146,
    "end": 715.050167,
    "type": "silence"
  },
  {
    "start": 715.050167,
    "end": 717.436438,
    "type": "speech"
  },
  {
    "start": 717.436438,
    "end": 718.540854,
    "type": "silence"
  },
  {
    "start": 718.540854,
    "end": 721.940792,
    "type": "speech"
  },
  {
    "start": 721.940792,
    "end": 723.398312,
    "type": "silence"
  },
  {
    "start": 723.398312,
    "end": 724.99875,
    "type": "speech"
  },
  {
    "start": 724.99875,
    "end": 727.421083,
    "type": "silence"
  },
  {
    "start": 727.421083,
    "end": 737.726292,
    "type": "speech"
  },
  {
    "start": 737.726292,
    "end": 738.697271,
    "type": "silence"
  },
  {
    "start": 738.697271,
    "end": 749.773958,
    "type": "speech"
  },
  {
    "start": 749.773958,
    "end": 751.244667,
    "type": "silence"
  },
  {
    "start": 751.244667,
    "end": 751.788229,
    "type": "speech"
  },
  {
    "start": 751.788229,
    "end": 752.333896,
    "type": "silence"
  },
  {
    "start": 752.333896,
    "end": 752.338437,
    "type": "speech"
  },
  {
    "start": 752.338437,
    "end": 753.013208,
    "type": "silence"
  },
  {
    "start": 753.013208,
    "end": 762.466958,
    "type": "speech"
  },
  {
    "start": 762.466958,
    "end": 763.350812,
    "type": "silence"
  },
  {
    "start": 763.350812,
    "end": 767.004,
    "type": "speech"
  },
  {
    "start": 767.004,
    "end": 767.814167,
    "type": "silence"
  },
  {
    "start": 767.814167,
    "end": 767.81425,
    "type": "speech"
  },
  {
    "start": 767.81425,
    "end": 770.005396,
    "type": "silence"
  },
  {
    "start": 770.005396,
    "end": 778.058771,
    "type": "speech"
  },
  {
    "start": 778.058771,
    "end": 778.626667,
    "type": "silence"
  },
  {
    "start": 778.626667,
    "end": 778.840917,
    "type": "speech"
  },
  {
    "start": 778.840917,
    "end": 779.429896,
    "type": "silence"
  },
  {
    "start": 779.429896,
    "end": 783.277,
    "type": "speech"
  },
  {
    "start": 783.277,
    "end": 783.815042,
    "type": "silence"
  },
  {
    "start": 783.815042,
    "end": 785.381312,
    "type": "speech"
  },
  {
    "start": 785.381312,
    "end": 786.340646,
    "type": "silence"
  },
  {
    "start": 786.340646,
    "end": 791.529125,
    "type": "speech"
  },
  {
    "start": 791.529125,
    "end": 792.375688,
    "type": "silence"
  },
  {
    "start": 792.375688,
    "end": 795.003417,
    "type": "speech"
  },
  {
    "start": 795.003417,
    "end": 795.555646,
    "type": "silence"
  },
  {
    "start": 795.555646,
    "end": 796.329521,
    "type": "speech"
  },
  {
    "start": 796.329521,
    "end": 797.534833,
    "type": "silence"
  },
  {
    "start": 797.534833,
    "end": 798.812979,
    "type": "speech"
  },
  {
    "start": 798.812979,
    "end": 799.604458,
    "type": "silence"
  },
  {
    "start": 799.604458,
    "end": 806.139375,
    "type": "speech"
  },
  {
    "start": 806.139375,
    "end": 806.647521,
    "type": "silence"
  },
  {
    "start": 806.647521,
    "end": 807.665021,
    "type": "speech"
  },
  {
    "start": 807.665021,
    "end": 808.590208,
    "type": "silence"
  },
  {
    "start": 808.590208,
    "end": 813.934042,
    "type": "speech"
  },
  {
    "start": 813.934042,
    "end": 814.481146,
    "type": "silence"
  },
  {
    "start": 814.481146,
    "end": 821.074687,
    "type": "speech"
  },
  {
    "start": 821.074687,
    "end": 822.132708,
    "type": "silence"
  },
  {
    "start": 822.132708,
    "end": 825.256,
    "type": "speech"
  },
  {
    "start": 825.256,
    "end": 825.775688,
    "type": "silence"
  },
  {
    "start": 825.775688,
    "end": 829.9395,
    "type": "speech"
  },
  {
    "start": 829.9395,
    "end": 830.470021,
    "type": "silence"
  },
  {
    "start": 830.470021,
    "end": 894.218333,
    "type": "speech"
  },
  {
    "start": 894.218333,
    "end": 895.114687,
    "type": "silence"
  },
  {
    "start": 895.114687,
    "end": 946.242958,
    "type": "speech"
  },
  {
    "start": 946.242958,
    "end": 946.957562,
    "type": "silence"
  },
  {
    "start": 946.957562,
    "end": 955.554062,
    "type": "speech"
  },
  {
    "start": 955.554062,
    "end": 956.054625,
    "type": "silence"
  },
  {
    "start": 956.054625,
    "end": 965.164729,
    "type": "speech"
  },
  {
    "start": 965.164729,
    "end": 965.980667,
    "type": "silence"
  },
  {
    "start": 965.980667,
    "end": 990.102625,
    "type": "speech"
  },
  {
    "start": 990.102625,
    "end": 990.893792,
    "type": "silence"
  },
  {
    "start": 990.893792,
    "end": 1027.281667,
    "type": "speech"
  },
  {
    "start": 1027.281667,
    "end": 1028.190646,
    "type": "silence"
  },
  {
    "start": 1028.190646,
    "end": 1049.860229,
    "type": "speech"
  },
  {
    "start": 1049.860229,
    "end": 1050.379187,
    "type": "silence"
  },
  {
    "start": 1050.379187,
    "end": 1050.907667,
    "type": "speech"
  },
  {
    "start": 1050.907667,
    "end": 1051.664771,
    "type": "silence"
  },
  {
    "start": 1051.664771,
    "end": 1067.780896,
    "type": "speech"
  },
  {
    "start": 1067.780896,
    "end": 1068.579417,
    "type": "silence"
  },
  {
    "start": 1068.579417,
    "end": 1069.973417,
    "type": "speech"
  },
  {
    "start": 1069.973417,
    "end": 1070.605708,
    "type": "silence"
  },
  {
    "start": 1070.605708,
    "end": 1072.933875,
    "type": "speech"
  },
  {
    "start": 1072.933875,
    "end": 1073.4715,
    "type": "silence"
  },
  {
    "start": 1073.4715,
    "end": 1076.467854,
    "type": "speech"
  },
  {
    "start": 1076.467854,
    "end": 1076.985125,
    "type": "silence"
  },
  {
    "start": 1076.985125,
    "end": 1079.103521,
    "type": "speech"
  },
  {
    "start": 1079.103521,
    "end": 1079.618083,
    "type": "silence"
  },
  {
    "start": 1079.618083,
    "end": 1100.46675,
    "type": "speech"
  },
  {
    "start": 1100.46675,
    "end": 1101.076667,
    "type": "silence"
  },
  {
    "start": 1101.076667,
    "end": 1110.316396,
    "type": "speech"
  },
  {
    "start": 1110.316396,
    "end": 1111.229042,
    "type": "silence"
  },
  {
    "start": 1111.229042,
    "end": 1112.771917,
    "type": "speech"
  },
  {
    "start": 1112.771917,
    "end": 1114.005688,
    "type": "silence"
  },
  {
    "start": 1114.005688,
    "end": 1115.677229,
    "type": "speech"
  },
  {
    "start": 1115.677229,
    "end": 1116.766875,
    "type": "silence"
  },
  {
    "start": 1116.766875,
    "end": 1117.573417,
    "type": "speech"
  },
  {
    "start": 1117.573417,
    "end": 1118.453979,
    "type": "silence"
  },
  {
    "start": 1118.453979,
    "end": 1123.656667,
    "type": "speech"
  },
  {
    "start": 1123.656667,
    "end": 1124.554437,
    "type": "silence"
  },
  {
    "start": 1124.554437,
    "end": 1128.450833,
    "type": "speech"
  },
  {
    "start": 1128.450833,
    "end": 1130.088708,
    "type": "silence"
  },
  {
    "start": 1130.088708,
    "end": 1135.121542,
    "type": "speech"
  },
  {
    "start": 1135.121542,
    "end": 1135.651729,
    "type": "silence"
  },
  {
    "start": 1135.651729,
    "end": 1135.736875,
    "type": "speech"
  },
  {
    "start": 1135.736875,
    "end": 1136.753854,
    "type": "silence"
  },
  {
    "start": 1136.753854,
    "end": 1138.505042,
    "type": "speech"
  },
  {
    "start": 1138.505042,
    "end": 1140.21825,
    "type": "silence"
  },
  {
    "start": 1140.21825,
    "end": 1178.720437,
    "type": "speech"
  },
  {
    "start": 1178.720437,
    "end": 1179.700187,
    "type": "silence"
  },
  {
    "start": 1179.700187,
    "end": 1180.890542,
    "type": "speech"
  },
  {
    "start": 1180.890542,
    "end": 1181.692417,
    "type": "silence"
  },
  {
    "start": 1181.692417,
    "end": 1183.811917,
    "type": "speech"
  },
  {
    "start": 1183.811917,
    "end": 1184.499333,
    "type": "silence"
  },
  {
    "start": 1184.499333,
    "end": 1189.276271,
    "type": "speech"
  },
  {
    "start": 1189.276271,
    "end": 1191.683375,
    "type": "silence"
  },
  {
    "start": 1191.683375,
    "end": 1196.204292,
    "type": "speech"
  },
  {
    "start": 1196.204292,
    "end": 1197.200938,
    "type": "silence"
  },
  {
    "start": 1197.200938,
    "end": 1198.407792,
    "type": "speech"
  },
  {
    "start": 1198.407792,
    "end": 1198.953021,
    "type": "silence"
  },
  {
    "start": 1198.953021,
    "end": 1208.871083,
    "type": "speech"
  },
  {
    "start": 1208.871083,
    "end": 1209.477854,
    "type": "silence"
  },
  {
    "start": 1209.477854,
    "end": 1218.057437,
    "type": "speech"
  },
  {
    "start": 1218.057437,
    "end": 1218.891792,
    "type": "silence"
  },
  {
    "start": 1218.891792,
    "end": 1228.792375,
    "type": "speech"
  },
  {
    "start": 1228.792375,
    "end": 1230.244708,
    "type": "silence"
  },
  {
    "start": 1230.244708,
    "end": 1242.685208,
    "type": "speech"
  },
  {
    "start": 1242.685208,
    "end": 1243.269854,
    "type": "silence"
  },
  {
    "start": 1243.269854,
    "end": 1251.890354,
    "type": "speech"
  },
  {
    "start": 1251.890354,
    "end": 1252.393792,
    "type": "silence"
  },
  {
    "start": 1252.393792,
    "end": 1276.896146,
    "type": "speech"
  },
  {
    "start": 1276.896146,
    "end": 1277.415208,
    "type": "silence"
  },
  {
    "start": 1277.415208,
    "end": 1283.439979,
    "type": "speech"
  },
  {
    "start": 1283.439979,
    "end": 1284.123771,
    "type": "silence"
  },
  {
    "start": 1284.123771,
    "end": 1284.393333,
    "type": "speech"
  },
  {
    "start": 1284.393333,
    "end": 1285.432125,
    "type": "silence"
  },
  {
    "start": 1285.432125,
    "end": 1296.397958,
    "type": "speech"
  },
  {
    "start": 1296.397958,
    "end": 1296.952437,
    "type": "silence"
  },
  {
    "start": 1296.952437,
    "end": 1306.866354,
    "type": "speech"
  },
  {
    "start": 1306.866354,
    "end": 1307.419875,
    "type": "silence"
  },
  {
    "start": 1307.419875,
    "end": 1320.170771,
    "type": "speech"
  },
  {
    "start": 1320.170771,
    "end": 1321.223854,
    "type": "silence"
  },
  {
    "start": 1321.223854,
    "end": 1353.03525,
    "type": "speech"
  },
  {
    "start": 1353.03525,
    "end": 1353.589271,
    "type": "silence"
  },
  {
    "start": 1353.589271,
    "end": 1355.160417,
    "type": "speech"
  },
  {
    "start": 1355.160417,
    "end": 1355.863104,
    "type": "silence"
  },
  {
    "start": 1355.863104,
    "end": 1356.659979,
    "type": "speech"
  },
  {
    "start": 1356.659979,
    "end": 1357.168104,
    "type": "silence"
  },
  {
    "start": 1357.168104,
    "end": 1358.148,
    "type": "speech"
  },
  {
    "start": 1358.148,
    "end": 1358.866958,
    "type": "silence"
  },
  {
    "start": 1358.866958,
    "end": 1367.015938,
    "type": "speech"
  },
  {
    "start": 1367.015938,
    "end": 1367.698833,
    "type": "silence"
  },
  {
    "start": 1367.698833,
    "end": 1370.194083,
    "type": "speech"
  },
  {
    "start": 1370.194083,
    "end": 1370.800062,
    "type": "silence"
  },
  {
    "start": 1370.800062,
    "end": 1371.479792,
    "type": "speech"
  },
  {
    "start": 1371.479792,
    "end": 1372.542979,
    "type": "silence"
  },
  {
    "start": 1372.542979,
    "end": 1376.563542,
    "type": "speech"
  },
  {
    "start": 1376.563542,
    "end": 1377.574896,
    "type": "silence"
  },
  {
    "start": 1377.574896,
    "end": 1380.932188,
    "type": "speech"
  },
  {
    "start": 1380.932188,
    "end": 1381.466396,
    "type": "silence"
  },
  {
    "start": 1381.466396,
    "end": 1404.596917,
    "type": "speech"
  },
  {
    "start": 1404.596917,
    "end": 1405.364354,
    "type": "silence"
  },
  {
    "start": 1405.364354,
    "end": 1423.762042,
    "type": "speech"
  },
  {
    "start": 1423.762042,
    "end": 1424.423854,
    "type": "silence"
  },
  {
    "start": 1424.423854,
    "end": 1427.134667,
    "type": "speech"
  },
  {
    "start": 1427.134667,
    "end": 1428.490188,
    "type": "silence"
  },
  {
    "start": 1428.490188,
    "end": 1429.421687,
    "type": "speech"
  },
  {
    "start": 1429.421687,
    "end": 1431.936729,
    "type": "silence"
  },
  {
    "start": 1431.936729,
    "end": 1436.946771,
    "type": "speech"
  },
  {
    "start": 1436.946771,
    "end": 1440.579187,
    "type": "silence"
  },
  {
    "start": 1440.579187,
    "end": 1442.577917,
    "type": "speech"
  },
  {
    "start": 1442.577917,
    "end": 1443.517458,
    "type": "silence"
  },
  {
    "start": 1443.517458,
    "end": 1444.916687,
    "type": "speech"
  },
  {
    "start": 1444.916687,
    "end": 1445.669187,
    "type": "silence"
  },
  {
    "start": 1445.669187,
    "end": 1450.287312,
    "type": "speech"
  },
  {
    "start": 1450.287312,
    "end": 1455.504583,
    "type": "silence"
  },
  {
    "start": 1455.504583,
    "end": 1458.735958,
    "type": "speech"
  },
  {
    "start": 1458.735958,
    "end": 1459.242396,
    "type": "silence"
  },
  {
    "start": 1459.242396,
    "end": 1461.348917,
    "type": "speech"
  },
  {
    "start": 1461.348917,
    "end": 1462.978458,
    "type": "silence"
  },
  {
    "start": 1462.978458,
    "end": 1473.004312,
    "type": "speech"
  },
  {
    "start": 1473.004312,
    "end": 1473.540438,
    "type": "silence"
  },
  {
    "start": 1473.540438,
    "end": 1499.717417,
    "type": "speech"
  },
  {
    "start": 1499.717417,
    "end": 1500.602271,
    "type": "silence"
  },
  {
    "start": 1500.602271,
    "end": 1565.717854,
    "type": "speech"
  },
  {
    "start": 1565.717854,
    "end": 1566.420646,
    "type": "silence"
  },
  {
    "start": 1566.420646,
    "end": 1570.470958,
    "type": "speech"
  },
  {
    "start": 1570.470958,
    "end": 1571.392021,
    "type": "silence"
  },
  {
    "start": 1571.392021,
    "end": 1579.891167,
    "type": "speech"
  },
  {
    "start": 1579.891167,
    "end": 1580.395104,
    "type": "silence"
  },
  {
    "start": 1580.395104,
    "end": 1581.415417,
    "type": "speech"
  },
  {
    "start": 1581.415417,
    "end": 1582.642437,
    "type": "silence"
  },
  {
    "start": 1582.642437,
    "end": 1597.968458,
    "type": "speech"
  },
  {
    "start": 1597.968458,
    "end": 1599.028042,
    "type": "silence"
  },
  {
    "start": 1599.028042,
    "end": 1599.092104,
    "type": "speech"
  },
  {
    "start": 1599.092104,
    "end": 1599.62825,
    "type": "silence"
  },
  {
    "start": 1599.62825,
    "end": 1600.372062,
    "type": "speech"
  },
  {
    "start": 1600.372062,
    "end": 1601.854979,
    "type": "silence"
  },
  {
    "start": 1601.854979,
    "end": 1601.855104,
    "type": "speech"
  },
  {
    "start": 1601.855104,
    "end": 1605.336771,
    "type": "silence"
  },
  {
    "start": 1605.336771,
    "end": 1605.340146,
    "type": "speech"
  },
  {
    "start": 1605.340146,
    "end": 1607.147062,
    "type": "silence"
  },
  {
    "start": 1607.147062,
    "end": 1628.574229,
    "type": "speech"
  },
  {
    "start": 1628.574229,
    "end": 1629.251729,
    "type": "silence"
  },
  {
    "start": 1629.251729,
    "end": 1631.999729,
    "type": "speech"
  },
  {
    "start": 1631.999729,
    "end": 1632.528396,
    "type": "silence"
  },
  {
    "start": 1632.528396,
    "end": 1689.893125,
    "type": "speech"
  },
  {
    "start": 1689.893125,
    "end": 1690.484083,
    "type": "silence"
  },
  {
    "start": 1690.484083,
    "end": 1693.162917,
    "type": "speech"
  },
  {
    "start": 1693.162917,
    "end": 1698.72225,
    "type": "silence"
  },
  {
    "start": 1698.72225,
    "end": 1698.722979,
    "type": "speech"
  },
  {
    "start": 1698.722979,
    "end": 1699.881667,
    "type": "silence"
  },
  {
    "start": 1699.881667,
    "end": 1699.882333,
    "type": "speech"
  },
  {
    "start": 1699.882333,
    "end": 1703.857021,
    "type": "silence"
  },
  {
    "start": 1703.857021,
    "end": 1703.901042,
    "type": "speech"
  },
  {
    "start": 1703.901042,
    "end": 1704.59375,
    "type": "silence"
  },
  {
    "start": 1704.59375,
    "end": 1705.060354,
    "type": "speech"
  },
  {
    "start": 1705.060354,
    "end": 1706.376167,
    "type": "silence"
  },
  {
    "start": 1706.376167,
    "end": 1706.376896,
    "type": "speech"
  },
  {
    "start": 1706.376896,
    "end": 1707.219479,
    "type": "silence"
  },
  {
    "start": 1707.219479,
    "end": 1707.4795,
    "type": "speech"
  },
  {
    "start": 1707.4795,
    "end": 1722.879354,
    "type": "silence"
  },
  {
    "start": 1722.879354,
    "end": 1723.052854,
    "type": "speech"
  },
  {
    "start": 1723.052854,
    "end": 1723.839458,
    "type": "silence"
  },
  {
    "start": 1723.839458,
    "end": 1736.626167,
    "type": "speech"
  },
  {
    "start": 1736.626167,
    "end": 1737.963667,
    "type": "silence"
  },
  {
    "start": 1737.963667,
    "end": 1741.386479,
    "type": "speech"
  },
  {
    "start": 1741.386479,
    "end": 1741.996083,
    "type": "silence"
  },
  {
    "start": 1741.996083,
    "end": 1771.653354,
    "type": "speech"
  },
  {
    "start": 1771.653354,
    "end": 1773.011271,
    "type": "silence"
  },
  {
    "start": 1773.011271,
    "end": 1774.674188,
    "type": "speech"
  },
  {
    "start": 1774.674188,
    "end": 1775.823167,
    "type": "silence"
  },
  {
    "start": 1775.823167,
    "end": 1780.524979,
    "type": "speech"
  },
  {
    "start": 1780.524979,
    "end": 1782.3945,
    "type": "silence"
  },
  {
    "start": 1782.3945,
    "end": 1784.529833,
    "type": "speech"
  },
  {
    "start": 1784.529833,
    "end": 1785.214187,
    "type": "silence"
  },
  {
    "start": 1785.214187,
    "end": 1785.326083,
    "type": "speech"
  },
  {
    "start": 1785.326083,
    "end": 1786.299313,
    "type": "silence"
  },
  {
    "start": 1786.299313,
    "end": 1790.590375,
    "type": "speech"
  },
  {
    "start": 1790.590375,
    "end": 1792.387625,
    "type": "silence"
  },
  {
    "start": 1792.387625,
    "end": 1797.387625,
    "type": "speech"
  }
],
  totalDuration: 1797.387625,
  speechDuration: 1609.08,
  silenceDuration: 188.31,
  silencePercentage: 10.5,
};

// Edit decision list (what to keep/remove)
export const pf_02_camera_1Edl: EditDecisionList = {
  sourceFile: "footage/programming-fundamentals/pf-02-camera-1-silence.txt",
  cuts: [
  {
    "originalStart": 2.263854,
    "originalEnd": 28.282041999999997,
    "newStart": 0,
    "newEnd": 26.018188,
    "type": "keep"
  },
  {
    "originalStart": 28.546208,
    "originalEnd": 40.087646,
    "newStart": 26.018188,
    "newEnd": 37.559625999999994,
    "type": "keep"
  },
  {
    "originalStart": 40.681646,
    "originalEnd": 108.948375,
    "newStart": 37.559625999999994,
    "newEnd": 105.82635499999999,
    "type": "keep"
  },
  {
    "originalStart": 109.26539600000001,
    "originalEnd": 120.956417,
    "newStart": 105.82635499999999,
    "newEnd": 117.51737599999998,
    "type": "keep"
  },
  {
    "originalStart": 121.224896,
    "originalEnd": 123.61731200000001,
    "newStart": 117.51737599999998,
    "newEnd": 119.909792,
    "type": "keep"
  },
  {
    "originalStart": 123.869917,
    "originalEnd": 132.826521,
    "newStart": 119.909792,
    "newEnd": 128.866396,
    "type": "keep"
  },
  {
    "originalStart": 133.397875,
    "originalEnd": 135.193958,
    "newStart": 128.866396,
    "newEnd": 130.66247900000002,
    "type": "keep"
  },
  {
    "originalStart": 136.86587500000002,
    "originalEnd": 137.961667,
    "newStart": 130.66247900000002,
    "newEnd": 131.758271,
    "type": "keep"
  },
  {
    "originalStart": 139.308375,
    "originalEnd": 179.388708,
    "newStart": 131.758271,
    "newEnd": 171.838604,
    "type": "keep"
  },
  {
    "originalStart": 179.93422900000002,
    "originalEnd": 229.324646,
    "newStart": 171.838604,
    "newEnd": 221.229021,
    "type": "keep"
  },
  {
    "originalStart": 229.57612500000002,
    "originalEnd": 234.179583,
    "newStart": 221.229021,
    "newEnd": 225.83247899999998,
    "type": "keep"
  },
  {
    "originalStart": 236.958354,
    "originalEnd": 245.240812,
    "newStart": 225.83247899999998,
    "newEnd": 234.11493699999997,
    "type": "keep"
  },
  {
    "originalStart": 245.491771,
    "originalEnd": 266.67387499999995,
    "newStart": 234.11493699999997,
    "newEnd": 255.29704099999992,
    "type": "keep"
  },
  {
    "originalStart": 267.000542,
    "originalEnd": 270.941938,
    "newStart": 255.29704099999992,
    "newEnd": 259.2384369999999,
    "type": "keep"
  },
  {
    "originalStart": 271.540979,
    "originalEnd": 276.94285399999995,
    "newStart": 259.2384369999999,
    "newEnd": 264.6403119999999,
    "type": "keep"
  },
  {
    "originalStart": 277.47997899999996,
    "originalEnd": 355.179583,
    "newStart": 264.6403119999999,
    "newEnd": 342.3399159999999,
    "type": "keep"
  },
  {
    "originalStart": 355.688625,
    "originalEnd": 376.54075,
    "newStart": 342.3399159999999,
    "newEnd": 363.1920409999999,
    "type": "keep"
  },
  {
    "originalStart": 377.512292,
    "originalEnd": 387.54385399999995,
    "newStart": 363.1920409999999,
    "newEnd": 373.22360299999986,
    "type": "keep"
  },
  {
    "originalStart": 387.990396,
    "originalEnd": 414.80283299999996,
    "newStart": 373.22360299999986,
    "newEnd": 400.03603999999984,
    "type": "keep"
  },
  {
    "originalStart": 415.26014599999996,
    "originalEnd": 429.507208,
    "newStart": 400.03603999999984,
    "newEnd": 414.2831019999999,
    "type": "keep"
  },
  {
    "originalStart": 431.50589599999995,
    "originalEnd": 432.707521,
    "newStart": 414.2831019999999,
    "newEnd": 415.4847269999999,
    "type": "keep"
  },
  {
    "originalStart": 433.461187,
    "originalEnd": 433.711208,
    "newStart": 415.4847269999999,
    "newEnd": 415.7347479999999,
    "type": "keep"
  },
  {
    "originalStart": 434.084729,
    "originalEnd": 440.540688,
    "newStart": 415.7347479999999,
    "newEnd": 422.1907069999999,
    "type": "keep"
  },
  {
    "originalStart": 441.14097899999996,
    "originalEnd": 441.41391699999997,
    "newStart": 422.1907069999999,
    "newEnd": 422.46364499999993,
    "type": "keep"
  },
  {
    "originalStart": 442.03106199999996,
    "originalEnd": 447.75735399999996,
    "newStart": 422.46364499999993,
    "newEnd": 428.18993699999993,
    "type": "keep"
  },
  {
    "originalStart": 448.560687,
    "originalEnd": 509.703958,
    "newStart": 428.18993699999993,
    "newEnd": 489.33320799999996,
    "type": "keep"
  },
  {
    "originalStart": 510.145583,
    "originalEnd": 549.978667,
    "newStart": 489.33320799999996,
    "newEnd": 529.1662919999999,
    "type": "keep"
  },
  {
    "originalStart": 550.294667,
    "originalEnd": 563.921896,
    "newStart": 529.1662919999999,
    "newEnd": 542.7935209999998,
    "type": "keep"
  },
  {
    "originalStart": 564.443104,
    "originalEnd": 586.783833,
    "newStart": 542.7935209999998,
    "newEnd": 565.1342499999998,
    "type": "keep"
  },
  {
    "originalStart": 587.440625,
    "originalEnd": 610.870687,
    "newStart": 565.1342499999998,
    "newEnd": 588.5643119999999,
    "type": "keep"
  },
  {
    "originalStart": 611.144646,
    "originalEnd": 615.5255,
    "newStart": 588.5643119999999,
    "newEnd": 592.9451659999999,
    "type": "keep"
  },
  {
    "originalStart": 615.810604,
    "originalEnd": 644.344937,
    "newStart": 592.9451659999999,
    "newEnd": 621.4794989999998,
    "type": "keep"
  },
  {
    "originalStart": 644.831271,
    "originalEnd": 646.017833,
    "newStart": 621.4794989999998,
    "newEnd": 622.6660609999998,
    "type": "keep"
  },
  {
    "originalStart": 646.4619369999999,
    "originalEnd": 649.2773129999999,
    "newStart": 622.6660609999998,
    "newEnd": 625.4814369999998,
    "type": "keep"
  },
  {
    "originalStart": 649.6075,
    "originalEnd": 652.5580209999999,
    "newStart": 625.4814369999998,
    "newEnd": 628.4319579999998,
    "type": "keep"
  },
  {
    "originalStart": 653.209292,
    "originalEnd": 656.722979,
    "newStart": 628.4319579999998,
    "newEnd": 631.9456449999998,
    "type": "keep"
  },
  {
    "originalStart": 657.0412709999999,
    "originalEnd": 670.587729,
    "newStart": 631.9456449999998,
    "newEnd": 645.4921029999998,
    "type": "keep"
  },
  {
    "originalStart": 670.847187,
    "originalEnd": 671.864187,
    "newStart": 645.4921029999998,
    "newEnd": 646.5091029999999,
    "type": "keep"
  },
  {
    "originalStart": 672.237583,
    "originalEnd": 672.586354,
    "newStart": 646.5091029999999,
    "newEnd": 646.8578739999999,
    "type": "keep"
  },
  {
    "originalStart": 672.971542,
    "originalEnd": 682.717771,
    "newStart": 646.8578739999999,
    "newEnd": 656.6041029999999,
    "type": "keep"
  },
  {
    "originalStart": 683.204562,
    "originalEnd": 684.842958,
    "newStart": 656.6041029999999,
    "newEnd": 658.2424989999998,
    "type": "keep"
  },
  {
    "originalStart": 686.277604,
    "originalEnd": 689.076271,
    "newStart": 658.2424989999998,
    "newEnd": 661.0411659999999,
    "type": "keep"
  },
  {
    "originalStart": 691.273187,
    "originalEnd": 692.028458,
    "newStart": 661.0411659999999,
    "newEnd": 661.7964369999999,
    "type": "keep"
  },
  {
    "originalStart": 692.464833,
    "originalEnd": 693.235458,
    "newStart": 661.7964369999999,
    "newEnd": 662.5670619999999,
    "type": "keep"
  },
  {
    "originalStart": 693.8383329999999,
    "originalEnd": 698.527417,
    "newStart": 662.5670619999999,
    "newEnd": 667.256146,
    "type": "keep"
  },
  {
    "originalStart": 699.391312,
    "originalEnd": 701.067937,
    "newStart": 667.256146,
    "newEnd": 668.932771,
    "type": "keep"
  },
  {
    "originalStart": 701.357,
    "originalEnd": 703.0651879999999,
    "newStart": 668.932771,
    "newEnd": 670.640959,
    "type": "keep"
  },
  {
    "originalStart": 708.7167919999999,
    "originalEnd": 709.228,
    "newStart": 670.640959,
    "newEnd": 671.152167,
    "type": "keep"
  },
  {
    "originalStart": 710.855021,
    "originalEnd": 714.398146,
    "newStart": 671.152167,
    "newEnd": 674.695292,
    "type": "keep"
  },
  {
    "originalStart": 714.950167,
    "originalEnd": 717.5864379999999,
    "newStart": 674.695292,
    "newEnd": 677.331563,
    "type": "keep"
  },
  {
    "originalStart": 718.440854,
    "originalEnd": 722.090792,
    "newStart": 677.331563,
    "newEnd": 680.981501,
    "type": "keep"
  },
  {
    "originalStart": 723.298312,
    "originalEnd": 725.14875,
    "newStart": 680.981501,
    "newEnd": 682.8319389999999,
    "type": "keep"
  },
  {
    "originalStart": 727.3210829999999,
    "originalEnd": 737.8762919999999,
    "newStart": 682.8319389999999,
    "newEnd": 693.3871479999999,
    "type": "keep"
  },
  {
    "originalStart": 738.597271,
    "originalEnd": 749.923958,
    "newStart": 693.3871479999999,
    "newEnd": 704.7138349999999,
    "type": "keep"
  },
  {
    "originalStart": 751.144667,
    "originalEnd": 751.938229,
    "newStart": 704.7138349999999,
    "newEnd": 705.5073969999999,
    "type": "keep"
  },
  {
    "originalStart": 752.233896,
    "originalEnd": 752.488437,
    "newStart": 705.5073969999999,
    "newEnd": 705.7619379999999,
    "type": "keep"
  },
  {
    "originalStart": 752.9132079999999,
    "originalEnd": 762.616958,
    "newStart": 705.7619379999999,
    "newEnd": 715.4656879999999,
    "type": "keep"
  },
  {
    "originalStart": 763.250812,
    "originalEnd": 767.154,
    "newStart": 715.4656879999999,
    "newEnd": 719.3688759999999,
    "type": "keep"
  },
  {
    "originalStart": 767.714167,
    "originalEnd": 767.96425,
    "newStart": 719.3688759999999,
    "newEnd": 719.6189589999999,
    "type": "keep"
  },
  {
    "originalStart": 769.905396,
    "originalEnd": 778.208771,
    "newStart": 719.6189589999999,
    "newEnd": 727.9223339999999,
    "type": "keep"
  },
  {
    "originalStart": 778.526667,
    "originalEnd": 778.990917,
    "newStart": 727.9223339999999,
    "newEnd": 728.3865839999999,
    "type": "keep"
  },
  {
    "originalStart": 779.329896,
    "originalEnd": 783.427,
    "newStart": 728.3865839999999,
    "newEnd": 732.4836879999999,
    "type": "keep"
  },
  {
    "originalStart": 783.7150419999999,
    "originalEnd": 785.531312,
    "newStart": 732.4836879999999,
    "newEnd": 734.299958,
    "type": "keep"
  },
  {
    "originalStart": 786.240646,
    "originalEnd": 791.679125,
    "newStart": 734.299958,
    "newEnd": 739.738437,
    "type": "keep"
  },
  {
    "originalStart": 792.275688,
    "originalEnd": 795.153417,
    "newStart": 739.738437,
    "newEnd": 742.616166,
    "type": "keep"
  },
  {
    "originalStart": 795.455646,
    "originalEnd": 796.479521,
    "newStart": 742.616166,
    "newEnd": 743.640041,
    "type": "keep"
  },
  {
    "originalStart": 797.434833,
    "originalEnd": 798.962979,
    "newStart": 743.640041,
    "newEnd": 745.168187,
    "type": "keep"
  },
  {
    "originalStart": 799.504458,
    "originalEnd": 806.289375,
    "newStart": 745.168187,
    "newEnd": 751.9531039999999,
    "type": "keep"
  },
  {
    "originalStart": 806.547521,
    "originalEnd": 807.815021,
    "newStart": 751.9531039999999,
    "newEnd": 753.220604,
    "type": "keep"
  },
  {
    "originalStart": 808.4902079999999,
    "originalEnd": 814.084042,
    "newStart": 753.220604,
    "newEnd": 758.814438,
    "type": "keep"
  },
  {
    "originalStart": 814.381146,
    "originalEnd": 821.224687,
    "newStart": 758.814438,
    "newEnd": 765.6579790000001,
    "type": "keep"
  },
  {
    "originalStart": 822.032708,
    "originalEnd": 825.406,
    "newStart": 765.6579790000001,
    "newEnd": 769.0312710000001,
    "type": "keep"
  },
  {
    "originalStart": 825.6756879999999,
    "originalEnd": 830.0894999999999,
    "newStart": 769.0312710000001,
    "newEnd": 773.4450830000001,
    "type": "keep"
  },
  {
    "originalStart": 830.370021,
    "originalEnd": 894.368333,
    "newStart": 773.4450830000001,
    "newEnd": 837.4433950000001,
    "type": "keep"
  },
  {
    "originalStart": 895.014687,
    "originalEnd": 946.392958,
    "newStart": 837.4433950000001,
    "newEnd": 888.8216660000002,
    "type": "keep"
  },
  {
    "originalStart": 946.857562,
    "originalEnd": 955.704062,
    "newStart": 888.8216660000002,
    "newEnd": 897.6681660000002,
    "type": "keep"
  },
  {
    "originalStart": 955.954625,
    "originalEnd": 965.3147289999999,
    "newStart": 897.6681660000002,
    "newEnd": 907.0282700000001,
    "type": "keep"
  },
  {
    "originalStart": 965.880667,
    "originalEnd": 990.252625,
    "newStart": 907.0282700000001,
    "newEnd": 931.4002280000001,
    "type": "keep"
  },
  {
    "originalStart": 990.7937919999999,
    "originalEnd": 1027.431667,
    "newStart": 931.4002280000001,
    "newEnd": 968.0381030000002,
    "type": "keep"
  },
  {
    "originalStart": 1028.090646,
    "originalEnd": 1050.010229,
    "newStart": 968.0381030000002,
    "newEnd": 989.9576860000001,
    "type": "keep"
  },
  {
    "originalStart": 1050.279187,
    "originalEnd": 1051.057667,
    "newStart": 989.9576860000001,
    "newEnd": 990.736166,
    "type": "keep"
  },
  {
    "originalStart": 1051.564771,
    "originalEnd": 1067.930896,
    "newStart": 990.736166,
    "newEnd": 1007.102291,
    "type": "keep"
  },
  {
    "originalStart": 1068.479417,
    "originalEnd": 1070.123417,
    "newStart": 1007.102291,
    "newEnd": 1008.746291,
    "type": "keep"
  },
  {
    "originalStart": 1070.5057080000001,
    "originalEnd": 1073.083875,
    "newStart": 1008.746291,
    "newEnd": 1011.3244579999999,
    "type": "keep"
  },
  {
    "originalStart": 1073.3715000000002,
    "originalEnd": 1076.617854,
    "newStart": 1011.3244579999999,
    "newEnd": 1014.5708119999998,
    "type": "keep"
  },
  {
    "originalStart": 1076.885125,
    "originalEnd": 1079.253521,
    "newStart": 1014.5708119999998,
    "newEnd": 1016.9392079999999,
    "type": "keep"
  },
  {
    "originalStart": 1079.5180830000002,
    "originalEnd": 1100.6167500000001,
    "newStart": 1016.9392079999999,
    "newEnd": 1038.037875,
    "type": "keep"
  },
  {
    "originalStart": 1100.9766670000001,
    "originalEnd": 1110.466396,
    "newStart": 1038.037875,
    "newEnd": 1047.5276039999999,
    "type": "keep"
  },
  {
    "originalStart": 1111.129042,
    "originalEnd": 1112.9219170000001,
    "newStart": 1047.5276039999999,
    "newEnd": 1049.320479,
    "type": "keep"
  },
  {
    "originalStart": 1113.905688,
    "originalEnd": 1115.827229,
    "newStart": 1049.320479,
    "newEnd": 1051.24202,
    "type": "keep"
  },
  {
    "originalStart": 1116.6668750000001,
    "originalEnd": 1117.7234170000002,
    "newStart": 1051.24202,
    "newEnd": 1052.298562,
    "type": "keep"
  },
  {
    "originalStart": 1118.353979,
    "originalEnd": 1123.806667,
    "newStart": 1052.298562,
    "newEnd": 1057.75125,
    "type": "keep"
  },
  {
    "originalStart": 1124.454437,
    "originalEnd": 1128.6008330000002,
    "newStart": 1057.75125,
    "newEnd": 1061.8976460000001,
    "type": "keep"
  },
  {
    "originalStart": 1129.988708,
    "originalEnd": 1135.2715420000002,
    "newStart": 1061.8976460000001,
    "newEnd": 1067.1804800000002,
    "type": "keep"
  },
  {
    "originalStart": 1135.551729,
    "originalEnd": 1135.8868750000001,
    "newStart": 1067.1804800000002,
    "newEnd": 1067.5156260000003,
    "type": "keep"
  },
  {
    "originalStart": 1136.6538540000001,
    "originalEnd": 1138.655042,
    "newStart": 1067.5156260000003,
    "newEnd": 1069.5168140000003,
    "type": "keep"
  },
  {
    "originalStart": 1140.11825,
    "originalEnd": 1178.870437,
    "newStart": 1069.5168140000003,
    "newEnd": 1108.2690010000003,
    "type": "keep"
  },
  {
    "originalStart": 1179.600187,
    "originalEnd": 1181.0405420000002,
    "newStart": 1108.2690010000003,
    "newEnd": 1109.7093560000005,
    "type": "keep"
  },
  {
    "originalStart": 1181.592417,
    "originalEnd": 1183.961917,
    "newStart": 1109.7093560000005,
    "newEnd": 1112.0788560000005,
    "type": "keep"
  },
  {
    "originalStart": 1184.399333,
    "originalEnd": 1189.426271,
    "newStart": 1112.0788560000005,
    "newEnd": 1117.1057940000005,
    "type": "keep"
  },
  {
    "originalStart": 1191.5833750000002,
    "originalEnd": 1196.354292,
    "newStart": 1117.1057940000005,
    "newEnd": 1121.8767110000003,
    "type": "keep"
  },
  {
    "originalStart": 1197.100938,
    "originalEnd": 1198.557792,
    "newStart": 1121.8767110000003,
    "newEnd": 1123.3335650000004,
    "type": "keep"
  },
  {
    "originalStart": 1198.8530210000001,
    "originalEnd": 1209.021083,
    "newStart": 1123.3335650000004,
    "newEnd": 1133.5016270000003,
    "type": "keep"
  },
  {
    "originalStart": 1209.377854,
    "originalEnd": 1218.207437,
    "newStart": 1133.5016270000003,
    "newEnd": 1142.3312100000003,
    "type": "keep"
  },
  {
    "originalStart": 1218.791792,
    "originalEnd": 1228.942375,
    "newStart": 1142.3312100000003,
    "newEnd": 1152.4817930000004,
    "type": "keep"
  },
  {
    "originalStart": 1230.144708,
    "originalEnd": 1242.8352080000002,
    "newStart": 1152.4817930000004,
    "newEnd": 1165.1722930000005,
    "type": "keep"
  },
  {
    "originalStart": 1243.169854,
    "originalEnd": 1252.040354,
    "newStart": 1165.1722930000005,
    "newEnd": 1174.0427930000005,
    "type": "keep"
  },
  {
    "originalStart": 1252.2937920000002,
    "originalEnd": 1277.0461460000001,
    "newStart": 1174.0427930000005,
    "newEnd": 1198.7951470000005,
    "type": "keep"
  },
  {
    "originalStart": 1277.315208,
    "originalEnd": 1283.589979,
    "newStart": 1198.7951470000005,
    "newEnd": 1205.0699180000006,
    "type": "keep"
  },
  {
    "originalStart": 1284.0237710000001,
    "originalEnd": 1284.543333,
    "newStart": 1205.0699180000006,
    "newEnd": 1205.5894800000005,
    "type": "keep"
  },
  {
    "originalStart": 1285.3321250000001,
    "originalEnd": 1296.547958,
    "newStart": 1205.5894800000005,
    "newEnd": 1216.8053130000005,
    "type": "keep"
  },
  {
    "originalStart": 1296.852437,
    "originalEnd": 1307.016354,
    "newStart": 1216.8053130000005,
    "newEnd": 1226.9692300000006,
    "type": "keep"
  },
  {
    "originalStart": 1307.3198750000001,
    "originalEnd": 1320.3207710000001,
    "newStart": 1226.9692300000006,
    "newEnd": 1239.9701260000006,
    "type": "keep"
  },
  {
    "originalStart": 1321.1238540000002,
    "originalEnd": 1353.18525,
    "newStart": 1239.9701260000006,
    "newEnd": 1272.0315220000005,
    "type": "keep"
  },
  {
    "originalStart": 1353.4892710000001,
    "originalEnd": 1355.3104170000001,
    "newStart": 1272.0315220000005,
    "newEnd": 1273.8526680000004,
    "type": "keep"
  },
  {
    "originalStart": 1355.763104,
    "originalEnd": 1356.809979,
    "newStart": 1273.8526680000004,
    "newEnd": 1274.8995430000004,
    "type": "keep"
  },
  {
    "originalStart": 1357.0681040000002,
    "originalEnd": 1358.298,
    "newStart": 1274.8995430000004,
    "newEnd": 1276.1294390000003,
    "type": "keep"
  },
  {
    "originalStart": 1358.7669580000002,
    "originalEnd": 1367.165938,
    "newStart": 1276.1294390000003,
    "newEnd": 1284.5284190000002,
    "type": "keep"
  },
  {
    "originalStart": 1367.598833,
    "originalEnd": 1370.3440830000002,
    "newStart": 1284.5284190000002,
    "newEnd": 1287.2736690000004,
    "type": "keep"
  },
  {
    "originalStart": 1370.7000620000001,
    "originalEnd": 1371.6297920000002,
    "newStart": 1287.2736690000004,
    "newEnd": 1288.2033990000004,
    "type": "keep"
  },
  {
    "originalStart": 1372.4429790000002,
    "originalEnd": 1376.7135420000002,
    "newStart": 1288.2033990000004,
    "newEnd": 1292.4739620000005,
    "type": "keep"
  },
  {
    "originalStart": 1377.4748960000002,
    "originalEnd": 1381.082188,
    "newStart": 1292.4739620000005,
    "newEnd": 1296.0812540000004,
    "type": "keep"
  },
  {
    "originalStart": 1381.3663960000001,
    "originalEnd": 1404.7469170000002,
    "newStart": 1296.0812540000004,
    "newEnd": 1319.4617750000004,
    "type": "keep"
  },
  {
    "originalStart": 1405.2643540000001,
    "originalEnd": 1423.9120420000002,
    "newStart": 1319.4617750000004,
    "newEnd": 1338.1094630000005,
    "type": "keep"
  },
  {
    "originalStart": 1424.323854,
    "originalEnd": 1427.2846670000001,
    "newStart": 1338.1094630000005,
    "newEnd": 1341.0702760000006,
    "type": "keep"
  },
  {
    "originalStart": 1428.390188,
    "originalEnd": 1429.571687,
    "newStart": 1341.0702760000006,
    "newEnd": 1342.2517750000006,
    "type": "keep"
  },
  {
    "originalStart": 1431.836729,
    "originalEnd": 1437.096771,
    "newStart": 1342.2517750000006,
    "newEnd": 1347.5118170000005,
    "type": "keep"
  },
  {
    "originalStart": 1440.4791870000001,
    "originalEnd": 1442.7279170000002,
    "newStart": 1347.5118170000005,
    "newEnd": 1349.7605470000005,
    "type": "keep"
  },
  {
    "originalStart": 1443.4174580000001,
    "originalEnd": 1445.066687,
    "newStart": 1349.7605470000005,
    "newEnd": 1351.4097760000004,
    "type": "keep"
  },
  {
    "originalStart": 1445.569187,
    "originalEnd": 1450.437312,
    "newStart": 1351.4097760000004,
    "newEnd": 1356.2779010000004,
    "type": "keep"
  },
  {
    "originalStart": 1455.404583,
    "originalEnd": 1458.885958,
    "newStart": 1356.2779010000004,
    "newEnd": 1359.7592760000005,
    "type": "keep"
  },
  {
    "originalStart": 1459.1423960000002,
    "originalEnd": 1461.4989170000001,
    "newStart": 1359.7592760000005,
    "newEnd": 1362.1157970000004,
    "type": "keep"
  },
  {
    "originalStart": 1462.8784580000001,
    "originalEnd": 1473.1543120000001,
    "newStart": 1362.1157970000004,
    "newEnd": 1372.3916510000004,
    "type": "keep"
  },
  {
    "originalStart": 1473.440438,
    "originalEnd": 1499.8674170000002,
    "newStart": 1372.3916510000004,
    "newEnd": 1398.8186300000004,
    "type": "keep"
  },
  {
    "originalStart": 1500.502271,
    "originalEnd": 1565.867854,
    "newStart": 1398.8186300000004,
    "newEnd": 1464.1842130000005,
    "type": "keep"
  },
  {
    "originalStart": 1566.3206460000001,
    "originalEnd": 1570.6209580000002,
    "newStart": 1464.1842130000005,
    "newEnd": 1468.4845250000005,
    "type": "keep"
  },
  {
    "originalStart": 1571.2920210000002,
    "originalEnd": 1580.041167,
    "newStart": 1468.4845250000005,
    "newEnd": 1477.2336710000004,
    "type": "keep"
  },
  {
    "originalStart": 1580.295104,
    "originalEnd": 1581.565417,
    "newStart": 1477.2336710000004,
    "newEnd": 1478.5039840000004,
    "type": "keep"
  },
  {
    "originalStart": 1582.542437,
    "originalEnd": 1598.1184580000001,
    "newStart": 1478.5039840000004,
    "newEnd": 1494.0800050000005,
    "type": "keep"
  },
  {
    "originalStart": 1598.928042,
    "originalEnd": 1599.2421040000002,
    "newStart": 1494.0800050000005,
    "newEnd": 1494.3940670000006,
    "type": "keep"
  },
  {
    "originalStart": 1599.52825,
    "originalEnd": 1600.522062,
    "newStart": 1494.3940670000006,
    "newEnd": 1495.3878790000006,
    "type": "keep"
  },
  {
    "originalStart": 1601.754979,
    "originalEnd": 1602.005104,
    "newStart": 1495.3878790000006,
    "newEnd": 1495.6380040000006,
    "type": "keep"
  },
  {
    "originalStart": 1605.236771,
    "originalEnd": 1605.490146,
    "newStart": 1495.6380040000006,
    "newEnd": 1495.8913790000006,
    "type": "keep"
  },
  {
    "originalStart": 1607.047062,
    "originalEnd": 1628.7242290000002,
    "newStart": 1495.8913790000006,
    "newEnd": 1517.5685460000007,
    "type": "keep"
  },
  {
    "originalStart": 1629.1517290000002,
    "originalEnd": 1632.149729,
    "newStart": 1517.5685460000007,
    "newEnd": 1520.5665460000005,
    "type": "keep"
  },
  {
    "originalStart": 1632.428396,
    "originalEnd": 1690.0431250000001,
    "newStart": 1520.5665460000005,
    "newEnd": 1578.1812750000006,
    "type": "keep"
  },
  {
    "originalStart": 1690.3840830000001,
    "originalEnd": 1693.3129170000002,
    "newStart": 1578.1812750000006,
    "newEnd": 1581.1101090000006,
    "type": "keep"
  },
  {
    "originalStart": 1698.6222500000001,
    "originalEnd": 1698.872979,
    "newStart": 1581.1101090000006,
    "newEnd": 1581.3608380000005,
    "type": "keep"
  },
  {
    "originalStart": 1699.7816670000002,
    "originalEnd": 1700.032333,
    "newStart": 1581.3608380000005,
    "newEnd": 1581.6115040000004,
    "type": "keep"
  },
  {
    "originalStart": 1703.7570210000001,
    "originalEnd": 1704.051042,
    "newStart": 1581.6115040000004,
    "newEnd": 1581.9055250000004,
    "type": "keep"
  },
  {
    "originalStart": 1704.49375,
    "originalEnd": 1705.210354,
    "newStart": 1581.9055250000004,
    "newEnd": 1582.6221290000003,
    "type": "keep"
  },
  {
    "originalStart": 1706.276167,
    "originalEnd": 1706.526896,
    "newStart": 1582.6221290000003,
    "newEnd": 1582.8728580000004,
    "type": "keep"
  },
  {
    "originalStart": 1707.1194790000002,
    "originalEnd": 1707.6295,
    "newStart": 1582.8728580000004,
    "newEnd": 1583.3828790000002,
    "type": "keep"
  },
  {
    "originalStart": 1722.779354,
    "originalEnd": 1723.2028540000001,
    "newStart": 1583.3828790000002,
    "newEnd": 1583.8063790000003,
    "type": "keep"
  },
  {
    "originalStart": 1723.739458,
    "originalEnd": 1736.776167,
    "newStart": 1583.8063790000003,
    "newEnd": 1596.8430880000003,
    "type": "keep"
  },
  {
    "originalStart": 1737.863667,
    "originalEnd": 1741.536479,
    "newStart": 1596.8430880000003,
    "newEnd": 1600.5159000000003,
    "type": "keep"
  },
  {
    "originalStart": 1741.896083,
    "originalEnd": 1771.8033540000001,
    "newStart": 1600.5159000000003,
    "newEnd": 1630.4231710000004,
    "type": "keep"
  },
  {
    "originalStart": 1772.9112710000002,
    "originalEnd": 1774.824188,
    "newStart": 1630.4231710000004,
    "newEnd": 1632.3360880000002,
    "type": "keep"
  },
  {
    "originalStart": 1775.723167,
    "originalEnd": 1780.6749790000001,
    "newStart": 1632.3360880000002,
    "newEnd": 1637.2879000000003,
    "type": "keep"
  },
  {
    "originalStart": 1782.2945000000002,
    "originalEnd": 1784.6798330000001,
    "newStart": 1637.2879000000003,
    "newEnd": 1639.6732330000002,
    "type": "keep"
  },
  {
    "originalStart": 1785.1141870000001,
    "originalEnd": 1785.476083,
    "newStart": 1639.6732330000002,
    "newEnd": 1640.035129,
    "type": "keep"
  },
  {
    "originalStart": 1786.199313,
    "originalEnd": 1790.740375,
    "newStart": 1640.035129,
    "newEnd": 1644.576191,
    "type": "keep"
  },
  {
    "originalStart": 1792.2876250000002,
    "originalEnd": 1797.387625,
    "newStart": 1644.576191,
    "newEnd": 1649.676191,
    "type": "keep"
  }
],
  originalDuration: 1797.387625,
  outputDuration: 1649.68,
  timeSaved: 147.71,
};

// Remotion sequences at 30 fps
export const pf_02_camera_1Sequences = edlToRemotionSequences(pf_02_camera_1Edl, 30);

// Summary
// Original: 29m 57s
// After cuts: 27m 29s
// Time saved: 2m 27s (8.2%)
