
function formatCid (cid) {
  const object = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01,
  };
  const ordenedCid = cid.sort((a, b) => {
    return object[a[1]] > object[b[1]]
      ? 1 : (object[b[1]] > object[a[1]] ? -1 : 0);
  }).reverse();
  const newCid = ordenedCid.reduce((accumulator, array) => {
    const key = array[0];
    let value = array[1];
    const realValue = object[key];
    let quantity = 0;
    while (value > 0) {
      value = (value - realValue).toFixed(2);
      quantity++;
    }
    return [...accumulator, {name: key, value: realValue, quantity}];
  }, []);
  return newCid;
}

function tryGiveChange (change, cid) {
  const object = {};
  for (let entry of cid) {
    const {name, value} = entry;
    let quantity = entry['quantity'];
    while (quantity) {
      const test = (change - value) >= 0;
      if (test) {
        quantity--;
        change = (change - value).toFixed(2);
        object[name] ? object[name] += value : object[name] = value;
        continue;
      }
      break;
    }
    console.log('change',change);
    if (change === '0.00') {
      return Object.entries(object);
    }
  }
  return false;
}

function checkCashRegister(price, cash, cid) {
  const newCid = formatCid(cid);
  const change = cash - price;
  const totalOfCashInRegister= cid.reduce((accumulator, array) => {
    const value = array[1];
    return accumulator += value;
  }, 0).toFixed(2);
  if (totalOfCashInRegister < change) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  }
  if (totalOfCashInRegister == change) {
    return {
      status: 'CLOSED',
      change: cid.reverse()
    }
  }
  const isPossibleGiveChange = tryGiveChange(change, newCid);
  console.log('isPossibleGiveChange',isPossibleGiveChange);
  if (isPossibleGiveChange) {
    return {
      status: 'OPEN',
      change: isPossibleGiveChange
    }
  }
  if (totalOfCashInRegister > change) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  }
  return {status: "OPEN", change: [["QUARTER", 0.5]]}
}