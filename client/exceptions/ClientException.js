/* a generic client exception type when no other meaningful exception type exisits */

function ClientException(message) {
    this.name = "ClientException";
    this.message = message || "";
    this.stack = (new Error()).stack;
}

ClientException.prototype = Object.create(Error.prototype);
ClientException.prototype.constructor = ClientException;

export default ClientException;