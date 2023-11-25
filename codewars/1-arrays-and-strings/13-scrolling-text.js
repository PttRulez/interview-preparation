// https://www.codewars.com/kata/scrolling-text/train/javascript

function scrollingText(text){
  const result = [text.toUpperCase()];

	for (let i = 0; i < text.length - 1; i++) {
		const prev = result[result.length-1];
		result.push((prev.slice(1,) + prev[0]));
	}

	return result;
}

function scrollingText(text){
  let result = []
  
  for( var i = 0; i < text.length; i++){
    result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
  }
  
  return result
}