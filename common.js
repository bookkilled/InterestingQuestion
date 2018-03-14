// -----------------------------字符串处理----------------------------
// 金额大小写转换
function ToDX(n) {
	if (n == '0' || n == '') return "";
	if (n.length > 12) return "超过最大额度";
	if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return "数据非法";
	var unit = "仟佰拾亿仟佰拾万仟佰拾元角分",
		str = "";
	n += "00";
	var p = n.indexOf('.');
	if (p >= 0) n = n.substring(0, p) + n.substr(p + 1, 2);
	unit = unit.substr(unit.length - n.length);
	for (var i = 0; i < n.length; i++) str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
	return str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
}
// 手机号掩码
function cutMobile(str) {
	return str.replace(/^(\d{3})(\d*)(\d{4})$/g, '$1****$3');
}
// 身份证掩码
function cutIDCard(str) {
	var len = str.length - 8;
	return str.replace(/^([\s\S]{4})(\d*)(\d{4})$/g, '$1' + Array(len).fill('*').join('') + '$3');
}
// 数字","隔开 12,345,678.13
function cutmoney(s) {
	if (s == '' || s == '--') {return '--'}
	s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(2) + '';
	var l = s.split('.')[0].split('').reverse();
	var r = s.split('.')[1];
	var t = '';
	for (var i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
	}
	return t.split('').reverse().join('') + '.' + r;
}
