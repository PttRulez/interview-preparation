// https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/train/javascript


function sortStringsByVowels(strings){
	return strings.sort((a,b) => {
    if(!a.length) return 1;
    if(!b.length) return -1;

		const arr = a.match(/[aeiouAEIOU]+/g) || []
		const am = [...(a.match(/[aeiouAEIOU]+/g) || [])].reduce((acc, cur) => Math.max(cur.length, acc), 0)
		const bm = [...(b.match(/[aeiouAEIOU]+/g) || [])].reduce((acc, cur) => Math.max(cur.length, acc), 0)
		return bm - am
	})
}

function sortStringsByVowels(ss) {
  const gl=s=>(Math.max(...(s.match(/[aeiou]+/ig)||[]).map(r=>r.length)))
  return ss.sort((a,b)=>gl(b)-gl(a));
}