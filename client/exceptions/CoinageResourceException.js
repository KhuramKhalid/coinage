/* aexception caught by the media resource */

function CoinageResourceException(message) {
    this.name = "CoinageResourceException";
    this.message = message || "";
    this.stack = (new Error()).stack;
}

CoinageResourceException.prototype = Object.create(Error.prototype);
CoinageResourceException.prototype.constructor = CoinageResourceException;

export default CoinageResourceException;