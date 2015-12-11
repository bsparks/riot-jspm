module.exports.translate = function(load) {
    return this.import('riot-compiler')
        .then(compiler => compiler.compile(load.source));
};