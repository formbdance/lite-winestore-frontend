const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    // ...
    webpack: {
        alias: {
            '@store': resolvePath('./src/store.js'),
            '@productslice': resolvePath('./src/features/items/productSlice.js'),
            '@filteredSlice': resolvePath('./src/features/items/filteredSlice.js')
        }
    },
  // ...
}