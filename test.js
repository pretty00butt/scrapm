var scrapm = require('./index');

var options = {
  url: 'http://likms.assembly.go.kr/bill/jsp/CoactorListPopup.jsp?bill_id=PRC_J1D5K0P9M1V1J1L7L3E8N4Z6P1N8B2',
  encoding: true,
  sourceEncoding: 'EUC-KR',
  targetEncoding: 'UTF-8',
  blocked: true
};

scrapm(options, function (err, $) {
  console.log($('.text5_B').text());
});
