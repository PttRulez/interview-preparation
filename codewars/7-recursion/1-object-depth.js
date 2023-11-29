function depth(obj) {
  function recursive(o, d) {
		if (!o || typeof o !== 'object' || Array.isArray(o)) return d

		return Math.max(...Object.values(o).map(v => recursive(v, d + 1)), d)
	}

	return recursive(obj, 0)
}
