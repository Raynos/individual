var root

if (typeof window !== "undefined") {
    root = window
} else if (typeof global !== "undefined") {
    root = global
}

module.exports = Individual

function Individual(key, value) {
    if (root[key]) {
        return root[key]
    }

    Object.defineProperty(root, key, {
        value: value
        , configurable: true
    })

    return value
}
