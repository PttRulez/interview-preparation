// https://www.codewars.com/kata/59de9e6a28fcedb892000142/train/javascript

const isObject = (obj) => (typeof obj === 'object' && !Array.isArray(obj) && obj !== null);

function search(files) {

	let res = null
	function recursive (node, curPath) {
		if (!isObject(node)) {
			res = curPath;
		} else {
			for (const key in node) {
				recursive(node[key], curPath + '/' + key)
			}
		}
	}

	recursive(files, '');

	if (!res) throw new Error('No files!');

	return res.slice(1)
}

function search(files, path = []) {
  for (const [key, value] of Object.entries(files)) {
    if (typeof value !== 'object') {    
      return [...path, key].join('/');
    } else {
      try {
        return search(files[key], [...path, key]);
      } catch(e) {}
    }
  }
  throw new Error()
}
