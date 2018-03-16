// 基于 num 的乘法表
function cftable(num) {
	num = parseInt(num || 1, 10)
	var txt = ''
	for(let i = 1;i <= num;i++) {
		for(let j = 1;j <= i;j++) {
			txt += j+'*'+i+'='+j*i+(j === i ? ' \n' : ' ')
		}
	}
	return txt
} 

// 微信红包（总金额，个数）
/**
 * 红包总额等于 totalM，随机分配，最低金额 0.01元，最高金额 均值(剩余)*2 
 * @param {*} totalM 
 * @param {*} tnum 
 */
function ranNum(totalM, tnum) {
	var rnList = [], // 分配列表
		maxM = 0 // 每次循环红包领取的最大值
	for(let i = 0;i < tnum;i++) {
		maxM = (totalM/(tnum-i))*2
		var currM = (Math.random()*maxM).toFixed(2)
		i == tnum - 1 ? rnList.push(totalM.toFixed(2)) : rnList.push(currM)
		totalM -= currM		
	}
	return rnList
}
// 字符串里面取出出现次数最多的字符以及次数 getMaxStr('aaabbbccdddddd')
function getMaxStr(str){
	if (typeof str != 'string') {
		return '数据类型必须是字符串'
	}
	var arr = Array.from(new Set(str.split(''))),
		numarr = {},
		maxnum = 0,
		max = []
	for(let i = 0,l=arr.length;i<l;i++){
		var num = str.length - str.replace(new RegExp(arr[i],'g'),'').length
		numarr[arr[i]] = num
		num > maxnum && (function(){
			maxnum = num
		})()
	}
	for(var akey in numarr) {
		numarr[akey] == maxnum && max.push(akey)
	}
	return '出现次数最多的是：'+max.join('、')+', '+maxnum+'次'
}
// 随机颜色
function getRandomColor() {
	return '#'+Math.random().toString(16).substring(2,8)
}
// 冒泡排序 arr = [12,1,13,4,28,22,1,9,16]
function getMaxNumByMP(arr) {
	let l = arr.length
	let total = 0
	for(let i = 0;i<l-1;i++) {
		for(let j = 0;j<l-1-i;j++) {
			// 前一位比后一位大，位置互换
			total++;
			arr[j] > arr[j+1] && ([arr[j],arr[j+1]] = [arr[j+1],arr[j]])
		}
	}
	console.log(`共循环了 ${total} 次`)
	return arr
}
// 快速排序 arr = [12,1,13,4,28,22,1,9,16]
function getMaxNumByKS(arr) {
	if (arr.length<=1) {return arr}
	let total = 0
	let mid = Math.floor(arr.length/2)
	let midBase = arr.splice(mid,1)[0]
	let left = []
	let right = []
	for(let i = 0,l=arr.length;i<l;i++) {
		total++
		arr[i] < midBase ? left.push(arr[i]) : right.push(arr[i])
	}
	console.log(total)
	return getMaxNumByKS(left).concat([midBase],getMaxNumByKS(right))
}
// 判断是否是数组
/*
类型	结果
Undefined	"undefined"
Null	"object"（见下文）
Boolean	"boolean"
Number	"number"
String	"string"
Symbol （ECMAScript 6 新增）	"symbol"
宿主对象（由JS环境提供）	Implementation-dependent
函数对象（[[Call]] 在ECMA-262条款中实现了）	"function"
任何其他对象	"object"
*/
function isArray(arr) {
	return Object.prototype.toString.call(arr) == '[object Array]'
}
function isJsonObj(obj) {
	return Object.prototype.toString.call(obj) == '[object Object]'
}
