/* import toastr styling */
import 'toastr/build/toastr.min.css';

module.exports = {
    toast:function(notificationType, title, message, callback) {
        toastr.options = {
            closeButton: true,
            debug: false,
            positionClass: 'toast-bottom-left',
            onclick: null
        }
        toastr.options.onclick = callback;
        var $toast = toastr[notificationType](message, title);
    }
}