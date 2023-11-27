// https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript

const whosOnline = (friends) => {
	return friends.reduce((acc, cur) => {
    const prop = cur.status === 'offline' ? 'offline'
									: cur.lastActivity > 10 ? 'away' : 'online';

		if (acc[prop]) {
			acc[prop].push(cur.username);
		} else {
			acc[prop] = [cur.username]
		}

    return acc
	}, {})	
}

const a = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]