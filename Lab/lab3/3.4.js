const iface = {
  name: 'service',
  version: 2,
  start(a, b) {},
  stop() {},
  restart: function (x, y, z) {},
  log: (msg) => console.log(msg),
  config: { debug: true },
};

const result = [];

for (const key in iface) {
  if (typeof iface[key] === 'function') {
    result.push([key, iface[key].length]);
  }
}

console.log(result);